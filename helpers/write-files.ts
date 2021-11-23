import fs from "fs";

// write values to json file logs
const writeLogFile = (
  filePath: string,
  input: Object,
  chainID: number | undefined
): void => {
  const stringChainID = chainID ? chainID.toString() : "___";
  const fullPath = "./logs/" + stringChainID.toString() + "_" + filePath;

  console.log("writing log file...");
  if (fs.existsSync(fullPath)) {
    try {
      fs.appendFileSync(fullPath, JSON.stringify(input));
      console.log(`appended - successfully written in ${fullPath}!`);
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      fs.writeFileSync(fullPath, JSON.stringify(input));
      console.log(`created - successfully written in ${fullPath}!`);
    } catch (err) {
      console.error(err);
    }
  }
};

export default writeLogFile;
