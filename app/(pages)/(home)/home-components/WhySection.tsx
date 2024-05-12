import Image from "next/image";
import { HandCoins, Scale } from "lucide-react";
import { FadeIn } from "@/app/components/ui/FadeIn";
import { Container } from "@/app/components/ui/Container";
export default function WhySection() {
  return (
    <Container>
      <FadeIn className=" flex flex-col justify-center">
        <div className="">
          <div className="mx-auto  max-w-2xl lg:max-w-none">
            <div className="max-w-2xl">
              <h2 className="">
                <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white">
                  Harnessing ecommerce for a brighter future
                </span>
              </h2>
              <div className="mt-6 text-xl text-slate-300 font-light">
                <p>
                  We firmly believe that e-commerce holds the key to addressing
                  some of the most pressing challenges of our time. Yet, it's
                  also undeniable that e-commerce has contributed to its fair
                  share of issues. It's a bit of a catch-22 situation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex">
                <article className=" bg-white relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <div className="w-full flex items-center flex-col">
                    <Image
                      height={150}
                      src={"/amazon.svg"}
                      width={200}
                      alt="amazon logo"></Image>

                    <p className=" text-base text-neutral-600">
                      Investing in an Amazon store means stepping into a world
                      of proven success. With millions of satisfied customers
                      worldwide, Amazon's platform offers unparalleled exposure
                      and credibility for your brand.
                    </p>
                  </div>
                </article>
              </div>
              <div className="flex">
                <article className="relative bg-white flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <div className="w-full flex items-center flex-col">
                    <HandCoins className="mt-5" size={100}></HandCoins>
                    <p className="mt-10 text-base text-neutral-600">
                      Enjoy the ease of generating passive income with GSD
                      Groups fully automated business model, allowing you to
                      earn without the need for day-to-day involvement.
                    </p>
                  </div>
                </article>
              </div>
              <div className="flex">
                <article className=" bg-white relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <div className="w-full flex items-center flex-col">
                    <Scale className="mt-5" size={100}></Scale>
                    <p className="mt-10 text-base text-neutral-600">
                      With GSD Group, you won't have to worry about navigating
                      the complexities of legal compliance. Our team takes care
                      of all the legal requirements.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>{" "}
    </Container>
  );
}
