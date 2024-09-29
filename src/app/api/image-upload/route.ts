/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { auth } from '@clerk/nextjs/server';
import { request } from 'http';
import { error } from 'console';
import { buffer } from 'stream/consumers';

cloudinary.config(
    {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)

interface CloudinaryUploadResult {
    public_id: string;
    [key : string] : any;
}

export async function POST(req : NextRequest){
    const { userId } = await auth();

    if(!userId){
        return NextResponse.json(
            { message: "This route requires authentication" },
            { status: 401 }
        );
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file');
        

        // worked earlier
        
        // this is done to treat an a file like a 
        // file and not like a video or an image
        
        // const bytes = await file?.arrayBuffer()
        // const buffer = Buffer.from(bytes);

        // method using ChatGpt
        // Check if file exists and is an instance of File
        if (file && file instanceof File) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Perform your Cloudinary upload here using the `buffer`
            // e.g., await cloudinary.uploader.upload_stream(...)
        } else {
            return NextResponse.json(
                { error: "File not provided or Invalid" },
                { status: 400 }
            );
        }

        const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
            const UploadStream = cloudinary.uploader.upload_stream(
                {folder : "next-cloudianry-image"},(error, result) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve(result as CloudinaryUploadResult);
                    }
                }
            )
            UploadStream.end(buffer)
        })

        return NextResponse.json(
            {
                publicId: result.public_id
            },
            {
                status: 200
            }
        )

    }catch (error) {
        console.log("UPload image failed", error)
        return NextResponse.json({error: "Upload image failed"}, {status: 500})
    }
}
