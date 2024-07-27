"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { TOOLS } from "@/constants";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI Companion
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the Alyssa - Experience the power of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Therapeutic AI</span>.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {TOOLS.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>

              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardPage />
    </Suspense>
  )
}

export default Page
