const app = require("./src/app");
const PORT = 2000;

const sever = app.listen(PORT, () => {
  console.log(`WSV: Ecomerce started with port ${PORT}`);
});

process.on("SIGINT", () => {
  sever.close(() => {
    console.log(`Exited sever express`);
  });
});
