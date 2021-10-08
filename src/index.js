
const path = require('path');
const fastify = require('fastify')({
    logger: true
})
fastify.register(require('fastify-formbody'))

fastify.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs')
    }
})

const policysRoutes = require("./routes/policies.routes");
const swagger = require("./utils/swagger")

require('./utils/mongoose');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'views'),
    prefix: '/views/', //optional: defautl '/'
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
