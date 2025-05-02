import app from "./app";

const PORT = process.env.PORT ? Number(process.env.PORT) : 5005;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
