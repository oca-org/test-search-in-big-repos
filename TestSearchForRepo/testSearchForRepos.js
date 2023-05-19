"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSearchForRepos = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function testSearchForRepos(directoryPath, searchWords) {
    const files = fs_1.default.readdirSync(directoryPath);
    let results = [];
    files.forEach((file) => {
        if (file == ".git") {
            return;
        }
        const filePath = path_1.default.join(directoryPath, file);
        const stat = fs_1.default.statSync(filePath);
        const fileContainsWords = (filePath, words) => {
            const fileContent = fs_1.default.readFileSync(filePath, 'utf8');
            for (const word of words) {
                if (!fileContent.includes(word)) {
                    return false;
                }
            }
            return true;
        };
        if (stat.isDirectory()) {
            results = results.concat(testSearchForRepos(filePath, searchWords));
        }
        else if (stat.isFile() && fileContainsWords(filePath, searchWords)) {
            results.push(filePath);
        }
    });
    return results;
}
exports.testSearchForRepos = testSearchForRepos;
//# sourceMappingURL=testSearchForRepos.js.map