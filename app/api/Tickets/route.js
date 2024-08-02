import Ticket from "@/models/Ticket";
import { connectToMongo } from "@/lib/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongo()
    const tickets = await Ticket.find();
    await mongoose.connection.close()
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    await mongoose.connection.close()
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectToMongo()
    console.log(body)
    const ticketData = body.formData;

    const result = await Ticket.create(ticketData);
    console.log("====result of post=======",result)
    await mongoose.connection.close()
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    
  } catch (err) {
    console.log("=====error in post =======",err);
    await mongoose.connection.close()
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
