import fs from 'fs'
import path from 'path'

const codeDirectory = path.join(process.cwd(), 'code');

export function getCodeData() {
    var codeListFilePath = path.join(codeDirectory, 'list.json');
    console.log(codeListFilePath);
    var codeListContents = JSON.parse(fs.readFileSync(codeListFilePath, 'utf-8'));
    console.log(Object.entries(codeListContents));
    return codeListContents;
}
