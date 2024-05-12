import Hero from "./home-components/HomeHero";
import HomeParallax from "./home-components/homeParallax";
import Navbar from "../../components/Navbar";
import WhySection from "./home-components/WhySection";
import { ListItem, List } from "@/app/components/ui/List";
import { FadeIn } from "@/app/components/ui/FadeIn";
import { Container } from "@/app/components/ui/Container";
import { StylizedImage } from "@/app/components/ui/StylizedImage";
import { SectionIntro } from "@/app/components/ui/SectionIntro";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div className=" ">
      <FadeIn>
        <main>
          <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
            <h1 className="mx-auto  max-w-4xl linw font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              GSD Group - Ecommerce{" "}
              <span className="relative whitespace-nowrap text-blue-600  ">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative ">made simple</span>
              </span>{" "}
            </h1>
            <TextGenerateEffect
              className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
              words="Invest in Commerce, We Handle the Commerce. Dive into the Amazon
  marketplace with us, where we manage everything from your LLC
  registration to operational management and inventory optimization."
            />

            <div className="mt-10 flex justify-center gap-x-6">
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                href="/register">
                Contact Us
              </a>
              <a
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12">
                  <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                </svg>
                <span className="ml-3">learn More</span>
              </a>
            </div>
            <div className="mt-36 lg:mt-44"></div>
          </div>
        </main>
        <div className="flex flex-col items-center ">
          <div className="w-[97vw]">
            <HomeParallax />
          </div>
          <div className="  w-full h-fit py-10 bg-blue-600 flex flex-col items-center justify-center">
            <WhySection></WhySection>
          </div>{" "}
        </div>{" "}
        <Services />
      </FadeIn>
      <div className="mt-20  border-t-[0.5rem] border-t-primary">
        <Contact />{" "}
      </div>
      <footer className="w-full mt-32 mb-10 pb-10 flex justify-center">
        <p>© {new Date().getFullYear()} GSD Group Inc. All rights reserved</p>
      </footer>
    </div>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you profit from new opportunities in the e-commerce market."
        className="mt-24 sm:mt-32 lg:mt-40">
        <p>Step into the future of e-commerce without lifting a finger.</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w- flex-none lg:w-[45rem]">
              <StylizedImage
                src="https://oss.ejet.com/2021/04/Web-capture_15-4-2023_4528_yandex.com_.jpeg"
                width={10}
                height={10}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Full-Service Store Management">
              From setup to day-to-day operations, we manage your Amazon store
              so you can focus on making investments, not decisions.
            </ListItem>
            <ListItem title="Optimized Inventory Solutions">
              Our expertise in inventory management ensures your products are
              stocked, managed, and optimized for profitability.
            </ListItem>
            <ListItem title="Customized Marketing Strategies">
              We tailor marketing strategies to boost your store’s visibility
              and sales, leveraging Amazon’s powerful advertising tools.
            </ListItem>
            <ListItem title="Legal and Compliance">
              We Navigate Amazon’s complex legal landscape so you can focus on
              whats important, Collecting your check every month.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}
