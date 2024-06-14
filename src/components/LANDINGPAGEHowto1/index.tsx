import React from "react";
import { Button, Text, Img } from "./..";

const data = [{ one: "01" }, { one: "02" }];
interface Props {
  className?: string;
  howitworks?: string;
  one?: string;
  two?: string;
  three?: string;
  createafree?: string;
  signupfora?: string;
  pickaservice?: string;
  selectamong?: string;
  placeanorder?: string;
  createorder?: string;
  downloadapp?: string;
}

export default function LANDINGPAGEHowto1({
  howitworks = "How it works",
  one = "01",
  two = "02",
  three = "03",
  createafree = "Create a free account",
  signupfora = "Sign up for a free account with your name, email, and number.",
  pickaservice = "Pick a service you want",
  selectamong = "Select among different of our services",
  placeanorder = "Place an order",
  createorder = "Create order description and details",
  downloadapp = "Download App",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex justify-center px-6 md:px-5 sm:px-0">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          {/* Existing Image Div */}
          <div className="hidden relative h-[759px] w-[38%] md:w-full lg:block">
            <Img
              src="images/img_buttons.svg"
              alt="buttons_one"
              className="absolute left-0 right-0 top-[16%] m-auto h-[203px] w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[759px] w-full bg-[url('/public/images/img_group_4.svg')] bg-cover bg-no-repeat md:h-auto">
              <Img src="images/img_highlight_band_stroke.svg" alt="highlightband" className="h-[757px] w-full" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[759px] w-full md:h-auto">
                <Img src="images/img_background.svg" alt="background_one" className="h-[750px] w-[98%]" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[759px] w-full bg-[url('/public/images/img_group_3.svg')] bg-cover bg-no-repeat p-4 md:h-auto">
                  <div className="relative h-[725px] md:h-auto">
                    <Img src="images/img_screen.png" alt="screen_one" className="h-[725px] w-full object-cover" />
                    <div className="absolute right-[36%] top-[7.96px] m-auto flex items-center gap-2.5">
                      <Img src="images/img_speaker.svg" alt="speaker_one" className="h-[5px] rounded-sm" />
                      <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[14px] w-[14px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Image for Mobile Devices */}
          <div className="flex justify-center relative h-full w-full block lg:hidden">
            <div>
              <Img src="images/phone.png" alt="phone_image" className="h-full w-[350px] object-cover" />
            </div>
          </div>

          <div className="flex hidden w-[50%] flex-col items-start gap-16 md:w-full md:gap-8 sm:gap-4 lg:block">
            <div className="flex flex-col gap-[82px] self-stretch md:gap-[61px] sm:gap-[41px]">
              <div className="flex pr-[18px]">
                <Text size="6xl" as="p" className="tracking-[-0.32px] text-black-900">
                  {howitworks}
                </Text>
              </div>
              <div className="flex items-start justify-between gap-5">
                <div className="flex flex-col items-center gap-2.5 p-2.5 w-[15%] md:w-[15%] sm:w-[15%]">
                  <div className="flex flex-col gap-2.5 self-stretch md:flex-row">
                    {data.map((d, index) => (
                      <div key={"listone" + index} className="flex flex-1 flex-col items-center gap-6">
                        <div className="flex flex-col items-center py-0.5 pr-0.5">
                          <Text size="xl" as="p" className="font-normal tracking-[0.03px] text-black-900">
                            {d.one}
                          </Text>
                        </div>
                        <Img src="images/img_frame815.svg" alt="image" className="h-[92px] w-px" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col py-0.5">
                    <Text size="xl" as="p" className="h-[24px] font-normal tracking-[0.03px] text-black-900">
                      {three}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-16 p-2.5 w-[75%] md:w-[75%] sm:w-[75%]">
                  <div className="flex flex-1 flex-col gap-[18px]">
                    <div className="flex self-start">
                      <Text size="xl" as="p" className="self-start font-normal tracking-[0.03px] text-black-900">
                        {createafree}
                      </Text>
                    </div>
                    <Text as="p" className="leading-6 tracking-[0.08px] text-gray-900">
                      {signupfora}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[18px]">
                    <div className="flex self-start">
                      <Text size="xl" as="p" className="self-end font-normal tracking-[0.03px] text-black-900">
                        {pickaservice}
                      </Text>
                    </div>
                    <div className="flex">
                      <Text as="p" className="self-end tracking-[0.08px] text-gray-900">
                        {selectamong}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[18px]">
                    <div className="flex self-start">
                      <Text size="xl" as="p" className="self-start font-normal tracking-[0.03px] text-black-900">
                        {placeanorder}
                      </Text>
                    </div>
                    <div className="flex self-start">
                      <Text as="p" className="self-end tracking-[0.08px] text-gray-900">
                        {createorder}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] shadow-xs sm:px-5">
              {downloadapp}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
