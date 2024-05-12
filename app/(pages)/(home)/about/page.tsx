import { type Metadata } from "next";
import Image from "next/image";

import { Border } from "@/app/components/ui/Border";
import { ContactSection } from "@/app/components/ui/ContactSection";
import { Container } from "@/app/components/ui/Container";
import { FadeIn, FadeInStagger } from "@/app/components/ui/FadeIn";
import { GridList, GridListItem } from "@/app/components/ui/GridList";
import { PageIntro } from "@/app/components/ui/PageIntro";
import { PageLinks } from "@/app/components/ui/PageLinks";
import { SectionIntro } from "@/app/components/ui/SectionIntro";
import { StatList, StatListItem } from "@/app/components/ui/StatList";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-primary py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance ambition with assurance."
        invert>
        <p>
          At GSD Group, we cherish a culture built on integrity, innovation, and reliability. Our team embodies these core values, ensuring every partnership is handled with utmost dedication.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            We operate with transparency and honesty, making sure that every investor knows where and how their money is being used.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            By continuously adopting and implementing new strategies, we strive to keep our partners ahead in a competitive market.
          </GridListItem>
          <GridListItem title="Efficiency" invert>
            We optimize every aspect of operations to ensure your investments yield the highest returns with minimal waste.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About GSD Group",
  description:
    "At GSD Group, we revolutionize how you invest in eCommerce, offering a seamless, hands-off approach to managing your Amazon store.",
};

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About GSD Group" title="Invest in Commerce, We Handle the Commerce">
        <p>
          At GSD Group, we revolutionize the way you invest in eCommerce by managing every aspect of your Amazon store. This allows you to invest with confidence while we handle the complexities.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded on the belief that the potential of Amazon's marketplace is immense, GSD Group was established to offer a unique investment model that covers everything from LLC registration to inventory optimization.
          </p>
          <p>
            At GSD Group, we're not just service providers—we're partners in your investment journey. We ensure that your investments grow without requiring your daily involvement.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
      <StatList>
  <StatListItem value="Full Management" label="Complete Store Operation" />
  <StatListItem value="Integrated Services" label="All-in-One Solution" />
  <StatListItem value="Investor Ready" label="Join Us Today" />
</StatList>

      </Container>

      <Culture />

      <ContactSection />
    </>
  );
}
