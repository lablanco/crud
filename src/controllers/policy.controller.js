const Policy = require("../models/policy.model");

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

// trae pantalla de newpolicy
const newPolicy = async (request, reply) => {
    return reply.view('./src/views/newpolicy.html', {});
};

// trae pantalla de editpolicy
const editPolicy = async (request, reply) => {
    const t = await Policy.findOne({ _id: request.params.id }).lean();
    return reply.view('./src/views/editpolicy.ejs', { text: t });
};

module.exports = {
    getPolicies,
    getPolicy,
    createPolicy,
    deletePolicy,
    updatePolicy,
    newPolicy,
    editPolicy
}