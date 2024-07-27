import { auth } from "@clerk/nextjs";
import { type NextRequest, NextResponse } from "next/server";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { messages ,userMessage } = body;

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });
    // if (!configuration.apiKey)
    //   return new NextResponse("OpenAI api key not configured.", {
    //     status: 500,
    //   });

    if (!messages)
      return new NextResponse("Messages are required.", { status: 400 });

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro)
      return new NextResponse("Free trial has expired.", { status: 403 });

    messages.unshift({
      role: "system", content:"your goal is to provide Mindfulness and Meditation guidance, guide the user through various mindfulness exercises and meditation techniques. Offer step-by-step instructions for practices like deep breathing, body scans, and guided imagery."});
      const values={
        model:"alyssa-qs",
        prompt:userMessage.content,
        messages:messages,
        stream:false,
      }
      const response=await axios.post(process.env.OLLAMA_API_URL,values);
      const response2={
        "role":"system",
        "content":response.data.response
      }
      console.log(response.data);
    if (!isPro) await increaseApiLimit();

    return NextResponse.json(response2, { status: 200 });
  } catch (error: unknown) {
    console.error("[CONVERSATION_ERROR]: ", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}

