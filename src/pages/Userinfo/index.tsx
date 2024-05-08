import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Button } from "../../components";
import { CheckBox } from "components/CheckBox1";
import { Text } from "components/Text2";
import { Input } from "components/Input1";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { phoneHeaderText: "+234 904 973 3613", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Active" },
  { phoneHeaderText: "+234 804 784 5737", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Offline" },
  { phoneHeaderText: "+234 904 973 3613", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Active" },
  { phoneHeaderText: "+234 810 973 3613", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Offline" },
  { phoneHeaderText: "+234 703 973 3613", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Active" },
  { phoneHeaderText: "+234 904 973 3613", emailHeaderText: "Omitoyinayomide20@gmail.com", statusHeaderText: "Active" },
  {
    nameHeaderRow: "Omitoyin David ",
    phoneHeaderText: "+234 904 973 3613",
    emailHeaderText: "Omitoyinayomide20@gmail.com",
    statusHeaderText: "Active",
  },
];

type TableRowType = { nameHeaderRow?: any; phoneHeaderText: string; emailHeaderText: string; statusHeaderText: string };

export default function UserinfoPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("nameHeaderRow", {
        cell: (info) => (
          <div className="relative h-[64px] flex-1 md:w-full md:flex-none md:self-stretch md:p-5">
            <CheckBox
              name="User CheckBox"
              label="Omitoyin David "
              id="UserCheckBox"
              checked={info?.getValue?.()}
              className="absolute bottom-[15.00px] left-0 right-0 m-auto gap-[75px] p-px text-xl font-medium text-gray-800_02"
            />
            <Img
              src="images/img_ellipse_15.png"
              alt="user circle image"
              className="absolute bottom-0 left-[20%] top-0 my-auto h-[37px] w-[37px] rounded-[50%]"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 px-5 pb-4 md:self-stretch md:p-5">
            <CheckBox
              name="Name CheckBox"
              label="Name"
              id="NameCheckBox"
              className="gap-[17px] p-px text-base font-medium text-gray-700"
            />
          </div>
        ),
        meta: { width: "295px" },
      }),
      tableColumnHelper.accessor("phoneHeaderText", {
        cell: (info) => (
          <Text size="5xl" as="p" className="!text-gray-600_03 md:p-5">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !text-gray-700 md:p-5">
            Phone Number
          </Text>
        ),
        meta: { width: "235px" },
      }),
      tableColumnHelper.accessor("emailHeaderText", {
        cell: (info) => (
          <Text size="5xl" as="p" className="!text-gray-600_03 md:p-5">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !text-gray-700 md:p-5">
            Email Address
          </Text>
        ),
        meta: { width: "316px" },
      }),
      tableColumnHelper.accessor("statusHeaderText", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5 md:p-5">
            <div className="flex w-[44%] items-center justify-center gap-[5px] rounded-lg bg-green-A400_26">
              <div className="h-[4px] w-[4px] self-end rounded-sm bg-green-A700" />
              <Text size="s" as="p" className="!text-green-A700">
                {info?.getValue?.()}
              </Text>
            </div>
            <Img src="images/img_dot.svg" alt="status dot image" className="h-[16px] self-start" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-4 pt-px !text-gray-700 md:p-5">
            Status
          </Text>
        ),
        meta: { width: "152px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>User List - Manage Your Cafe Users Efficiently</title>
        <meta
          name="description"
          content="Explore the King’s cyber cafe user list. Manage user statuses, search by name or keyword, and add new users with ease. Keep your user information organized and accessible."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center gap-[43px] bg-white-A700 pb-[74px] pr-[22px] md:flex-col md:pb-5 sm:pr-5">
        {/* sidebar navigation section */}
        <Sidebar1 />

        {/* main content section */}
        <div className="mt-3.5 flex flex-1 flex-col gap-[73px] md:gap-[54px] md:self-stretch sm:gap-9">
          {/* filter export section */}
          <div className="flex flex-col items-end gap-[37px]">
            <div className="flex w-[22%] gap-[17px] md:w-full md:p-5">
              <Button
                color="red_500_28"
                size="sm"
                shape="round"
                leftIcon={<Img src="images/img_grid_red_500.svg" alt="grid" className="h-[18px] w-[18px]" />}
                className="min-w-[103px] gap-[7px] font-medium sm:pr-5"
              >
                Filter
              </Button>
              <div className="flex w-full items-center justify-center gap-1.5 rounded-[3px] border border-solid border-gray-300">
                <Img src="images/img_cloud_lightning.svg" alt="cloud lightning image" className="h-[24px] w-[24px]" />
                <Text size="2xl" as="p" className="self-end !text-gray-700_02">
                  Export
                </Text>
              </div>
            </div>

            {/* user summary section */}
            <div className="flex items-start gap-[3px] self-stretch md:flex-col">
              <Text as="p" className="!text-gray-600_02 md:p-5">
                King’s cyber cafe users
              </Text>
              <Input
                name="Add Users Field"
                placeholder={`15.8K`}
                className="h-[52px] flex-grow px-[35px] text-base font-medium text-gray-200_02 md:p-5 sm:px-5"
              >
                Add Users
              </Input>
            </div>
          </div>

          {/* user search table section */}
          <div className="flex flex-col gap-[26px] rounded border border-solid border-gray-300 pt-4">
            <Input
              size="sm"
              variant="underline"
              shape="square"
              name="Search View"
              placeholder={`Search Name, or any keyword`}
              value={searchBarValue2}
              onChange={(e: string) => setSearchBarValue2(e)}
              prefix={<Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />}
              suffix={
                searchBarValue2?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue2("")} height={19} width={19} fillColor="#717171ff" />
                ) : null
              }
              className="gap-[26px] text-gray-600 sm:pr-5"
            />

            {/* user table section */}
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
