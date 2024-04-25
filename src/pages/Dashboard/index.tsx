import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, SelectBox, Button, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { OptionProps } from "react-select";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Overview & Analytics</title>
        <meta
          name="description"
          content="View today's sales, total revenue, user statistics, and transaction reports. Manage and track performance metrics effectively from the admin dashboard."
        />
      </Helmet>

      {/* dashboard layout section */}
      <div className="w-full overflow-auto bg-white-A700">
        <div className="flex flex-col relative items-end self-end">
          {/* header section */}
          <header className="flex w-[81%] flex-col items-center gap-3 md:w-full md:p-5">
            <div className="flex w-[97%] items-start justify-between gap-5 md:w-full md:flex-col">
              <div className="flex mt-5 w-[55%] items-center justify-between gap-5 md:w-full">
                <div className="flex flex-col items-start">
                  <Heading as="h5">Dashboard</Heading>
                  <Text size="s" as="p" className="!text-blue_gray-400">
                    Today is Tuesday, 26 March, 2024
                  </Text>
                </div>
                <Input
                  shape="round"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue4}
                  onChange={(e: string) => setSearchBarValue4(e)}
                  prefix={
                    <Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />
                  }
                  suffix={
                    searchBarValue4?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue4("")} height={19} width={19} fillColor="#717171ff" />
                    ) : null
                  }
                  className="w-[35%] gap-[3px] self-start text-gray-600_01 sm:pr-5"
                />
              </div>
              <div className="mb-1.5 mt-5 flex w-[14%] items-start justify-center gap-1 md:w-full">
                <Img
                  src="images/img_ellipse_16_39x39.png"
                  alt="circleimage"
                  className="h-[39px] w-[39px] rounded-[50%]"
                />
                <div className="flex flex-col items-start">
                  <Text size="2xl" as="p" className="!text-blue_gray-700">
                    David Onuche
                  </Text>
                  <Text size="xl" as="p" className="!font-normal !text-blue_gray-400_01">
                    Admin
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-px -mt-7 self-stretch bg-gray-300" />
          </header>
          <div className="flex fixed items-start self-stretch md:flex-col">
            {/* sidebar navigation section */}
            <Sidebar
              width="241px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="!sticky relative top-0 flex h-screen flex-col overflow-auto pb-[23px] pr-[23px] md:hidden md:p-5 sm:pb-5 sm:pr-5"
            >
              <Img
                src="images/img_ak_1_removebg_preview.png"
                alt="ak1removebg_one"
                className="h-[105px] w-[45%] my-5 self-start object-cover"
              />
              <Input
                shape="round"
                name="search"
                placeholder={`Search`}
                value={searchBarValue3}
                onChange={(e: string) => setSearchBarValue3(e)}
                prefix={
                  <Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />
                }
                suffix={
                  searchBarValue3?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue3("")} height={19} width={19} fillColor="#717171ff" />
                  ) : null
                }
                className="mt-1 w-[90%] gap-[3px] text-gray-600_01 sm:pr-5"
              />
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "12px",
                    alignSelf: "start",
                    color: "#6f6f6f",
                    fontWeight: 500,
                    fontSize: "16px",
                    gap: "9px",
                    borderRadius: "4px",
                    [`&:hover, &.ps-active`]: { color: "#ff3131", backgroundColor: "#ff313133 !important" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.28px" } }}
                className="mb-[427px] mt-11 flex w-full flex-col"
              >
                <MenuItem
                  icon={
                    <Img
                      src="images/img_mage_dashboard_red_500_01.svg"
                      alt="magedashboard"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Dashboard
                </MenuItem>
                <MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[24px] w-[24px]" />}>
                  Users
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_user_gray_600_02.svg" alt="user_three" className="h-[24px] w-[24px]" />}
                >
                  Messages
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_grid_gray_600_02.svg" alt="grid_one" className="h-[24px] w-[24px]" />}
                >
                  Transactions
                </MenuItem>
                <MenuItem icon={<Img src="images/img_clock.svg" alt="clock_one" className="h-[24px] w-[24px]" />}>
                  Log out
                </MenuItem>
              </Menu>
            </Sidebar>

            {/* main content section */}
            <div className="mt-28 flex flex-1 flex-col items-end gap-3 md:self-stretch md:p-5">
              <div className="mt-7 mr-4 flex gap-[17px] md:mr-0">
                <Button
                  color="red_500_28"
                  size="lg"
                  shape="round"
                  leftIcon={<Img src="images/img_grid_red_500.svg" alt="grid" className="h-[18px] w-[18px]" />}
                  className="min-w-[103px] gap-[7px] !rounded-[3px] font-medium sm:pr-5"
                >
                  Filter
                </Button>
                <Button
                  color="gray_300"
                  size="lg"
                  variant="outline"
                  shape="round"
                  leftIcon={
                    <Img src="images/img_cloudlightning.svg" alt="cloud-lightning" className="h-[24px] w-[24px]" />
                  }
                  className="min-w-[103px] gap-1.5 !rounded-[3px] font-medium sm:pr-5"
                >
                  Export
                </Button>
              </div>
              <div className="h-px w-full self-stretch bg-gray-300" />
              <div className="mr-4 flex flex-col gap-[15px] self-stretch md:mr-0">
                {/* sales summary section */}
                <div className="flex gap-[42px] md:flex-col">
                  <div className="flex w-full flex-col items-start justify-center rounded-[7px] border border-solid border-gray-300 p-1.5">
                    <div className="ml-[5px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <div className="flex">
                        <Heading size="xs" as="h1" className="self-end !text-gray-800_02">
                          Today’s Sale
                        </Heading>
                        <Img
                          src="images/img_ic_outline_info.svg"
                          alt="todays_sale_one"
                          className="h-[10px] w-[10px] self-start"
                        />
                      </div>
                      <Button
                        color="gray_300"
                        size="md"
                        variant="outline"
                        shape="round"
                        className="w-[28px] !rounded-[7px]"
                      >
                        <Img src="images/img_frame_12538.svg" />
                      </Button>
                    </div>
                    <Heading size="s" as="h2" className="ml-[5px] !text-blue_gray-900 md:ml-0">
                      #126,700.08
                    </Heading>
                    <div className="ml-[5px] mt-[13px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <Heading size="xs" as="h3" className="self-end !text-gray-500_03">
                        Last period
                      </Heading>
                      <div className="flex rounded bg-red-500_33 p-px">
                        <Img
                          src="images/img_settings_red_500_01.svg"
                          alt="image"
                          className="relative z-[1] h-[10px] w-[9px]"
                        />
                        <Text size="xs" as="p" className="!text-red-500_01">
                          15.8%
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center rounded-[7px] border border-solid border-gray-300 p-1.5">
                    <div className="ml-[5px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <div className="flex">
                        <Heading size="xs" as="h4" className="!text-gray-800_02">
                          Total Revenue
                        </Heading>
                        <Img src="images/img_ic_outline_info.svg" alt="icoutlineinfo" className="h-[10px] w-[10px]" />
                      </div>
                      <Button
                        color="gray_300"
                        size="md"
                        variant="outline"
                        shape="round"
                        className="w-[28px] !rounded-[7px]"
                      >
                        <Img src="images/img_chart.svg" />
                      </Button>
                    </div>
                    <Heading size="s" as="h5" className="ml-[5px] !text-blue_gray-900 md:ml-0">
                      #3,126,700.08
                    </Heading>
                    <div className="ml-[5px] mt-[13px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <Heading size="xs" as="h6" className="self-end !text-gray-500_03">
                        Last period
                      </Heading>
                      <Button
                        color="green_A700_30"
                        size="xs"
                        shape="round"
                        leftIcon={<Img src="images/img_group_115.svg" alt="Group 115" className="h-[10px] w-[11px]" />}
                        className="min-w-[41px] gap-px !rounded font-medium"
                      >
                        35.8%
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center rounded-[7px] border border-solid border-gray-300 p-1.5">
                    <div className="ml-[5px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <div className="flex gap-[3px]">
                        <Heading size="xs" as="p" className="!text-gray-800_02">
                          Total Users
                        </Heading>
                        <Img src="images/img_ic_outline_info.svg" alt="icoutlineinfo" className="h-[10px] w-[10px]" />
                      </div>
                      <Button
                        color="gray_300"
                        size="md"
                        variant="outline"
                        shape="round"
                        className="w-[28px] !rounded-[7px]"
                      >
                        <Img src="images/img_contrast_blue_800.svg" />
                      </Button>
                    </div>
                    <Heading size="s" as="p" className="ml-[5px] !text-blue_gray-900 md:ml-0">
                      432,704
                    </Heading>
                    <div className="ml-[5px] mt-[13px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <Heading size="xs" as="p" className="self-end !text-gray-500_03">
                        Last period
                      </Heading>
                      <Button
                        color="blue_800_30"
                        size="xs"
                        shape="round"
                        leftIcon={<Img src="images/img_checkmark.svg" alt="checkmark" className="h-[10px] w-[11px]" />}
                        className="min-w-[41px] gap-px !rounded font-medium"
                      >
                        55.9%
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-center rounded-[7px] border border-solid border-gray-300 p-1.5">
                    <div className="ml-[5px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <div className="flex">
                        <Heading size="xs" as="p" className="!text-gray-800_02">
                          Total orders
                        </Heading>
                        <Img src="images/img_ic_outline_info.svg" alt="icoutlineinfo" className="h-[10px] w-[10px]" />
                      </div>
                      <Button
                        color="gray_300"
                        size="md"
                        variant="outline"
                        shape="round"
                        className="w-[28px] !rounded-[7px]"
                      >
                        <Img src="images/img_truck_tick.svg" />
                      </Button>
                    </div>
                    <Heading size="s" as="p" className="ml-[5px] !text-blue_gray-900 md:ml-0">
                      32,704
                    </Heading>
                    <div className="ml-[5px] mt-[13px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <Heading size="xs" as="p" className="self-end !text-gray-500_03">
                        Last period
                      </Heading>
                      <Button
                        color="purple_500_30"
                        size="xs"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_group_115_purple_500_01.svg"
                            alt="Group 115"
                            className="h-[10px] w-[11px]"
                          />
                        }
                        className="min-w-[41px] gap-px !rounded font-medium"
                      >
                        55.9%
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[18px] md:flex-col">
                  {/* sales chart section */}
                  <div className="flex flex-1 flex-col gap-[34px] rounded border border-solid border-gray-300 p-[11px] md:self-stretch">
                    <div className="ml-[3px] flex w-[88%] items-center justify-between gap-5 md:ml-0 md:w-full">
                      <div className="flex w-[37%] items-center justify-center self-end">
                        <Heading size="lg" as="h6">
                          Total Sales
                        </Heading>
                        <div className="ml-[19px] h-[15px] w-[15px] flex-1 self-end rounded-sm bg-green-A700" />
                        <Text as="p" className="ml-[3px] self-end !font-medium !text-gray-700_02">
                          Revenue
                        </Text>
                        <div className="ml-3 h-[15px] w-[15px] flex-1 self-end rounded-sm bg-deep_orange-700" />
                        <Text as="p" className="ml-[3px] self-end !font-medium !text-gray-700_02">
                          Order
                        </Text>
                      </div>
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown_blue_gray_900_02.svg"
                            alt="arrow_down"
                            className="h-[12px] w-[12px]"
                          />
                        }
                        getOptionLabel={(e: OptionProps) => (
                          <>
                            <div className="flex items-center">
                              <Img src="images/img_calendar.svg" alt="calendar" className="h-[24px] w-[24px]" />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="monthly"
                        placeholder={`Monthly`}
                        options={dropDownOptions}
                        className="w-[18%] font-medium sm:px-5"
                      />
                    </div>
                    <div className="relative mb-[46px] ml-[3px] h-[248px] md:ml-0">
                      <div className="absolute bottom-0 right-[0.00px] top-0 my-auto h-max w-[92%]">
                        <div className="h-[193px] bg-[url(/public/images/img_group_1.svg)] bg-cover bg-no-repeat pt-1 md:h-auto">
                          <Img src="images/img_group.svg" alt="image" className="h-[189px] w-full md:h-auto" />
                        </div>
                        <div className="h-px bg-black-900" />
                        <div className="relative mt-[-1px] flex items-center md:flex-col">
                          <div className="flex w-full flex-col items-center gap-2.5 self-start">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Jan
                            </Text>
                          </div>
                          <div className="ml-[33px] flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Feb
                            </Text>
                          </div>
                          <div className="ml-8 flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Mar
                            </Text>
                          </div>
                          <div className="ml-[33px] flex w-full flex-col items-center gap-[11px] md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Apr
                            </Text>
                          </div>
                          <div className="ml-8 flex w-full flex-col items-center gap-[11px] md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              May
                            </Text>
                          </div>
                          <div className="ml-8 flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Jun
                            </Text>
                          </div>
                          <div className="ml-[35px] flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Jul
                            </Text>
                          </div>
                          <div className="ml-[33px] flex w-full flex-col items-center gap-3 md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Aug
                            </Text>
                          </div>
                          <div className="ml-[31px] flex w-full flex-col items-center gap-[11px] md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Sep
                            </Text>
                          </div>
                          <div className="ml-[33px] flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Oct
                            </Text>
                          </div>
                          <div className="ml-8 flex w-full flex-col items-center gap-2.5 self-start md:ml-0">
                            <div className="h-[7px] w-px bg-black-900" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Nov
                            </Text>
                          </div>
                          <div className="ml-6 flex w-full flex-col items-end gap-2.5 self-start md:ml-0">
                            <div className="mr-1 h-[7px] w-px bg-black-900 md:mr-0" />
                            <Text as="p" className="text-center !font-inter !text-black-900">
                              Dec
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[2.09px] top-[2.14px] m-auto flex w-[10%] items-center">
                        <div className="flex flex-1 flex-col items-end gap-[33px]">
                          <div className="flex items-start gap-1 self-stretch">
                            <Text as="p" className="text-right !font-inter !text-black-900">
                              #200000
                            </Text>
                            <div className="mt-1 h-px w-[6px] bg-black-900" />
                          </div>
                          <div className="flex items-center gap-[5px] self-stretch">
                            <Text as="p" className="text-right !font-inter !text-black-900">
                              #150000
                            </Text>
                            <div className="mb-1 h-px w-[6px] self-end bg-black-900" />
                          </div>
                          <div className="flex items-center gap-1 self-stretch">
                            <Text as="p" className="text-right !font-inter !text-black-900">
                              #100000
                            </Text>
                            <div className="mb-1 h-px w-[6px] self-end bg-black-900" />
                          </div>
                          <div className="flex items-center gap-2.5 self-stretch">
                            <Text as="p" className="text-right !font-inter !text-black-900">
                              #50000
                            </Text>
                            <div className="mb-1 h-px w-[6px] self-end bg-black-900" />
                          </div>
                          <div className="flex w-[30%] items-center gap-[5px] md:w-full">
                            <Text as="p" className="text-right !font-inter !text-black-900">
                              0
                            </Text>
                            <div className="mb-1 h-px w-[6px] self-end bg-black-900" />
                          </div>
                        </div>
                        <div className="h-[198px] w-px bg-black-900" />
                      </div>
                    </div>
                  </div>

                  {/* sales table section */}
                  <div className="flex w-[28%] items-start justify-center rounded border border-solid border-gray-300 p-[9px] md:w-full">
                    <Heading size="lg" as="h6" className="mb-[339px]">
                      Total Sales
                    </Heading>
                    <div className="ml-[19px] mt-[3px] h-[15px] w-[15px] flex-1 rounded-sm bg-green-A700" />
                    <Text as="p" className="ml-[3px] mt-[3px] !font-medium !text-gray-700_02">
                      Revenue
                    </Text>
                    <div className="ml-3 mt-[3px] h-[15px] w-[15px] flex-1 rounded-sm bg-deep_orange-700" />
                    <Text as="p" className="ml-[3px] mt-[3px] !font-medium !text-gray-700_02">
                      Order
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
