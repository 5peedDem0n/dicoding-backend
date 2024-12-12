const fs = require("fs");

const writeableStream = fs.createWriteStream("./output.txt");
const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

// writeableStream.end("Akhir dari writable stream!");
