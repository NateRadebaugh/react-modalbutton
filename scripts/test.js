const path = require("path");
const { execSync } = require("child_process");

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

[
  "data-manipulation",
  "db-entity",
  "entity-crud-redux",
  "entity-rest-api",
  "form-validator",
  "react-form"
].forEach(packageName => {
  process.chdir(path.resolve(__dirname, "../packages/" + packageName));
  exec("yarn test");
});

process.chdir(cwd);
