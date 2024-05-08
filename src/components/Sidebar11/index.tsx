import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar11({ ...props }: Props) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="241px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pr-[23px] top-0 sm:pr-5 !sticky overflow-auto md:hidden`}
    >
      <Img
        src="images/img_ak_1_removebg_preview.png"
        alt="sidebar image"
        className="h-[105px] w-[45%] self-start object-cover"
      />
      <Input
        shape="round"
        name="Search Field"
        placeholder={`Search`}
        value={searchBarValue1}
        onChange={(e: string) => setSearchBarValue1(e)}
        prefix={<Img src="images/img_contrast.svg" alt="contrast" className="h-[19px] w-[19px] cursor-pointer" />}
        suffix={
          searchBarValue1?.length > 0 ? (
            <CloseSVG onClick={() => setSearchBarValue1("")} height={19} width={19} fillColor="#717171ff" />
          ) : null
        }
        className="w-[90%] gap-[3px] text-gray-600 sm:pr-5"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "6px 6px 6px 13px",
            alignSelf: "start",
            color: "#6f6f6f",
            fontWeight: 500,
            fontSize: "16px",
            gap: "9px",
            borderRadius: "4px",
            [`&:hover, &.ps-active`]: { color: "#ff3131", backgroundColor: "#ff313135 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "22px" } }}
        className="mt-[45px] flex w-full flex-col"
      >
        <MenuItem icon={<Img src="images/img_mage_dashboard.svg" alt="dashboard icon" className="h-[24px] w-[24px]" />}>
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_user_gray_600_01_24x24.svg" alt="user icon" className="h-[24px] w-[24px]" />}
        >
          Users
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_vuesax_linear_messages_3.svg" alt="messages icon" className="h-[24px] w-[24px]" />}
        >
          Messages
        </MenuItem>
        <MenuItem icon={<Img src="images/img_grid.svg" alt="transactions icon" className="h-[24px] w-[24px]" />}>
          Transactions
        </MenuItem>
        <MenuItem icon={<Img src="images/img_clock.svg" alt="logout icon" className="h-[24px] w-[24px]" />}>
          Log out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
