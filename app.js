import express from "express";
import errorMiddleware from "./middlewares/Error.js";
import userRouter from "./routes/user.js";
import { connectDB } from "./config/database.js";

const app = express();

connectDB();

app.use("/users", userRouter);
app.listen(4000, () => console.log('server is working '));

app.use(errorMiddleware);