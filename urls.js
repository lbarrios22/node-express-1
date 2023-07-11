const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { URL } = require('url');



let fileName = process.argv[2];
async function readFiles(fileName) {
    try {
        const fileContent = await fs.promises.readFile(fileName, 'utf8');
        const urls = fileContent.split('\n');
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            try {
                const res = await axios.get(url);
                const urlContent = res.data;
                if (urlContent === undefined) {
                    continue;
                } else {
                    const parsedUrl = new URL(url);
                    const filePath = `${parsedUrl.hostname}`;
                    await fs.promises.writeFile(filePath, urlContent);
                    console.log(`Data written to ${filePath}`);
                }
            } catch (err) {
                console.warn(`Website not found, 404 ${url}`);
                continue;
            }
        }
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

readFiles(fileName);