import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function MessagesemptyPage() {
  return (
    <>
      <Helmet>
        <title>No Messages - Start a Conversation</title>
        <meta
          name="description"
          content="Your message inbox is waiting for you. Start new conversations, explore services, and engage with others. Begin your chat journey today."
        />
      </Helmet>
      <div className="flex w-full items-start gap-[22px] bg-white-A700 md:flex-col">
        {/* sidebar section */}
        <Sidebar1 className="!sticky top-0 flex h-screen w-[241px] flex-col overflow-auto pb-[23px] pr-[23px] md:hidden md:p-5 sm:pb-5 sm:pr-5" />

        {/* main content section */}
        <div className="mt-3 flex w-[56%] flex-col items-start md:mt-0 md:w-full md:p-5">
          <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
          <Heading as="h1" className="ml-1 mt-[15px] md:ml-0">
            Messages
          </Heading>
          <div className="mt-[60px] flex items-center justify-between gap-5 self-stretch sm:flex-col">
            {/* chat list section */}
            <div className="w-[50%] rounded border border-solid border-gray-300 bg-deep_orange-50_2b sm:w-full">
              <div className="flex items-center justify-between gap-5 rounded-tl rounded-tr border-b-[0.5px] border-solid border-gray-300 bg-gray-200_02">
                <Heading size="md" as="h2" className="ml-[17px]">
                  All Chats
                </Heading>
                <Button
                  color="red_500"
                  size="2xl"
                  shape="round"
                  leftIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[24px] w-[24px]" />}
                  className="mb-[13px] min-w-[134px] gap-[9px] self-end font-medium"
                >
                  Add chats
                </Button>
              </div>
              <div className="flex items-center">
                {/* chat item section */}
                <div className="flex flex-1 flex-col gap-[9px]">
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex items-start gap-[9px]">
                      <Img
                        src="images/img_ellipse_18.png"
                        alt="omitoyin_david"
                        className="h-[37px] w-[37px] rounded-[50%]"
                      />
                      <div className="mt-0.5 flex flex-1 flex-col items-start">
                        <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                          <Text size="3xl" as="p" className="mb-1 !text-blue_gray-900">
                            Omitoyin David{" "}
                          </Text>
                          <Text size="md" as="p" className="!text-gray-500">
                            1hr
                          </Text>
                        </div>
                        <Text as="p" className="relative mt-[-1px]">
                          Hello,do you guys still offer product design....
                        </Text>
                      </div>
                    </div>
                    <div className="h-px bg-gray-300" />
                  </div>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text size="3xl" as="p" className="ml-[66px] !text-blue_gray-900 md:ml-0">
                    Abido shaker
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Img
                    src="images/img_ellipse_16.png"
                    alt="ellipse"
                    className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                  />
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text size="md" as="p" className="mr-[7px] !text-gray-500 md:mr-0">
                    1hr
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text as="p" className="mr-[46px] md:mr-0">
                    Hello,do you guys still offer product design....
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <div className="relative h-[66px] flex-1 md:w-full md:flex-none">
                    <div className="absolute left-0 right-0 top-[0.00px] m-auto h-px w-full bg-gray-300" />
                    <div className="absolute bottom-[0.00px] left-0 right-0 m-auto h-px w-full bg-gray-300" />
                    <div className="absolute bottom-[6.00px] left-0 right-0 m-auto h-[47px] w-[92%]">
                      <div className="absolute bottom-[0.62px] right-[0.00px] m-auto flex flex-wrap items-start gap-[22px]">
                        <Text as="p" className="mt-[11px]">
                          Hello,do you guys still offer product design....
                        </Text>
                        <Text size="md" as="p" className="!text-gray-500">
                          1hr
                        </Text>
                      </div>
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[51%] items-start gap-[9px]">
                        <Img
                          src="images/img_ellipse_16_37x37.png"
                          alt="circleimage"
                          className="h-[37px] w-[37px] rounded-[50%]"
                        />
                        <Text size="3xl" as="p" className="!text-blue_gray-900">
                          Bolade Samuel
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Img
                    src="images/img_ellipse_16_1.png"
                    alt="ellipse"
                    className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                  />
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text size="3xl" as="p" className="ml-[66px] !text-blue_gray-900 md:ml-0">
                    Alao Yinka
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text size="md" as="p" className="mr-[7px] !text-gray-500 md:mr-0">
                    1hr
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text as="p" className="mr-[46px] md:mr-0">
                    Hello,do you guys still offer product design....
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <div className="flex flex-1 flex-col">
                    <div className="h-px bg-gray-300" />
                    <div className="mt-3.5 flex items-start gap-[9px]">
                      <Img
                        src="images/img_ellipse_16_2.png"
                        alt="circleimage"
                        className="h-[37px] w-[37px] rounded-[50%]"
                      />
                      <div className="flex flex-1 flex-col items-start">
                        <div className="relative z-[1] flex flex-wrap items-start justify-between gap-5 self-stretch">
                          <Text size="3xl" as="p" className="mb-[9px] !text-blue_gray-900">
                            Olajumoke Grace
                          </Text>
                          <Text size="md" as="p" className="!text-gray-500">
                            1hr
                          </Text>
                        </div>
                        <Text as="p" className="relative mt-[-1px]">
                          Hello,do you guys still offer product design....
                        </Text>
                      </div>
                    </div>
                    <div className="mt-1 h-px bg-gray-300" />
                  </div>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Img
                    src="images/img_ellipse_16_3.png"
                    alt="ellipse"
                    className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                  />
                  <div className="h-px w-[352px] bg-gray-300" />
                  <div className="mr-[46px] flex flex-col items-start gap-2.5 md:mr-0">
                    <Text size="3xl" as="p" className="!text-blue_gray-900">
                      Micheal Miles
                    </Text>
                    <Text as="p">Hello,do you guys still offer product design....</Text>
                  </div>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <Text size="md" as="p" className="mr-[7px] !text-gray-500 md:mr-0">
                    1hr
                  </Text>
                  <div className="h-px w-[352px] bg-gray-300" />
                  <div className="relative h-[48px] flex-1 md:w-full md:flex-none">
                    <div className="absolute bottom-[0.62px] right-[0.00px] m-auto flex flex-wrap items-start gap-[22px]">
                      <Text as="p" className="mt-[11px]">
                        Hello,do you guys still offer product design....
                      </Text>
                      <Text size="md" as="p" className="!text-gray-500">
                        1hr
                      </Text>
                    </div>
                    <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[52%] items-start gap-[9px]">
                      <Img
                        src="images/img_ellipse_17.png"
                        alt="circleimage"
                        className="h-[37px] w-[37px] rounded-[50%]"
                      />
                      <Text size="3xl" as="p" className="mt-0.5 !text-blue_gray-900">
                        Omitoyin David{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-full w-px bg-gray-300" />
              </div>
            </div>

            {/* add chat section */}
            <div className="flex items-center gap-[19px]">
              <Img src="images/img_plus_gray_700.svg" alt="plus_one" className="h-[24px] w-[24px] self-end" />
              <Text size="5xl" as="p" className="!text-gray-700">
                Select chat
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
