import React from "react";
import { Text, Button, Input, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex w-full flex-col gap-10">
        <div className="flex justify-center bg-red-A700 py-[38px] sm:py-5">
          <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
            <div className="flex flex-col items-center gap-6 px-2.5">
              <div className="flex">
                <Text size="xl" as="p" className="!font-normal tracking-[0.03px]">
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-start">
                <ul className="flex flex-col items-start gap-[18px]">
                  <li>
                    <a href="Home" target="_blank" rel="noreferrer">
                      <Text size="md" as="p" className="tracking-[0.04px]">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="md" as="p" className="tracking-[0.04px]">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Services" target="_blank" rel="noreferrer">
                      <Text size="md" as="p" className="tracking-[0.04px]">
                        Services
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-[25%] flex-col items-start gap-10 md:w-full">
              <div className="flex w-[89%] flex-col gap-6 md:w-full">
                <a href="#">
                  <div className="flex self-start">
                    <Text size="2xl" as="p">
                      Contact Us
                    </Text>
                  </div>
                </a>
                <div className="flex flex-col gap-4">
                  <div className="flex self-start">
                    <Text size="md" as="p" className="tracking-[0.04px]">
                      +234 705 2904 849
                    </Text>
                  </div>
                  <div className="flex">
                    <Text size="md" as="p" className="self-end tracking-[0.04px]">
                      Office Address: Oduduwa University, Ile-Ife
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Heading size="xs" as="h6" className="tracking-[0.20px] !text-light_green-A100">
                  Download King’s app from Playstore here
                </Heading>
              </div>
            </div>
            <div className="flex w-[33%] flex-col gap-10 md:w-full">
              <div className="flex w-[63%] flex-col items-start gap-4 md:w-full">
                <div className="flex">
                  <Text size="xl" as="p" className="self-start !font-normal tracking-[0.03px]">
                    Get in touch
                  </Text>
                </div>
                <div className="flex w-[86%] justify-between gap-5 py-2.5 md:w-full">
                  <Img src="images/img_ic_baseline_whatsapp.svg" alt="icbaseline_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_circum_facebook.svg" alt="circumfacebook" className="h-[24px] w-[24px]" />
                  <Img src="images/img_pajamas_twitter.svg" alt="pajamastwitter" className="h-[24px] w-[24px]" />
                  <Img src="images/img_jam_linkedin_circle.svg" alt="jamlinkedin_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_prime_instagram.svg" alt="primeinstagram" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="relative h-[56px] md:h-auto">
                <Input
                  shape="round"
                  name="email"
                  placeholder={`Your email here`}
                  className="w-full font-medium tracking-[0.04px] sm:pr-5"
                />
                <Button
                  color="red_A700"
                  size="xs"
                  shape="round"
                  className="absolute bottom-0 right-[10.00px] top-0 my-auto min-w-[176px] !rounded-md font-medium tracking-[0.02px] sm:px-5"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-red-500_02 py-6 sm:py-5">
          <div className="container-xs flex justify-between gap-5 px-[169px] md:flex-col md:p-5 md:px-5">
            <div className="flex p-2.5">
              <Text size="md" as="p" className="self-end text-center tracking-[0.04px]">
                All rights reserved by King’s Online Cyber Cafe. Copyright © 2024{" "}
              </Text>
            </div>
            <ul className="flex w-[39%] flex-wrap justify-between gap-5 p-2.5 md:w-full">
              <li>
                <a href="#" className="self-end">
                  <Text size="md" as="p" className="tracking-[0.04px]">
                    Cookie policy
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Text size="md" as="p" className="tracking-[0.04px]">
                    Cookie settings
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="md" as="p" className="tracking-[0.04px]">
                    Terms of use
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
