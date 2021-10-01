const { Schema, model } = require('mongoose')

const policySchema = new Schema({
    title: String,
    description: String,
    value: String,
}, {
    timestamps: true,
    versionKey: false,
}
);

module.exports = model('Policy', policySchema);