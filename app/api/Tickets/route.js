import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.aggregate([
      {
        $sort: { category: 1, priority: 1 }, // Sort by category first, then by priority
      },
      {
        $group: {
          _id: '$category', // Group by category
          tickets: { $push: '$$ROOT' }, // Push the entire ticket document into an array
        },
      },
      {
        $unwind: '$tickets', // Unwind the array back into individual documents
      },
      {
        $replaceRoot: { newRoot: '$tickets' }, // Replace the root with the ticket documents
      },
    ]);

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    
    const result = await Ticket.create(ticketData);
    
    console.log("======result==", result)
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log("error===============",err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
