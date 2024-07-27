"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Your Personal AI Companion</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "To Talk Therapy.",
                "To Overcome Challenges.",
                "To Achieve Mental Clarity.",
                "To Boost Your Emotional Resilience.",
                "To Navigate Life’s Ups and Downs.",
                "To Unlock Your Inner Strength.",
                "To Rediscover Joy and Happiness.",
                "To Cultivate Mindfulness.",
                "To Build Healthier Habits.",
                "To Enhance Your Well-being.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
        Full dedication. Full intelligence.
      </div>

      <div className="">
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          asChild
        >
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            Talk with Alyssa now!
          </Link>
        </Button>
      </div>

      <div className="text-zinc-300 text-lg md:text-md font-normal">
        Built on cutting edge Natural Language Processing, 
        Alyssa is a virtual mental health companion trained on real therapy sessions.
      </div>

      <div className="text-zinc-300 text-lg md:text-md font-normal">
        Available 24/7 | Safe | No stigma. Completely anonymous. | Hyper-realistic experience
      </div>
    </div>
  );
};
