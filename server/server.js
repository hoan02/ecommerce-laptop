const PORT = process.env.PORT || 3050;

const server = app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});