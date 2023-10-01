const fs = require("fs")
const randomstring = require("randomstring");
const arguments = process.argv.slice(2);
console.log(arguments);

const bloatSize = arguments[0] ? arguments[0]*1000 : 50000000;

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
        length: bloatSize,
        charset: 'alphabetic'
    });
    console.log(bloatName);
    fs.writeFileSync(tmpDir + '\\' + bloatName, bloat, err => {
        if (err) {
            console.error(err)
            return
        }
        
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

while (1) {
    bloater();
}









console.log(tmpDir);
console.log('Haha!');