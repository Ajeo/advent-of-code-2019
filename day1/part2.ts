import * as fs from "fs";
import * as readline from "readline";

const calculateFuelAmount = (value: number) => {
  const fuel = Math.floor(value / 3) - 2;

  if (fuel >= 0) {
    return fuel + calculateFuelAmount(fuel);
  } else {
    return 0;
  }
};

(async () => {
  let sum = 0;

  try {
    const rl = readline.createInterface({
      input: fs.createReadStream("day1/input.txt"),
      output: process.stdout,
      terminal: false
    });

    rl.on("line", line => {
      sum += calculateFuelAmount(parseInt(line, 10));
    });

    rl.on("close", () => {
      console.log(sum);
    });
  } catch (err) {
    console.log(err);
  }
})();
