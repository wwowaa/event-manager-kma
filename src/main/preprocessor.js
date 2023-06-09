// const fs = require("fs");

// const input = fs.readFileSync(inputFilePath, "utf8");

// const output = input.replace(
//   /className={s\["(.+?)"\]}/g,
//   (match, p1) =>
//     `className={${p1
//       .split(" ")
//       .map((x) => `\${s['${x}']}`)
//       .join(" ")}}`
// );

// fs.writeFileSync(outputFilePath, output);

const fs = require("fs");

function transformClassNameInFile(inputFile, outputFile) {
  let content = fs.readFileSync(inputFile, "utf8");
  let regex = /className={s\["([\w\s-]+)"\]}/g;
  let newContent = content.replace(regex, (match, p1) => {
    let parts = p1.split(" ");
    let newParts = parts.map((part) => `\${s['${part}']}`);
    return `className={\`${newParts.join(" ")}\`}`;
  });
  fs.writeFileSync(outputFile, newContent);
}

const inputFile = "./src/main/main.js"; // path to the input file
const outputFile = "./src/main/main-processed.js"; // path to the output file
transformClassNameInFile(inputFile, outputFile);
