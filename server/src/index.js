import express from "express";
import cors from "cors";
improt;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(8000, () => {
  console.log("server listening on 8000...");
});
