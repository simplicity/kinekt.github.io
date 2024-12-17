---
sidebar_position: 3
---

# Auto-Generated Clients

## Serve it and call it

When creating an endpoint with `createSchematizedEndpointFactory`, you get an object which you can use in two ways:

- pass it to a server to serve the endpoint
- call it to fetch the endpoint

Create an endpoint:

```TypeScript
const createUser = app.createEndpoint(...);
```

Serve it:

```TypeScript
const serve = createServer();
serve(createUser, ...otherEndpoints);
```

Call it:

```TypeScript
createUser(...);
```

The options you pass to the client (in this case, `getUser`) are determined by the zod schemas you used to create the endpoint.

Note that you'll have to configure the base url that shall be used when calling the client. You might also want to pass an authorize header that shall be passed along the fetch call. You do that on the endpoint factory:

```TypeScript
app.setGlobalClientParams({
  baseUrl: process.env.BASE_URL ?? "http://0.0.0.0:3000",
  authorize: btoa("some authorization"),
})
```

## Handling results

When using a client function we expect to get a successful response most of the time. We can use the following syntax to express that we expect a specific status code. The client will throw an error in any other case:

```TypeScript
const user = await createUser({ email: "some@email.com" }).ok(200)
```

We might have scenarios where we want to handle the results more throroughly. We can use this syntax:

```TypeScript
createUser({ email: "some@email.com" })
  .all()
  .then((result) => {
    switch (result.type) {
      case "ok": {
        switch (result.value.statusCode) {
          case 200: {
            ...
          }
          case 409: {
            ...
          }
          case 400: {
            ...
          }
          case 401: {
            ...
          }
        }
      }
      case "error": {
        ...
      }
    }
  });
```

Note that the value of `result.value.statusCode` depends both on the definition of your endpoint as well as the underlying pipeline. If you define your endpoint to return `200` and `409`, you'll have to handle these. If you have a middleware like `authenticate()` in your pipeline, you'll have to handle the status code it produces, which is `401`. When using schematized endpoints, you might have validation errors, so you'll also have to handle `400`. All of this is typesafe: the compiler will complain if you try to handle status codes which a particular endpoint doesn't return.
