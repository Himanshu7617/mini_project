import UserRoutes from "./routes/UserRoutes.js"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express();
dotenv.config()

const port = process.env.BACKEND_PORT || 3000;

app.use(express.json());

app.use(cors())

app.use("/api/v1/user",UserRoutes)

app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message); 
    res.status(500).json({
        success: false,
        message: "An unexpected error occurred.",
        error: err.message 
    });
});

// If for any reason gemini stopped working we can move to claude


app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})