import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, CheckBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const tableData = [
  {
    rowname: "Omitoyin David ",
    phonenumber: "+234 904 973 3613",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Active",
  },
  {
    rowname: "Abido shaker",
    phonenumber: "+234 804 784 5737",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Offline",
  },
  {
    rowname: "Bolade Samuel",
    phonenumber: "+234 904 973 3613",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Active",
  },
  {
    rowname: "Alao Yinka",
    phonenumber: "+234 810 973 3613",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Offline",
  },
  {
    rowname: "Olajumoke Grace",
    phonenumber: "+234 703 973 3613",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Active",
  },
  { rowname: "Micheal Miles", phonenumber: "+234 904 973 3613" },
  {
    rowname: "Omitoyin David ",
    phonenumber: "+234 904 973 3613",
    emailaddress: "Omitoyinayomide20@gmail.com",
    status: "Active",
  },
];

type TableRowType = { rowname: string; phonenumber: string; emailaddress?: string; status?: string };

export default function UserpagePage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex flex-1 items-end md:self-stretch">
            <div className="mb-2.5 ml-2.5 h-[20px] w-[20px] rounded border border-solid border-gray-300" />
            <Img
              src="images/img_ellipse_15.png"
              alt="circleimage"
              className="mb-0.5 ml-[18px] mt-[5px] h-[37px] w-[37px] rounded-[50%]"
            />
            <div className="ml-1 flex flex-col items-start">
              <Text size="xl" as="p" className="!text-gray-800_02">
                {info?.getValue?.()}
              </Text>
              <Text size="s" as="p" className="ml-[3px] !text-gray-600_03 md:ml-0">
                David@ayomde
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 px-4 pb-4 md:self-stretch">
            <CheckBox
              name="name"
              label="Name"
              id="name"
              className="ml-1 gap-[17px] p-px text-left text-base font-medium text-gray-700 md:ml-0"
            />
          </div>
        ),
        meta: { width: "295px" },
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text size="xl" as="p" className="!text-gray-600_01">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !font-medium !text-gray-700">
            Phone Number
          </Text>
        ),
        meta: { width: "235px" },
      }),
      tableColumnHelper.accessor("emailaddress", {
        cell: (info) => (
          <Text size="xl" as="p" className="!text-gray-600_01">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !font-medium !text-gray-700">
            Email Address
          </Text>
        ),
        meta: { width: "316px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex items-end justify-between gap-5">
            <div className="mb-[17px] mt-7 flex w-[44%] items-center justify-center rounded-lg bg-green-A400_26">
              <div className="mb-[3px] h-[4px] w-[4px] self-end rounded-sm bg-green-A700" />
              <Text size="xs" as="p" className="ml-[5px] !text-green-A700">
                {info?.getValue?.()}
              </Text>
            </div>
            <Img src="images/img_dot.svg" alt="dot_one" className="mb-[17px] mr-[15px] h-[16px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !font-medium !text-gray-700">
            Status
          </Text>
        ),
        meta: { width: "152px" },
      }),
    ];
  }, []);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>User Dashboard - King's Cyber Cafe</title>
        <meta
          name="description"
          content="Access the King's Cyber Cafe user dashboard to manage users, view messages, and track transactions. Sign in now to explore the full suite of features."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center gap-[43px] bg-white-A700 md:flex-col">
        {/* sidebar navigation section */}
        <Sidebar
          width="218px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto md:hidden md:p-5"
        >
          <Img
            src="images/img_ak_1_removebg_preview.png"
            alt="ak1removebg_one"
            className="h-[105px] w-[45%] self-start object-cover"
          />
          <Input
            color="gray_300"
            size="xs"
            variant="outline"
            name="search"
            placeholder={`Search`}
            value={searchBarValue7}
            onChange={(e: string) => setSearchBarValue7(e)}
            prefix={<Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />}
            suffix={
              searchBarValue7?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue7("")} height={19} width={19} fillColor="#717171ff" />
              ) : null
            }
            className="mt-1 w-[90%] gap-[3px] rounded text-gray-600_02 sm:pr-5"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "5px 5px 5px 11px",
                alignSelf: "start",
                color: "#6f6f6f",
                fontWeight: 500,
                fontSize: "16px",
                gap: "9px",
                borderRadius: "4px",
                [`&:hover, &.ps-active`]: { color: "#ff3131", backgroundColor: "#ff313133 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "53.33px" } }}
            className="mt-[45px] flex w-full flex-col"
          >
            <MenuItem
              icon={<Img src="images/img_mage_dashboard.svg" alt="magedashboard" className="h-[24px] w-[24px]" />}
            >
              Dashboard
            </MenuItem>
            <MenuItem icon={<Img src="images/img_user_red_500_02.svg" alt="user_one" className="h-[24px] w-[24px]" />}>
              Users
            </MenuItem>
            <MenuItem
              icon={<Img src="images/img_user_gray_600_03.svg" alt="user_three" className="h-[24px] w-[24px]" />}
            >
              Messages
            </MenuItem>
            <MenuItem icon={<Img src="images/img_grid_gray_600_03.svg" alt="grid_one" className="h-[24px] w-[24px]" />}>
              Transactions
            </MenuItem>
            <MenuItem
              icon={<Img src="images/img_clock_gray_600_03.svg" alt="clock_one" className="h-[24px] w-[24px]" />}
            >
              Log out
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="mb-[73px] mt-3.5 flex flex-1 flex-col gap-[73px] md:gap-[54px] md:self-stretch md:p-5 sm:gap-9">
          {/* content header section */}
          <div className="flex flex-col items-end gap-[37px]">
            <div className="flex w-[22%] gap-[17px] md:w-full">
              <div className="flex w-full items-center gap-[7px] rounded-[3px] bg-red-500_28 p-[7px]">
                <Img src="images/img_grid_red_500.svg" alt="grid_three" className="ml-1 h-[18px] w-[18px]" />
                <Text size="md" as="p" className="!text-red-500_02">
                  Filter
                </Text>
              </div>
              <div className="flex w-full items-center justify-center gap-1.5 rounded-[3px] border border-solid border-gray-300">
                <Img src="images/img_cloud_lightning.svg" alt="cloudlightning" className="h-[24px] w-[24px]" />
                <Text size="md" as="p" className="self-end !text-gray-700_01">
                  Export
                </Text>
              </div>
            </div>
            <div className="flex items-start gap-[3px] self-stretch md:flex-col">
              <Text as="p" className="!font-medium !text-gray-600">
                King’s cyber cafe users
              </Text>
              <div className="flex-1 px-[35px] pb-[13px] pt-[19px] text-left text-base font-medium text-gray-200 md:self-stretch sm:px-5">
                Add Users
              </div>
            </div>
          </div>

          {/* user table section */}
          <div className="flex flex-col gap-[26px] rounded border border-solid border-gray-300 pt-4">
            <div className="h-[33px]" />
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-col" }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={tableColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
