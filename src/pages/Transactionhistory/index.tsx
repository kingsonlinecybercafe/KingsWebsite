import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function TransactionhistoryPage() {
  return (
    <>
      <Helmet>
        <title>Transaction History - Manage Your Finances</title>
        <meta
          name="description"
          content="View and manage your transaction history including all recent financial activities. Keep track of payments, transfers, and deposits with ease."
        />
      </Helmet>

      {/* transaction history section */}
      <div className="flex w-full items-start justify-center gap-[21px] bg-white-A700 md:flex-col">
        {/* sidebar navigation section */}
        <Sidebar1 className="!sticky top-0 flex h-screen w-[241px] flex-col overflow-auto pb-[23px] pr-[23px] md:hidden md:p-5 sm:pb-5 sm:pr-5" />

        {/* main content section */}
        <div className="mt-3 flex flex-1 flex-col items-start gap-[52px] md:self-stretch md:p-5 sm:gap-[26px]">
          {/* transaction overview section */}
          <div className="flex flex-col items-start gap-[15px]">
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
            <Heading as="h1" className="ml-1 md:ml-0">
              Transaction History
            </Heading>
          </div>

          {/* transaction list section */}
          <div className="flex flex-col gap-[18px] self-stretch rounded border border-solid border-gray-300 py-[9px]">
            {/* today transactions section */}
            <div className="mt-3.5 flex flex-col items-start gap-1.5">
              <Text size="2xl" as="p" className="ml-[13px] !text-gray-700_01 md:ml-0">
                Today
              </Text>
              <div className="h-px w-full self-stretch bg-gray-300" />
            </div>
            <div className="flex w-[96%] items-start gap-3.5 md:w-full md:flex-col">
              <Button shape="circle" className="w-[34px] !rounded-[17px]">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                  <Text size="4xl" as="p" className="mb-2 !text-gray-800_05">
                    Product design fee frm (omitoyin david)
                  </Text>
                  <Heading as="h2" className="!text-green-A700">
                    +#25,000
                  </Heading>
                </div>
                <Text size="xl" as="p" className="relative mt-[-4px] !text-gray-400_01">
                  10:30PM
                </Text>
              </div>
            </div>

            {/* transaction item section */}
            <div className="flex flex-col gap-[17px]">
              <div className="h-px bg-gray-300" />
              <div className="flex w-[96%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex items-start gap-3.5 sm:flex-col">
                  <Button shape="circle" className="w-[34px] !rounded-[17px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-1">
                    <Text size="4xl" as="p" className="!text-gray-800_05">
                      Product design fee frm (omitoyin david)
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-400_01">
                      10:30PM
                    </Text>
                  </div>
                </div>
                <Heading as="h3" className="mt-2 !text-green-A700">
                  +#25,000
                </Heading>
              </div>
              <div className="h-px bg-gray-300" />
            </div>

            {/* transaction item section */}
            <div className="flex w-[96%] items-start justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex items-start gap-3.5 sm:flex-col">
                <Button shape="circle" className="w-[34px] !rounded-[17px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <div className="flex flex-col items-start gap-1">
                  <Text size="4xl" as="p" className="!text-gray-800_05">
                    Product design fee frm (omitoyin david)
                  </Text>
                  <Text size="xl" as="p" className="!text-gray-400_01">
                    10:30PM
                  </Text>
                </div>
              </div>
              <Heading as="h4" className="mt-2 !text-green-A700">
                +#25,000
              </Heading>
            </div>

            {/* transaction item section */}
            <div className="flex flex-col gap-[18px]">
              <div className="h-px bg-gray-300" />
              <div className="flex w-[96%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex items-start gap-3.5 sm:flex-col">
                  <Button shape="circle" className="w-[34px] !rounded-[17px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-1">
                    <Text size="4xl" as="p" className="!text-gray-800_05">
                      Product design fee frm (omitoyin david)
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-400_01">
                      10:30PM
                    </Text>
                  </div>
                </div>
                <Heading as="h5" className="mt-2 !text-green-A700">
                  +#25,000
                </Heading>
              </div>
              <div className="h-px bg-gray-300" />
            </div>

            {/* transaction item section */}
            <div className="flex w-[96%] items-start gap-3.5 md:w-full md:flex-col">
              <Button shape="circle" className="w-[34px] !rounded-[17px]">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                  <Text size="4xl" as="p" className="mb-2 !text-gray-800_05">
                    Product design fee frm (omitoyin david)
                  </Text>
                  <Heading as="h6" className="!text-green-A700">
                    +#25,000
                  </Heading>
                </div>
                <Text size="xl" as="p" className="relative mt-[-4px] !text-gray-400_01">
                  10:30PM
                </Text>
              </div>
            </div>

            {/* transaction item section */}
            <div className="flex flex-col gap-[18px]">
              <div className="h-px bg-gray-300" />
              <div className="flex w-[96%] items-start gap-3.5 md:w-full md:flex-col">
                <Button shape="circle" className="w-[34px] !rounded-[17px]">
                  <Img src="images/img_settings.svg" />
                </Button>
                <div className="flex flex-1 flex-col items-start md:self-stretch">
                  <div className="flex flex-wrap items-start justify-between gap-5 self-stretch">
                    <Text size="4xl" as="p" className="mb-2 !text-gray-800_05">
                      Product design fee frm (omitoyin david)
                    </Text>
                    <Heading as="h5" className="!text-green-A700">
                      +#25,000
                    </Heading>
                  </div>
                  <Text size="xl" as="p" className="relative mt-[-4px] !text-gray-400_01">
                    10:30PM
                  </Text>
                </div>
              </div>
              <div className="h-px bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
