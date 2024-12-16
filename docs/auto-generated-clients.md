---
sidebar_position: 3
---

# Auto-Generated Clients

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
serve(getUser);
```

Call it:

```TypeScript
getUser(...);
```

The options you can pass to the client (in this case, `getUser`) are determined by the zod schemas you used to create the endpoint.

Note that you'll have to configure the base url that shall be used when calling the client. You might also want to pass an authorize header that shall be passed along the fetch call. You do that on the endpoint factory:

```TypeScript
app.setGlobalClientParams({
    baseUrl: process.env.BASE_URL ?? "http://0.0.0.0:3000",
    authorize: btoa("some authorization"),
  })
```
