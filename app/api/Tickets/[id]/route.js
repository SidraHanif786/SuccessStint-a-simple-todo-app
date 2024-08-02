import { connectToMongo } from "@/lib/mongo";
import Ticket from "@/models/Ticket";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await connectToMongo()
  const foundTicket = await Ticket.findOne({ _id: id });
  await mongoose.connection.close()
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    await connectToMongo()
    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    await mongoose.connection.close()

    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    await mongoose.connection.close()
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await connectToMongo()
    await Ticket.findByIdAndDelete(id);
    await mongoose.connection.close()

    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    await mongoose.connection.close()
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
