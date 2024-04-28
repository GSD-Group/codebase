"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

export default function Hero() {
  const words = `Invest in Commerce, We Handle the Commerce. Dive into the Amazon
  marketplace with us, where we manage everything from your LLC
  registration to operational management and inventory optimization.`;
  return (
    <div className="max-w-3xl mt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="  ">
          <TextGenerateEffect className="font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl" words=" Welcome To GSD Group- Ecommerce made simple" />
       
        </h1>
        <div className="text-slate-700">
        <TextGenerateEffect className="font-normal" words={words} />
      </div>
      </div>
      {/* <div className="text-slate-500  ">
         <TextGenerateEffect className="font-normal" words={words} />
      </div> */}
    </div>
  );
}
