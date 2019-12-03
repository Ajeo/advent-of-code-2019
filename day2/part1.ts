import { promises as fsPromises } from "fs";

(async () => {
  const file = await fsPromises.readFile("day2/input.txt");
  let intCode = file.toString().split(",").map(i => +i);

  for (let i = 0; i < intCode.length; i += 4) {
    if (intCode[i] === 1) {
      intCode[intCode[i + 3]] = intCode[intCode[i + 1]] + intCode[intCode[i + 2]];
    } else if (intCode[i] === 2) {
      intCode[intCode[i + 3]] = intCode[intCode[i + 1]] * intCode[intCode[i + 2]];
    } else if (intCode[i] === 99) {
      break;
    }
  }

  console.log(intCode[0]);
})();
