const {spawn} = require("build-utils/process");
const path = require("path");

const command = process.argv[2];
if(command == "dev") {
  dev();
}
else {
  throw new Error("Unknown command " + command);
}

function dev() {
  console.log("Compiling server");

  spawn("node", ["node_modules/typescript/lib/tsc.js", "-w"], {
    shell: true,
    stdio: "inherit",
  });

  spawn("node", ["node_modules/nodemon/bin/nodemon.js", "src/server/dist/main.js"], {
    shell: true,
    stdio: "inherit",
  });

  spawn("ng", ["serve", "--open"], {
    shell: true,
    stdio: "inherit"
  });
}
