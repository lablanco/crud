const policyCtrl = require('../controllers/policy.controller');

const routes = [
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
        url: '/policies/:id',
        method: 'DELETE',
        handler: policyCtrl.deletePolicy,
    },
    {
        ///modificar una sola politica
        url: '/policies/:id',
        method: 'PUT',
        handler: policyCtrl.updatePolicy,
    },
];

module.exports = routes;