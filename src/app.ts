import express from "express";

const app = express();

app.use(express.json());

//home route

app.get("/", (req, res) => {
    res.json({
        "message": "Hello from Node + Express with Typescript"
    });
});

export default app;
