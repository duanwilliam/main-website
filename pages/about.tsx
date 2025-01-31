import { useEffect, useState } from "react";
import { Size, useWindowSize } from "src/utils";

import SEO from "src/components/SEO";

import AboutHero from "src/sections/about/About.Hero";
import AboutGetInvolved from "src/sections/about/About.GetInvolved";
import AboutMembership from "src/sections/about/About.Membership";
import AboutBoard from "src/sections/about/About.Board";

import HeroImage from "public/assets/about-images/about-hero.png";

const AboutPage: React.FC = () => {
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile((size.width || 0) <= 814);
  }, [size]);

  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="We are the Association for Computing Machinery at UCSD! We are an inclusive member-first community for all who are interested in the field of computing. We welcome all skill levels and majors!"
        image={HeroImage.src}
      />
      <AboutHero isMobile={isMobile} image={HeroImage.src} />
      <AboutGetInvolved isMobile={isMobile} />
      {!isMobile && <AboutMembership />}
      <AboutBoard isMobile={isMobile} />
    </>
  );
};

export default AboutPage;
