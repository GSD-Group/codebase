"use client";
import { Button } from "@/app/components/ui/Button";
import { FadeIn } from "@/app/components/ui/FadeIn";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  return (
    <FadeIn>
      <section className="bg-white flex justify-around w-[90%] m-auto   dark:bg-gray-900">
        <div className="pt-8 w-full  lg:w-[50%] scale-[90%]    px-4  ">
          <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-center text-primary dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Get in touch with us
          </p>
          <form
            action="https://formspree.io/f/mgegqyve"
            method="POST"
            className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
                placeholder="name@GSDGroup.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                id="phoneNumber"
                className="rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
                placeholder="123-456-7890"
                required
              />
              
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="rounded-md block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className=" rounded-md block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
                placeholder="Leave a message"
                required></textarea>
            </div>
            <div className="w-full flex items-center justify-center">
              <Button className="bg-primary  hover:bg-primary/95 p-3 rounded-md  text-white">
                Send Message
              </Button>
            </div>
          </form>
        </div>
        {/* <div className=" hidden relative my-auto rounded-full overflow-hidden w-[30rem] h-[30rem] lg:block">
        <Image
          alt="agent photo"
          layout="fill"
          objectFit="cover"
          src="/agent-photo.jpg"></Image>
      </div> */}
      </section>
    </FadeIn>
  );
}
