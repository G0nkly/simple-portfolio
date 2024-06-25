import { promises as fs } from "fs";

export default async function loadJsonContent(path: string) {
  const configFile = await fs.readFile(process.cwd() + path, "utf8");

  return JSON.parse(configFile);
}
