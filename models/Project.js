const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    status: {
        type: String
    },
    team: {
        role_1: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        },
        role_2: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        },
        role_3: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        },
        role_4: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        },
        role_5: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        },
        role_6: {
            role: {
                type: String,
            },
            status: {
                type: String,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user' 
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);