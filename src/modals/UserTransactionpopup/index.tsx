import React from "react";
import { Heading, Text, Button, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function UserTransactionpopup({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1238px]">
      {/* transaction header section */}
      <div className="w-full pl-[342px] pr-[283px] md:p-5 md:px-5">
        <div className="flex flex-col gap-[9px] rounded border border-solid border-gray-300 bg-white-A700 pb-[39px] pt-[7px] sm:pb-5">
          {/* transaction date close section */}
          <div className="flex items-start justify-between gap-5">
            <Text as="p" className="!text-gray-700">
              Today
            </Text>
            <Button size="xs" shape="square" className="mb-[11px] w-[24px]">
              <Img src="images/img_close.svg" />
            </Button>
          </div>

          {/* transaction list section */}
          <div className="flex flex-col gap-[19px] pb-1.5">
            {/* transaction item section */}
            <div className="flex flex-1 flex-col items-center gap-[5px]">
              <div className="flex w-[92%] items-start justify-between gap-5 md:w-full">
                <div className="flex items-start gap-3.5">
                  <Button shape="circle" className="w-[34px] !rounded-[17px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-1.5">
                    <Text as="p" className="!text-gray-800_02">
                      Product design fee
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-400_02">
                      10:30PM
                    </Text>
                  </div>
                </div>
                <Heading as="h1">+#25,000</Heading>
              </div>
              <div className="h-px w-full self-stretch bg-gray-300" />
            </div>
            <div className="h-px w-full bg-gray-300" />

            {/* transaction settings section */}
            <div className="flex w-[92%] items-start gap-3.5 md:w-full sm:flex-col">
              <Button shape="circle" className="w-[34px] !rounded-[17px]">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start sm:self-stretch">
                <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                  <Text as="p" className="!text-gray-800_02">
                    Product design fee
                  </Text>
                  <Heading as="h2">+#25,000</Heading>
                </div>
                <Text size="xl" as="p" className="!text-gray-400_02">
                  10:30PM
                </Text>
              </div>
            </div>
            <div className="h-px w-full bg-gray-300" />
            <div className="flex w-[92%] items-start justify-between gap-5 md:w-full">
              <div className="flex items-start gap-3.5">
                <Button shape="circle" className="w-[34px] !rounded-[17px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <div className="flex flex-col items-start gap-1.5">
                  <Text as="p" className="!text-gray-800_02">
                    Product design fee
                  </Text>
                  <Text size="xl" as="p" className="!text-gray-400_02">
                    10:30PM
                  </Text>
                </div>
              </div>
              <Heading as="h3">+#25,000</Heading>
            </div>
            <div className="h-px w-full bg-gray-300" />
            <div className="flex flex-1 flex-col items-center">
              <div className="h-px w-full self-stretch bg-gray-300" />
              <div className="mt-[19px] flex w-[92%] md:w-full">
                <div className="flex w-full items-start gap-3.5 sm:flex-col">
                  <Button shape="circle" className="w-[34px] !rounded-[17px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start sm:self-stretch">
                    <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                      <Text as="p" className="!text-gray-800_02">
                        Product design fee
                      </Text>
                      <Heading as="h4">+#25,000</Heading>
                    </div>
                    <Text size="xl" as="p" className="!text-gray-400_02">
                      10:30PM
                    </Text>
                  </div>
                </div>
              </div>
              <div className="mt-[5px] h-px w-full self-stretch bg-gray-300" />
            </div>
            <div className="h-px w-full bg-gray-300" />
            <div className="flex w-[92%] items-start justify-between gap-5 md:w-full">
              <div className="flex items-start gap-3.5">
                <Button shape="circle" className="w-[34px] !rounded-[17px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <div className="flex flex-col items-start gap-1.5">
                  <Text as="p" className="!text-gray-800_02">
                    Product design fee
                  </Text>
                  <Text size="xl" as="p" className="!text-gray-400_02">
                    10:30PM
                  </Text>
                </div>
              </div>
              <Heading as="h5">+#25,000</Heading>
            </div>
            <div className="h-px w-full bg-gray-300" />
            <div className="flex flex-1 flex-col items-center">
              <div className="h-px w-full self-stretch bg-gray-300" />
              <div className="mt-[19px] flex w-[92%] items-start justify-between gap-5 md:w-full">
                <div className="flex items-start gap-3.5">
                  <Button shape="circle" className="w-[34px] !rounded-[17px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-1.5">
                    <Text as="p" className="!text-gray-800_02">
                      Product design fee
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-400_02">
                      10:30PM
                    </Text>
                  </div>
                </div>
                <Heading as="h6">+#25,000</Heading>
              </div>
              <div className="mt-[5px] h-px self-stretch bg-gray-300" />
            </div>
            <div className="h-px w-full bg-gray-300" />
            <div className="flex w-[92%] items-start justify-between gap-5 md:w-full">
              <div className="flex items-start gap-3.5">
                <Button shape="circle" className="w-[34px] !rounded-[17px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <div className="flex flex-col items-start gap-1.5">
                  <Text as="p" className="!text-gray-800_02">
                    Product design fee
                  </Text>
                  <Text size="xl" as="p" className="!text-gray-400_02">
                    10:30PM
                  </Text>
                </div>
              </div>
              <Heading as="h5">+#25,000</Heading>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
