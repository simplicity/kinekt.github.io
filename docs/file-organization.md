---
sidebar_position: 4
---

# File organization

In kinekt, you're free in how you organize your endpoint code. Note that there are no mutable `app` or `router` objects that you have to awkwardly pass around. There's no controller classes to wrap around your endpoints. Instead, you typically have an endpoint factory from which you forge your endpoints, which ultimately are just async functions. The individual endpoints can then be imported into and served from a single file.

The recommended approach is to create a separate file per endpoint. You will most likely be writing code to interact with a DB. Such code belongs into the same file, together with the endpoint declaration. With this approach, you achieve a good separation of concerns, where a single usecase (for example, "Create User") is self-contained in a file. If you have shared DB code (or any other kind of helper functions), extract them as needed.

A full example of "Create User" could look something like this (taken from [here](https://github.com/simplicity/try-kinekt-with-node)):

```TypeScript title="./createUser.ts"
import { z } from "zod";
import { db } from "../../../db/db";
import { users } from "../../../db/schema";
import { pipeline } from "../../pipeline";

type User = typeof users.$inferInsert;

async function insertUser(user: User) {
  return db
    .insert(users)
    .values(user)
    .returning()
    .then((result) => result.at(0)!)
    .catch(() => null);
}

export const createUser = pipeline.createEndpoint(
  "POST /users",

  {
    body: z.object({ name: z.string(), email: z.string() }),
    response: {
      200: z.custom<User>(),
      409: z.custom<{ message: string }>(),
    },
  },

  async ({ body }) => {
    const user = await insertUser(body);

    if (user === null) {
      return {
        statusCode: 409,
        body: { message: `User with email '${body.email}' already exists.` },
      };
    }

    return {
      statusCode: 200,
      body: user,
    };
  }
);
```
