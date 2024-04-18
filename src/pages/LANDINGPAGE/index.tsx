import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import LANDINGPAGEAboutus2 from "../../components/LANDINGPAGEAboutus2";
import LANDINGPAGEDownloadcard3 from "../../components/LANDINGPAGEDownloadcard3";
import LANDINGPAGEFeedback1 from "../../components/LANDINGPAGEFeedback1";
import LANDINGPAGEHero1 from "../../components/LANDINGPAGEHero1";
import LANDINGPAGEHowto1 from "../../components/LANDINGPAGEHowto1";
import LANDINGPAGEOurfeatures from "../../components/LANDINGPAGEOurfeatures";
import LANDINGPAGESlide2 from "../../components/LANDINGPAGESlide2";
import LANDINGPAGEWhykingsapp from "../../components/LANDINGPAGEWhykingsapp";

export default function LANDINGPAGEPage() {
  return (
    <>
      <Helmet>
        <title>Digital Cafe Experience - Your Trusted Partner</title>
        <meta
          name="description"
          content="Explore King's Online Cyber Cafe for top-notch digital services including printing, photocopying, scanning, and more. Save time and money with our efficient solutions."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <header className="flex items-center justify-center bg-white-A700 shadow-xs">
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
            <Img
              src="images/img_ak_1_removebg_preview.png"
              alt="ak1removebg_one"
              className="h-[98px] w-[11%] object-cover md:w-full"
            />
            <div className="flex p-[17px]">
              <ul className="flex flex-wrap self-start">
                <li>
                  <a href="/aboutus">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      About us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/services" className="ml-16">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Services
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="ml-[57px]">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Contact us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <Button size="md" shape="round" className="min-w-[286px] font-bold tracking-[0.20px] sm:px-5">
              Download App
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-center">
          {/* hero section */}
          <LANDINGPAGEHero1 className="flex h-[513px] items-center justify-center self-stretch bg-teal-600_8c bg-[url(/public/images/img_hero_1.png)] bg-cover bg-no-repeat pt-[42px] md:h-auto md:pt-5" />

          {/* features list section */}
          <LANDINGPAGESlide2 className="mx-auto mt-[120px] flex w-full max-w-[1400px] gap-8 overflow-auto py-3.5 pl-3.5 md:flex-col md:p-5" />

          {/* interactive demo section */}
          <div className="mt-[72px] flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-end px-[50px] md:p-5 md:px-5">
              <Button
                size="sm"
                variant="gradient"
                shape="circle"
                color="red_500_01_red_500_03"
                className="w-[48px] !rounded-[24px]"
              >
                <Img src="images/img_grid.svg" />
              </Button>
            </div>

            {/* how it works section */}
            <LANDINGPAGEHowto1 className="flex items-center justify-center self-stretch py-10 sm:py-5" />
          </div>

          {/* services overview section */}
          <LANDINGPAGEOurfeatures className="mx-auto mt-[120px] w-full max-w-[1311px] md:p-5" />

          {/* why choose us section */}
          <LANDINGPAGEWhykingsapp className="mt-[120px] flex flex-col items-center self-stretch bg-gradient2 py-6 sm:py-5" />
          <div className="mt-[120px] flex flex-col items-center gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]">
            {/* about us section */}
            <LANDINGPAGEAboutus2 className="flex items-center justify-center self-stretch py-[22px] sm:py-5" />
            <div className="container-xs px-[145px] md:p-5 md:px-5">
              {/* customer feedback section */}
              <LANDINGPAGEFeedback1 className="flex flex-col gap-14 pb-[13px] sm:gap-7" />
            </div>

            {/* download app section */}
            <LANDINGPAGEDownloadcard3 className="flex items-center justify-center self-stretch py-6 sm:py-5" />
          </div>
        </div>

        {/* footer section */}
        <Footer className="mt-[91px]" />
      </div>
    </>
  );
}
