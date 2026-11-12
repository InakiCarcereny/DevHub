import cloudinary from "@/config/cloudinary";

export async function uploadImage(filePathOrBase64: string, folder = "devhub") {
  const result = await cloudinary.uploader.upload(filePathOrBase64, { folder });
  return { url: result.secure_url, publicId: result.public_id };
}
