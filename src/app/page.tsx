import { About } from "@/components/About";
import { Closing } from "@/components/Closing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Impact } from "@/components/Impact";
import { MemberDirectory } from "@/components/MemberDirectory";
import { Membership } from "@/components/Membership";
import { NetworkProvider } from "@/components/NetworkProvider";
import { Resources } from "@/components/Resources";
import { Ribbon } from "@/components/Ribbon";

export default function HomePage() {
  return (
    <NetworkProvider>
      <Header />
      <main id="home">
        <Hero />
        <Ribbon />
        <About />
        <HowItWorks />
        <Resources />
        <Membership />
        <MemberDirectory />
        <Impact />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </NetworkProvider>
  );
}
