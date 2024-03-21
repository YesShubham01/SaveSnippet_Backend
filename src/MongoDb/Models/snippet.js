import mongoose from "mongoose";


const snippetSchema = new mongoose.Schema({
    username: { type: String, required: true },
    language: { type: String, required: true },
    stdin: { type: String, required: true },
    timestamp: { type: String, required: true },
    code: { type: String, required: true },
});

const Snippet = mongoose.model("Snippet", snippetSchema);


export const getSnippets = () => Snippet.find();
export const createSnippet = (values) => {
    console.log('Creating snippet with values:', values);
    return new Snippet(values).save()
        .then((snippet) => snippet.toObject())
        .catch((error) => {
            console.error('Error creating snippet:', error);
            throw error;
        });
};
export const getSnippetByUsername = (username) => Snippet.find({ username });