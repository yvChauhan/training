import mongoose from "mongoose";
// const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    publisher: {
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
});

export const BookModel = mongoose.model('MangaBooks', bookSchema);