export default function WhySection() {
  return (
    <div className="">
      <div >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2 className="">
              <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                Harnessing technology for a brighter future
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-600">
              <p>
                We believe technology is the answer to the world’s greatest
                challenges. It’s also the cause, so we find ourselves in bit of
                a catch 22 situation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/family-fund">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">
                    2023
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </p>
              </article>
            </div>
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/unseal">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2022" className="font-semibold">
                    2022
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Get a hodl of your health
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Unseal is the first NFT platform where users can mint and
                  trade NFTs of their own personal health records, allowing them
                  to take control of their data.
                </p>
              </article>
            </div>
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/phobia">
                    <span className="absolute inset-0 rounded-3xl"></span>
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2022" className="font-semibold">
                    2022
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Overcome your fears, find your match
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Find love in the face of fear — Phobia is a dating app that
                  matches users based on their mutual phobias so they can be
                  scared together.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
