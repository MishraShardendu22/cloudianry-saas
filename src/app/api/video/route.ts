/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client/extension";
import { NextRequest,NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function get(req: NextRequest){
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
                data : videos,
                status : "200",
            }
        )
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