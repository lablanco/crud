const Policy = require("../models/policy.model");

// Obtiene todas las politicas
const getPolicies = async (request, reply) => {
    const policies = await Policy.find();
    return policies;
};

// Obtiene una sola politica
const getPolicy = async (request, reply) => {
    try {
        const policy = await Policy.findById(request.params.id);
        return reply.code(200).send(policy);
    } catch (error) {
        reply.code(500).send(error);
    }
};

// Crea una politica
const createPolicy = async (request, reply) => {
    ///creo nueva politica
    const newPolicy = new Policy(request.body)
    ///grabar la nueva politica en mondodb
    await newPolicy.save();
    reply.code(201).send(newPolicy);
};

// Borra una politica
const deletePolicy = async (request, reply) => {
    await Policy.findByIdAndDelete(request.params.id);
    reply.code(204).send();
};

// Modifica una politica
const updatePolicy = async (request, reply) => {
    try {
        const product = await Policy.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        );
        reply.code(200).send(product);
    } catch (error) {
        reply.code(500).send(error);
    }
};


module.exports = {
    getPolicies,
    getPolicy,
    createPolicy,
    deletePolicy,
    updatePolicy
}