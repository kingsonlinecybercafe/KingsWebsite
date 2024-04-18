import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  whykingsapp?: string;
  werebudget?: string;
  weaskedaround?: string;
  werequickand?: string;
  description?: string;
  discountbonus?: string;
  offer?: string;
  professionals?: string;
  ourworkforce?: string;
  skilledand?: string;
  wedeliveryand?: string;
  wecareabout?: string;
  showingempathy?: string;
}

export default function LANDINGPAGEWhykingsapp({
  whykingsapp = "Why King’s App",
  werebudget = "We’re budget friendly",
  weaskedaround = "We asked around and crunched the numbers, and some of our customers save up to 68% on their monthly printing bill",
  werequickand = "We’re quick and value your time",
  description = "With a King’s subscription saving you up to 40 hours a week, all the services you choose run efficiently and frees you up to do other things that matter",
  discountbonus = "Discount bonus on every referrals",
  offer = "Refer us and get a 10% discount on your next request on any of our services",
  professionals = "Professionals workforce",
  ourworkforce = "Our workforce are highly professional about work during execution",
  skilledand = "Skilled  and excellent delivery",
  wedeliveryand = "We delivery and go the best to get jibs done",
  wecareabout = "We care about you",
  showingempathy = "Showing empathy and concern for every client helps us to understand give good services",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex flex-col items-center gap-14 px-[131px] md:p-5 md:px-5 sm:gap-7">
        <div className="flex">
          <Heading size="md" as="h1" className="text-center tracking-[0.08px] !text-black-900_01">
            {whykingsapp}
          </Heading>
        </div>
        <div className="flex items-start justify-between gap-5 self-stretch pl-2.5 md:flex-col">
          <div className="mt-14 flex w-[22%] flex-col gap-4 md:w-full">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex self-start">
                <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                  {werebudget}
                </Text>
              </div>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {weaskedaround}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                {werequickand}
              </Text>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {description}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                {discountbonus}
              </Text>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {offer}
              </Text>
            </div>
          </div>
          <div className="relative h-[620px] w-[33%] md:w-full">
            <Img
              src="images/img_buttons.svg"
              alt="buttons_three"
              className="absolute left-0 right-0 top-[16%] m-auto h-[166px] w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[620px] w-full bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat md:h-auto">
              <Img src="images/img_highlight_band_stroke.svg" alt="highlightband" className="h-[618px] w-full" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[620px] w-full md:h-auto">
                <Img src="images/img_background.svg" alt="background" className="h-[612px] w-[98%]" />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[620px] w-full bg-[url(/public/images/img_group_3.svg)] bg-cover bg-no-repeat p-[13px] md:h-auto">
                  <div className="relative h-[592px] md:h-auto">
                    <Img src="images/img_screen.png" alt="screen_three" className="h-[592px] w-full object-cover" />
                    <div className="absolute right-[36%] top-[6.50px] m-auto flex items-center gap-2">
                      <Img src="images/img_speaker.svg" alt="speaker_three" className="h-[4px] rounded-sm" />
                      <Img src="images/img_linkedin.svg" alt="linkedin_three" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[24%] flex-col gap-4 p-2.5 md:w-full">
            <div className="mt-[45px] flex flex-1 flex-col gap-2 md:mt-0">
              <div className="flex self-start">
                <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                  {professionals}
                </Text>
              </div>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {ourworkforce}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                {skilledand}
              </Text>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {wedeliveryand}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex self-start">
                <Text as="p" className="!font-medium tracking-[0.02px] !text-gray-900">
                  {wecareabout}
                </Text>
              </div>
              <Text size="s" as="p" className="leading-5 tracking-[0.05px] !text-gray-900_bf">
                {showingempathy}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
