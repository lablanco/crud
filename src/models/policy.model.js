const { Schema, model } = require('mongoose')

const policySchema = new Schema({
    system: {
        type: String,
        enum: ['Windows', 'Unix', 'Oracle', 'SAP'],
        required: true
    },
    policies: {
        type: String,
        enum: ['Accounts', 'Local Settings', 'Event Log', 'System Services'],
        required: true
    },
    policy: {
        type: String,
        enum: ['Password Policy', 'Account Lockout Policy'],
        required: true
    },
    requirement: String,
    description: String,
    value: String,
    scan: String,
    remediate: String
}, {
    timestamps: true
}
);

module.exports = model('Policy', policySchema);