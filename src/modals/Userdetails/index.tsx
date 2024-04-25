import React from "react";
import { Text, Img, Button } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function Userdetails({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1237px]">
      <div className="w-full px-[311px] md:p-5 md:px-5">
        <div className="flex flex-col items-center gap-[7px] rounded bg-gray-200_02">
          {/* personal details header section */}
          <div className="flex items-center justify-between gap-5 self-stretch rounded-[3px] bg-white-A700 p-2.5">
            <Text size="3xl" as="p" className="!text-gray-800">
              Personal Details
            </Text>
            <Button size="sm" shape="square" className="w-[24px]">
              <Img src="images/img_close.svg" />
            </Button>
          </div>

          {/* profile image section */}
          <Img
            src="images/img_ellipse_16_105x105.png"
            alt="circleimage"
            className="h-[105px] w-[105px] rounded-[50%]"
          />
          <div className="flex flex-col items-start gap-[26px] self-stretch rounded-[3px] bg-white-A700 p-2.5">
            {/* name information section */}
            <div className="mt-[21px] flex w-[84%] justify-between gap-5 md:w-full">
              <div className="flex flex-wrap gap-2.5">
                <Text size="xl" as="p" className="self-start !font-normal !text-blue_gray-400_02">
                  First Name:
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  David Ayomide{" "}
                </Text>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Text size="xl" as="p" className="self-start !font-normal !text-blue_gray-400_02">
                  Last Name:
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  Omitoyin
                </Text>
              </div>
            </div>

            {/* contact information section */}
            <div className="flex w-[92%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex flex-wrap gap-2">
                <Text size="xl" as="p" className="self-start !font-normal !text-blue_gray-400_02">
                  E-mail:
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  Omitoyinayomide20@gmail.com
                </Text>
              </div>
              <div className="flex flex-wrap self-start">
                <Text size="xl" as="p" className="!font-normal !text-blue_gray-400_02">
                  Phone Number:
                </Text>
                <Text size="xl" as="p" className="!text-blue_gray-900_01">
                  09049733613
                </Text>
              </div>
            </div>

            {/* account information section */}
            <div className="mb-[113px] flex w-[86%] justify-between gap-5 md:w-full">
              <div className="flex flex-wrap">
                <Text size="xl" as="p" className="self-start !font-normal !text-blue_gray-400_02">
                  Username:
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  david@ayomde
                </Text>
              </div>
              <div className="flex flex-wrap gap-[5px]">
                <Text size="xl" as="p" className="self-start !font-normal !text-blue_gray-400_02">
                  Password:
                </Text>
                <Text size="xl" as="p" className="self-end !text-blue_gray-900_01">
                  0608200Ff$
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
