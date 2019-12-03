import * as fs from "fs";
import * as readline from "readline";

(async () => {
  let sum = 0;

  try {
    const rl = readline.createInterface({
      input: fs.createReadStream("day1/input.txt"),
      output: process.stdout,
      terminal: false
    });

    rl.on("line", line => {
      sum += Math.floor(parseInt(line, 10) / 3) - 2;
    });

    rl.on("close", () => {
      console.log(sum);
    });
  } catch (err) {
    console.log(err);
  }
})();
