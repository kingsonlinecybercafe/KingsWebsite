import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input } from "./..";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="239px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <Img
        src="images/img_ak_1_removebg_preview.png"
        alt="ak1removebg_one"
        className="h-[105px] w-[45%] self-start object-cover"
      />
      <Input
        shape="round"
        name="search"
        placeholder={`Search`}
        value={searchBarValue}
        onChange={(e: string) => setSearchBarValue(e)}
        prefix={<Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />}
        suffix={
          searchBarValue?.length > 0 ? (
            <CloseSVG onClick={() => setSearchBarValue("")} height={19} width={19} fillColor="#717171ff" />
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
        rootStyles={{ ["&>ul"]: { gap: "60.67px" } }}
        className="mb-[362px] mt-[45px] flex w-full flex-col"
      >
        <MenuItem icon={<Img src="images/img_mage_dashboard.svg" alt="magedashboard" className="h-[24px] w-[24px]" />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[24px] w-[24px]" />}>Users</MenuItem>
        <MenuItem
          icon={<Img src="images/img_vuesax_linear_messages_3.svg" alt="vuesaxlinear" className="h-[24px] w-[24px]" />}
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
  );
}
