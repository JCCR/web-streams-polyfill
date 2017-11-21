const fs = require('fs');
const readline = require('readline');

//const bundle = `require('../../dist/polyfill.js');`;
const bundle = `require('../../dist/polyfill.min.js');`;

readline.createInterface({
    input: fs.createReadStream(`run-web-platform-tests.js`),
    output: fs.createWriteStream(`run-web-platform-tests-on-bundle.js`),
    terminal: false,
}).on('line', function (line) {
    const m1 = line.match(
            /^(const { (?:Readable|Writable|Transform)Stream } = )/);
    const m2 = line.match(/^const ((?:ByteLength|Count)QueuingStrategy) = /);
    const out = m1 ? `${m1[1]}${bundle}` :
          m2 ? `const { ${m2[1]} } = ${bundle}` : line;
    this.output.write(`${out}\n`);
});

