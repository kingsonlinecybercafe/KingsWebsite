import React from "react";
import { Img, Heading, Text } from "./..";

interface Props {
  className?: string;
  downloadtext?: string;
  downloadbuttontext?: string;
}

export default function LANDINGPAGEDownloadcard3({
  downloadtext = "Download King’s app on google play store and app store",
  downloadbuttontext = "Download App",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex items-center justify-center gap-10 md:flex-col md:p-5">
        <div className="flex flex-1 flex-col items-start gap-8 md:self-stretch">
          <Text size="5xl" as="p" className="!text-gray-900">
            {downloadtext}
          </Text>
          <div className="flex w-[35%] rounded-lg shadow-xs md:w-full">
            <div className="flex w-full justify-center rounded-lg bg-red-500_02 p-[17px]">
              <Heading size="xs" as="h1" className="self-end text-center tracking-[0.20px] !text-white-A700">
                {downloadbuttontext}
              </Heading>
            </div>
          </div>
        </div>
        <div className="relative h-[568px] w-[45%] md:w-full">
          <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[520px] w-full rounded-[260px] bg-cyan-600" />
          <div className="absolute bottom-[0.00px] left-[21.00px] m-auto flex w-[86%] items-start sm:relative sm:flex-col">
            <div className="flex flex-1 items-start sm:self-stretch">
              <Img
                src="images/img_a47b9c575cc9abd.png"
                alt="a47b9c575cc9abd"
                className="relative z-[5] mt-[41px] h-[84px] w-[51%] object-cover"
              />
              <div className="relative ml-[-91px] h-[421px] w-[49%]">
                <Img
                  src="images/img_buttons.svg"
                  alt="buttons_five"
                  className="absolute left-0 right-0 top-[16%] m-auto h-[112px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[421px] w-full bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat md:h-auto">
                  <Img src="images/img_highlight_band_stroke.svg" alt="highlightband" className="h-[420px] w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[421px] w-full md:h-auto">
                    <Img src="images/img_background.svg" alt="background_five" className="h-[416px] w-[98%]" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[421px] w-full bg-[url(/public/images/img_group_3.svg)] bg-cover bg-no-repeat p-[9px] md:h-auto">
                      <div className="relative h-[402px] md:h-auto">
                        <Img src="images/img_screen.png" alt="screen_five" className="h-[402px] w-full object-cover" />
                        <div className="absolute right-[36%] top-[4.42px] m-auto flex items-center gap-[5px]">
                          <Img src="images/img_speaker.svg" alt="speaker_five" className="h-[2px] rounded-[1px]" />
                          <Img src="images/img_linkedin.svg" alt="linkedin_five" className="h-[7px] w-[7px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_app_store_symbol.png"
              alt="appstore_one"
              className="relative z-[4] ml-[-77px] mt-[83px] h-[107px] w-[36%] object-cover sm:ml-0 sm:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
