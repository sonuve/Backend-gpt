import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
    success: "true",
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "how is health",
    success: "True",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running prort${port}`);
});
