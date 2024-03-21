import { getSnippets, createSnippet, getSnippetByUsername } from '../MongoDb/Models/snippet.js';


export const getAllSnippets = async (req, res) => {
    try {
        const snippets = await getSnippets();
        return res.status(200).json(snippets);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const createNewSnippet = async (req, res) => {
    try {
        const { username, language, stdin, timestamp, code } = req.body;
        const newSnippet = await createSnippet({ username, language, stdin, timestamp, code });
        return res.status(201).json(newSnippet);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};


export const getSnippetsByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const snippets = await getSnippetByUsername(username);
        return res.status(200).json(snippets);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};