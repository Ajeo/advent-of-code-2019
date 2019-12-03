import { promises as fsPromises } from "fs";

const runProgram = (intCode: number[]) => {
  for (let i = 0; i < intCode.length; i += 4) {
    if (intCode[i] === 1) {
      intCode[intCode[i + 3]] = intCode[intCode[i + 1]] + intCode[intCode[i + 2]];
    } else if (intCode[i] === 2) {
      intCode[intCode[i + 3]] = intCode[intCode[i + 1]] * intCode[intCode[i + 2]];
    } else if (intCode[i] === 99) {
      break;
    }
  }

  return intCode[0];
};

(async () => {
  let noum = 0;
  let verb = 0;

  const file = await fsPromises.readFile("day2/input.txt");
  let intCode = file.toString().split(",").map(i => +i);

  while (verb <= 99) {
    noum = 0;
    while (noum <= 99) {
      let intCodeCopy = [...intCode];
      intCodeCopy[1] = noum;
      intCodeCopy[2] = verb;


      const result = runProgram(intCodeCopy);

      if (result === 19690720) {
        console.log("noum", noum);
        console.log("verb", verb);
      }

      noum++;
    }
    verb++;
  }
})();
