const Policy = require("../models/policy.model");

// Obtiene todas las politicas como una API
const getApiV1 = async (request, reply) => {
    const t = await Policy.find({}, {
        '_id': 0,
        'system': 1,
        'policies': 1,
        'policy': 1,
        'requirement': 1,
        'description': 1,
        'value': 1
    });
    return reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ Policy: t });
};

// Obtiene todas las politicas
const getPolicies = async (request, reply) => {
    const t = await Policy.find();
    return reply.view('./src/views/main.ejs', { text: t });
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
    // ///grabar la nueva politica en mondodb
    await newPolicy.save();
    // reply.code(201).send(newPolicy);
    const t = await Policy.find();
    return reply.view('./src/views/main.ejs', { text: t });
};

// Borra una politica
const deletePolicy = async (request, reply) => {
    await Policy.findByIdAndDelete(request.params.id);
    // reply.code(204).send();
    const t = await Policy.find();
    return reply.view('./src/views/main.ejs', { text: t });
};

// Modifica una politica
const updatePolicy = async (request, reply) => {
    try {
        const { id } = request.params;
        await Policy.updateOne({ _id: id }, request.body);
        // console.log(request.params.id);
        // const product = await Policy.findByIdAndUpdate(
        //     request.params.id,
        //     request.body,
        //     { new: true }
        // );
        // reply.code(200).send(product);
    } catch (error) {
        reply.code(500).send(error);
    }
    const t = await Policy.find();
    return reply.view('./src/views/main.ejs', { text: t });
};

// trae pantalla de editpolicy
const editPolicy = async (request, reply) => {
    const t = await Policy.findOne({ _id: request.params.id }).lean();
    return reply.view('./src/views/editpolicy.ejs', { text: t });
};

module.exports = {
    getApiV1,
    getPolicies,
    getPolicy,
    createPolicy,
    deletePolicy,
    updatePolicy,
    editPolicy
}