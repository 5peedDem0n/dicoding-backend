const fs = require("fs");

// ASYNC
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("./notes.txt", "utf-8", fileReadCallback);

// SYNC
const data = fs.readFileSync("./notes.txt", "utf-8");

console.log(data);
