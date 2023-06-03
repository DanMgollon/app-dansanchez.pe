import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string
})

export const uploadPFD = async (pdfBuffer: any): Promise<string> => {
  const fileName = Date.now().toString(36)
  return await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'raw',
          folder: 'ferreteria_jr/pdfs',
          public_id: `${fileName}.pdf`,
          overwrite: false
        },
        (error, result) => {
          if (error !== undefined && error !== undefined) {
            reject(error)
          }
          resolve(result?.secure_url as string)
        }
      )
      .end(pdfBuffer)
  })
}
