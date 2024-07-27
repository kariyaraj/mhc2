import { LandingContent } from "@/components/landing-content";
import { LandingFooter } from "@/components/landing-footer";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import {Suspense} from "react";
const LandingPage = () => {
  return (
    <div className="h-full">
      <Suspense fallback={<>Loading...</>}>

      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
      </Suspense>
    </div>
  );
};

export default LandingPage;
