const path = require("path");
const fs = require("fs");

export async function JsonConvert(data) {
    return await JSON.parse(JSON.stringify(data));
}

export async function fileUpload(fileObj, uploadDir, newFileName) {
    const extension = fileObj.name.split(".").pop();
    const filename = `${newFileName}.${extension}`
    const destinationPath = path.join(uploadDir, filename);
    const fileBuffer = await fileObj.arrayBuffer();

    fs.writeFileSync(destinationPath, Buffer.from(fileBuffer));
}