import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello world!" });
});

app.listen(8001, () => console.log("Server is running!"));
