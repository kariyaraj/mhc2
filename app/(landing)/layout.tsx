import { Suspense, type PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
    </Suspense>
  );
};

export default LandingLayout;
