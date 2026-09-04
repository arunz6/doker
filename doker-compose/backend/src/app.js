import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json())
app.use(morgan("dev"));


app.get("/api/user", (req, res) => {
    res.status(200).json({
        message: "api is working"
    });
});

export default app;
