const path = require("path");
const fs = require("fs");

export async function JsonConvert(data) {
    try {
        return await JSON.parse(JSON.stringify(data));
    }
    catch (error) {
        return false;
    }
}

export async function fileUpload(fileObj, uploadDir, newFileName) {
    try {
        const extension = fileObj.name.split(".").pop();
        const filename = `${newFileName}.${extension}`
        const destinationPath = path.join(uploadDir, filename);
        const fileBuffer = await fileObj.arrayBuffer();
        fs.writeFileSync(destinationPath, Buffer.from(fileBuffer));
        return filename;
    }
    catch (error) {
        return false;
    }
}