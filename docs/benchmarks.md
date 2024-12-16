---
sidebar_position: 4
---

# Benchmarks

Some basic benchmarks have been created. They compare kinekt to express, fastify and oak. Note that these are very basic benchmarks and do not give a full picture of the performance of these frameworks.

Two factors contribute to kinekt's great performance:

The biggest performance gain comes from kinekt's router implementation. It is based on a radix-tree-like data structure which is created at start-up and allows for very fast routing of deeply nested routes.

The middleware engine is another factor. An endpoint is just a relatively short chain of functions which do a bit of work, such as deserializing the request body and serializing the response body. The work performed by the pipeline processor is minimal and hence results in great performance.

Results can be seen [here](https://github.com/simplicity/kinekt-benchmarks) (printed in the "Run benchmark" job).
