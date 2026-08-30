import express from "express";

const app = express();

app.use(express.json());   // ✅ () add kiya — ye hi bug tha

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});

export default app;