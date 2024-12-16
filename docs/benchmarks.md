---
sidebar_position: 4
---

# Benchmarks

Some basic benchmarks have been created. They compare kinekt to express, fastify and oak. Note that these are very basic benchmarks and do not give a full picture of the performance of these frameworks.

The biggest performance gain comes from kinekt's router implementation. It is based on a radix-like tree which is created at start-up and allows for very fast routing of deeply nested routes.

Results can be seen [here](https://github.com/simplicity/kinekt-benchmarks) (printed in the "Run benchmark" job).
