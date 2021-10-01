exports.options = {
    routeprefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Cyber Security Controls Policies API Docs',
            description: 'Building an APIRESTfull that contains Cyber Security Controls API REST for automation. Thanks to Swagger tool we can document this API.',
            version: '0.1'
        },
        externalDocs: {
            url: 'http://localhost:3000',
            description: 'Return to HomePage'
        }
    },
    host: 'localhost:3000',
    schemas: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
}