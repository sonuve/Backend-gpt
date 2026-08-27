import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
    success: "true",
  });
});
const port = 8080;

app.listen(port, () => {
  console.log(`server running prort${port}`);
});
