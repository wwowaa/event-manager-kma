const fs = require("fs");

function transformClassNameInFile(inputFile, outputFile) {
  let content = fs.readFileSync(inputFile, "utf8");
  content = content.replace(/class=/g, "className=");
  content = content.replace(/(id=")([^"]*)(")/g, "id={s['$2']}");
  content = content.replace(/(className=")([^"]*)(")/g, "className={s['$2']}");
  let regex = /className={s\['([\w\s-]+)'\]}/g;
  let newContent = content.replace(regex, (match, p1) => {
    let parts = p1.split(" ");
    let newParts = parts.map((part) => `\${s['${part}']}`);
    return `className={\`${newParts.join(" ")}\`}`;
  });
  fs.writeFileSync(outputFile, newContent);
}

const inputs = [
  "./App/comps/views/add_event_dialog.js",
  //   "./src/event/event.js",
  //   "./src/fullcalendar/fullcalendar.js",
  //   "./src/passreset1/passreset1.js",
  //   "./src/passreset2/passreset2.js",
  //   "./src/signup/signup.js",
];
const outputs = [
  "./App/comps/views/add_event_dialog-p.js",
  //   "./src/event/event-p.js",
  //   "./src/fullcalendar/fullcalendar-p.js",
  //   "./src/passreset1/passreset1-p.js",
  //   "./src/passreset2/passreset2-p.js",
  //   "./src/signup/signup-p.js",
];

for (let i = 0; i < 1; i++) {
  transformClassNameInFile(inputs[i], outputs[i]);
}
