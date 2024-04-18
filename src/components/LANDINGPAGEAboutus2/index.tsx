import React from "react";
import { Heading, Text, Img } from "./..";

interface Props {
  className?: string;
  aboutusone?: string;
  kingsonline?: string;
  description?: string;
  learnmore?: string;
}

export default function LANDINGPAGEAboutus2({
  aboutusone = "About Us",
  kingsonline = "King’s Online Cyber Cafe",
  description = "Welcome to King&#39;s Online Cyber Cafe, where the digital world meets unparalleled service excellence. We&#39;re not just an online cyber cafe; we&#39;re architects of seamless digital experiences, and here&#39;s our story:",
  learnmore = "Learn more",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex items-start justify-evenly gap-20 md:flex-col md:p-5">
        <Img
          src="images/img_rectangle_88.png"
          alt="image_three"
          className="h-[367px] w-[29%] rounded-lg object-cover md:w-full"
        />
        <div className="flex w-[50%] flex-col items-start gap-8 md:w-full">
          <div className="flex flex-col gap-[25px] self-stretch">
            <div className="flex self-start">
              <Text size="5xl" as="p" className="tracking-[0.98px] !text-gray-900">
                {aboutusone}
              </Text>
            </div>
            <div className="flex flex-col gap-4 pb-[13px]">
              <div className="flex self-start">
                <Text size="xl" as="p" className="self-end !font-normal tracking-[0.03px] !text-gray-900">
                  {kingsonline}
                </Text>
              </div>
              <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                {description}
              </Text>
            </div>
          </div>
          <div className="flex rounded-[12px] shadow-xs">
            <a href="#" className="flex h-[56px] items-center justify-center rounded-[12px] bg-lime-500 sm:px-5">
              <Heading size="xs" as="h1" className="px-[35px] py-[18px] text-center tracking-[0.20px]">
                {learnmore}
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
