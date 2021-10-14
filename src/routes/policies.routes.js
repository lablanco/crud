const policyCtrl = require('../controllers/policy.controller');

const routes = [
    {
        /// envia informacion de la api al usuario
        url: '/api/v1',
        method: 'GET',
        handler: policyCtrl.getApiV1,
    },
    {
        /// Trae pantalla de API Documentation ********/
        url: '/docs/api',
        method: 'GET',
        handler: function (request, reply) {
            reply.view('./src/views/docs.ejs', {})
        }
    },
    {
        //esta es la ruta que trae todas las políticas y las muestra.
        url: '/policies',
        method: 'GET',
        handler: policyCtrl.getPolicies,
    },
    {
        /// Una sola política
        url: '/policies/:id',
        method: 'GET',
        handler: policyCtrl.getPolicy,
    },
    {
        ///crea un nuevo producto y pasar el request body 
        url: '/policies',
        method: 'POST',
        handler: policyCtrl.createPolicy,
    },
    {
        ///borra una sola politica 
        url: '/delete/:id',
        method: 'GET',
        handler: policyCtrl.deletePolicy,
    },
    {
        ///modificar una sola politica
        url: '/edit/:id',
        method: 'POST',
        handler: policyCtrl.updatePolicy,
    },
    {
        ///trae pantalla de new policy ********/
        url: '/newpolicy',
        method: 'GET',
        handler: function (request, reply) {
            reply.view('./src/views/newpolicy.html', {})
        }
    },
    {
        ///trae pantalla de edit policy
        url: '/update/:id',
        method: 'GET',
        handler: policyCtrl.editPolicy,
    },
];

module.exports = routes;