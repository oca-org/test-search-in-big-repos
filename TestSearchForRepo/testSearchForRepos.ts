import fs from 'fs';
import path from 'path';

export function testSearchForRepos(directoryPath: string, searchWords: string[]): string[] {

  const files = fs.readdirSync(directoryPath);

  let results: string[] = [];

  files.forEach((file) => {
    if (file == ".git") {
      return;
    }
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    const fileContainsWords = (filePath: string, words: string[]): boolean => {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      for (const word of words) {
        if (!fileContent.includes(word)) {
          return false;
        }
      }
      return true;
    };

    if (stat.isDirectory()) {
      results = results.concat(testSearchForRepos(filePath, searchWords));
    } else if (stat.isFile() && fileContainsWords(filePath, searchWords)) {
      results.push(filePath);
    }
  });


  return results;
}