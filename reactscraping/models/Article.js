const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nytreactSchema = new Schema ({

    title: {
        type: String,
        required: true
    },

    date: { 
        type: Date,
        default: Date.now
    },

    link: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Article", nytreactSchema);

module.exports = Article;