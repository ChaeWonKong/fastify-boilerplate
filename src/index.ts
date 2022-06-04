const PORT = 3000;
import Fastify from "fastify";
const fastify = Fastify({
  // logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send("hello world");
});

// Run the server!
fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
  console.log(`process running on: ${PORT}`);
});

/**
 * 
 * fastify.get('/', schema, function (req, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen(3000)
 */
