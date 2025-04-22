const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
    const buffer = Buffer.from(chunk);
    console.log('Buffer data:', buffer.toString());
    writableStream.write(buffer);
});

readableStream.on('end', () => {
    console.log('File reading completed');
    writableStream.end();
});