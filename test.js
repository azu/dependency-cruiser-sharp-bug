const path = require("path");
const { cruise } = require("dependency-cruiser");
const ROOT_DIR = path.join(__dirname, "src");
const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = [ROOT_DIR];
const cruiseResult = cruise(ARRAY_OF_FILES_AND_DIRS_TO_CRUISE);
console.log(JSON.stringify(cruiseResult, null, 4));