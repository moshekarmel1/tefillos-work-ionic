var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    title: String,
    name: String,
    description: String,
    percent: { type: Number, default: 0},
    max: Number,
    created: {type: Date, default: Date.now},
    createdBy: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }]
});

mongoose.model('Event', EventSchema);
