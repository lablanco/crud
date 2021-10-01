
const path = require('path');
const fastify = require('fastify')({
    logger: true
})

const policysRoutes = require("./routes/policies.routes");
const swagger = require("./utils/swagger")

require('./utils/mongoose');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', //optional: defautl '/'
})

fastify.register(require(`fastify-swagger`), swagger.options);

fastify.get("/", (request, reply) => {
    reply.sendFile('index.html')
});

policysRoutes.forEach((route) => {
    fastify.route(route);
});


const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`serverlistening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }

};

start();
