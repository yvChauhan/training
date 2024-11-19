import mongoose from "mongoose";

const { Schema } = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    publication: {
        type: Schema.ObjectId,
        ref: 'Company',
    }
});

export const AuthorModel = mongoose.model('Author', authorSchema);