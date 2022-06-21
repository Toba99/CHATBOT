const { v4: uuidv4 } = require("uuid");

module.exports = async (image)=>{
    try {
        
		 const dataArr = image.split(",");
		 if (
			 dataArr.includes("data:image/jpeg;base64") !== true &&
			 dataArr.includes("data:image/png;base64") !== true
		 ) {
			 return {
				 message: "Your avatar must be of type jpg, jpeg or png",
				 status: false,
			 };
		 }
		//  const [bucketExist] = await storage.bucket(bucketName).exists();

		// if (!bucketExist) {
		// 	await storage.createBucket(bucketName);
		// }
         const bucketName="test";
		// const imageBuffer = Buffer.from(dataArr[1], "base64");

		// const userAvatar = new Buffer.from(imageBuffer);
		const filename = `${uuidv4()}`;

		// const size600 = await sharp(imageBuffer).resize(600, 600).jpeg().toBuffer();
		// const size100 = await sharp(imageBuffer).resize(100, 100).jpeg().toBuffer();

		// await storage.bucket(bucketName).file(`${filename}.jpeg`).save(size100);
		// await storage.bucket(bucketName).file(`${filename}-600.jpeg`).save(size600);

		const avatar = `https://storage.googleapis.com/${bucketName}/${filename}.jpeg`;
        return {status: true, filename: avatar, message:"successful"}
    } catch (error) {
        console.log("ImageUploadError ===>", JSON.stringify(error));
        return {status: false, message: "please try again"}
    }
}