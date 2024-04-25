import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, Text, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function MessagesPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>User Messages - Stay Connected</title>
        <meta
          name="description"
          content="Access your messages and chat history. Connect with contacts, manage conversations, and stay in touch with our user-friendly messaging interface."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full items-start justify-center gap-[21px] bg-white-A700 md:flex-col">
        {/* sidebar navigation section */}
        <Sidebar
          width="241px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto pb-[23px] pr-[23px] md:hidden md:p-5 sm:pb-5 sm:pr-5"
        >
          <Img
            src="images/img_ak_1_removebg_preview.png"
            alt="ak1removebg_one"
            className="h-[105px] w-[45%] self-start object-cover"
          />
          <Input
            shape="round"
            name="search"
            placeholder={`Search`}
            value={searchBarValue2}
            onChange={(e: string) => setSearchBarValue2(e)}
            prefix={<Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />}
            suffix={
              searchBarValue2?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue2("")} height={19} width={19} fillColor="#717171ff" />
              ) : null
            }
            className="mt-1 w-[90%] gap-[3px] text-gray-600_01 sm:pr-5"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "5px 5px 5px 12px",
                alignSelf: "start",
                color: "#6f6f6f",
                fontWeight: 500,
                fontSize: "16px",
                gap: "9px",
                borderRadius: "4px",
                [`&:hover, &.ps-active`]: { color: "#ff3131", backgroundColor: "#ff313135 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "0.67px" } }}
            className="mb-[361px] mt-[45px] flex w-full flex-col pb-[15px]"
          >
            <MenuItem
              icon={<Img src="images/img_mage_dashboard.svg" alt="magedashboard" className="h-[24px] w-[24px]" />}
            >
              Dashboard
            </MenuItem>
            <MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[24px] w-[24px]" />}>
              Users
            </MenuItem>
            <MenuItem
              icon={
                <Img src="images/img_vuesax_linear_messages_3.svg" alt="vuesaxlinear" className="h-[24px] w-[24px]" />
              }
            >
              Messages
            </MenuItem>
            <MenuItem icon={<Img src="images/img_grid_gray_600_02.svg" alt="grid_one" className="h-[24px] w-[24px]" />}>
              Transactions
            </MenuItem>
            <MenuItem icon={<Img src="images/img_clock.svg" alt="clock_one" className="h-[24px] w-[24px]" />}>
              Log out
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* messages content section */}
        <div className="mt-3 flex flex-1 flex-col items-start gap-[60px] md:self-stretch md:p-5 sm:gap-[30px]">
          <div className="flex flex-col items-start gap-[15px]">
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
            <Heading as="h1" className="ml-1 md:ml-0">
              Messages
            </Heading>
          </div>

          {/* chat list section */}
          <div className="flex flex-col gap-[18px] self-stretch rounded border border-solid border-gray-300 bg-deep_orange-50_2b">
            <div className="flex items-center justify-between gap-5 rounded-tl rounded-tr bg-gray-200_02 p-[15px] sm:flex-col">
              <div className="ml-1 flex w-[53%] items-center justify-between gap-5 md:ml-0 sm:w-full sm:flex-col">
                <Heading size="md" as="h2">
                  All Chats
                </Heading>
                <div className="flex w-[61%] items-start justify-center sm:w-full">
                  <Button
                    color="red_500"
                    size="2xl"
                    shape="round"
                    leftIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[24px] w-[24px]" />}
                    className="mt-[3px] w-full flex-1 gap-[9px] font-medium"
                  >
                    Add chats
                  </Button>
                  <Img
                    src="images/img_ellipse_18.png"
                    alt="circleimage"
                    className="ml-[15px] h-[37px] w-[37px] rounded-[50%]"
                  />
                  <div className="ml-1.5 flex flex-col items-start">
                    <Text size="3xl" as="p" className="!text-blue_gray-900">
                      Omitoyin David{" "}
                    </Text>
                    <Text as="p">David@ayomde</Text>
                  </div>
                </div>
              </div>
              <div className="flex gap-[21px]">
                <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_notification.svg" alt="notification" className="h-[24px] w-[24px]" />
              </div>
            </div>

            {/* chat detail section */}
            <div className="mb-2 flex items-center gap-[25px] md:flex-col">
              <div className="flex w-[37%] flex-col gap-[9px] md:w-full">
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
                <Img
                  src="images/img_ellipse_16_37x37.png"
                  alt="ellipse"
                  className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                />
                <div className="h-px w-[352px] bg-gray-300" />
                <Text size="3xl" as="p" className="ml-[66px] !text-blue_gray-900 md:ml-0">
                  Bolade Samuel
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
                <div className="relative h-[67px] flex-1 md:w-full md:flex-none">
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
                    <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[41%] items-start gap-[9px]">
                      <Img
                        src="images/img_ellipse_16_1.png"
                        alt="circleimage"
                        className="h-[37px] w-[37px] rounded-[50%]"
                      />
                      <Text size="3xl" as="p" className="!text-blue_gray-900">
                        Alao Yinka
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-px w-[352px] bg-gray-300" />
                <Img
                  src="images/img_ellipse_16_2.png"
                  alt="ellipse"
                  className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                />
                <div className="h-px w-[352px] bg-gray-300" />
                <Text size="3xl" as="p" className="ml-[66px] !text-blue_gray-900 md:ml-0">
                  Olajumoke Grace
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
                  <div className="mt-[13px] flex items-start">
                    <Img
                      src="images/img_ellipse_16_3.png"
                      alt="circleimage"
                      className="h-[37px] w-[37px] rounded-[50%]"
                    />
                    <div className="ml-[9px] flex flex-col items-start gap-2.5">
                      <Text size="3xl" as="p" className="!text-blue_gray-900">
                        Micheal Miles
                      </Text>
                      <Text as="p">Hello,do you guys still offer product design....</Text>
                    </div>
                    <Text size="md" as="p" className="mb-[13px] ml-[22px] !text-gray-500">
                      1hr
                    </Text>
                  </div>
                  <div className="mt-0.5 h-px bg-gray-300" />
                </div>
                <div className="h-px w-[352px] bg-gray-300" />
                <Img
                  src="images/img_ellipse_17.png"
                  alt="ellipse"
                  className="ml-5 h-[37px] w-[11%] rounded-[50%] md:ml-0"
                />
                <div className="h-px w-[352px] bg-gray-300" />
                <Text size="3xl" as="p" className="ml-[66px] !text-blue_gray-900 md:ml-0">
                  Omitoyin David{" "}
                </Text>
                <div className="h-px w-[352px] bg-gray-300" />
                <Text size="md" as="p" className="mr-[7px] !text-gray-500 md:mr-0">
                  1hr
                </Text>
                <div className="h-px w-[352px] bg-gray-300" />
                <Text as="p" className="mr-[46px] md:mr-0">
                  Hello,do you guys still offer product design....
                </Text>
              </div>

              {/* message input section */}
              <div className="flex flex-1 flex-col items-end md:self-stretch">
                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                  <div className="flex w-[41%] flex-col items-start sm:w-full">
                    <div className="flex self-stretch rounded-br-[7px] rounded-tl-[7px] rounded-tr-[7px] border border-solid border-gray-200_01 bg-white-A700">
                      <Text size="md" as="p" className="w-[94%] leading-4 !text-gray-800_01">
                        Hello,do you guys still offer product design,i want to design a mobile application
                      </Text>
                    </div>
                    <Text size="md" as="p" className="mt-[3px] !text-gray-500">
                      11:23AM
                    </Text>
                    <div className="mt-[102px] flex self-stretch rounded-br-[7px] rounded-tl-[7px] rounded-tr-[7px] border border-solid border-gray-200_01 bg-white-A700">
                      <Text size="md" as="p" className="w-[94%] leading-4 !text-gray-800_01">
                        Hello,do you guys still offer product design,i want to design a mobile application
                      </Text>
                    </div>
                    <Text size="md" as="p" className="mt-[3px] !text-gray-500">
                      11:23AM
                    </Text>
                  </div>
                  <div className="mb-[69px] flex w-[41%] flex-col items-end gap-1 self-end sm:w-full">
                    <div className="flex self-stretch rounded-bl-[7px] rounded-tl-[7px] rounded-tr-[7px] border border-solid border-gray-200_01 bg-red-500_01 p-[7px]">
                      <Text size="md" as="p" className="w-[96%] leading-4 !text-white-A700">
                        Goodmorning sir,yes we still offer product design service
                      </Text>
                    </div>
                    <Text size="md" as="p" className="mr-0.5 !text-gray-500 md:mr-0">
                      11:53AM
                    </Text>
                  </div>
                </div>
                <div className="mt-3 flex w-[41%] flex-col items-end gap-1 md:w-full">
                  <div className="flex self-stretch rounded-bl-[7px] rounded-tl-[7px] rounded-tr-[7px] border border-solid border-gray-200_01 bg-red-500_01 p-[7px]">
                    <Text size="md" as="p" className="w-[96%] leading-4 !text-white-A700">
                      Goodmorning sir,yes we still offer product design service
                    </Text>
                  </div>
                  <Text size="md" as="p" className="mr-0.5 !text-gray-500 md:mr-0">
                    11:53AM
                  </Text>
                </div>
                <div className="mt-[88px] flex gap-6 self-stretch sm:flex-col">
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    name="type_here"
                    placeholder={`Type here`}
                    className="flex-grow rounded-[7px] border-gray-200_03 sm:pr-5"
                  />
                  <Button
                    color="gray_200_01"
                    size="lg"
                    shape="round"
                    leftIcon={<Img src="images/img_save.svg" alt="save" className="h-[32px] w-[32px]" />}
                    className="min-w-[97px] gap-2.5 !rounded-[7px] font-medium"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
