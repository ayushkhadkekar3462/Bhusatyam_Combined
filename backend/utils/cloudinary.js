import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME, 
  api_key: ENV.CLOUDINARY_API_KEY, 
  api_secret: ENV.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
const uploadOnCloudinary = async (localFilePath) => {
  try{
    if(!localFilePath){
      return null;
    }
    const response= await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    console.log("file uploaded on cloudinary")
    return response;
  }
  catch(error){
    // console.log(error)
    fs.unlinkSync(localFilePath);
    return null;
  }

}
export {uploadOnCloudinary}