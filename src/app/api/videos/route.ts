/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest){
    try{
        const videos = await prisma.video.findMany(
            {
                orderBy : {
                    createdAt : "desc"
                }
            }
        )
        return NextResponse.json(
            {
                data: videos,
            },
            {
                status: 200,
            }
        );
        
    }catch(error){
        console.log("There was an Error in the get request",error);
        return NextResponse.json(
            {
                error : "There was an Error in Fetching the video",
                status : "500",
            }
        )
    }finally{
        await prisma.$disconnect();
    }
}