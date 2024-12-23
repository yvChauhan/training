import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    publisher: {
        type: Schema.ObjectId,
        ref: 'Author',
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