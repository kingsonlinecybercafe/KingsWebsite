import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading, TextArea, SelectBox } from "../../components";

const data = [
  { whatsappone: "images/img_ic_baseline_whatsapp_red_500_02.svg", whatsapptwo: "WhatsApp" },
  { whatsappone: "images/img_circum_facebook_red_500_02.svg", whatsapptwo: "Facebook" },
  { whatsappone: "images/img_pajamas_twitter_red_500_02.svg", whatsapptwo: "Twitter" },
  { whatsappone: "images/img_prime_instagram_red_500_02.svg", whatsapptwo: "Instagram" },
  { whatsappone: "images/img_clock.svg", whatsapptwo: "Linkedin" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CONTACTPage() {
  return (
    <>
      <Helmet>
        <title>Contact King's Online Cyber Cafe - Get in Touch</title>
        <meta
          name="description"
          content="Reach out to King's Online Cyber Cafe for inquiries or service requests. Connect with us via WhatsApp, Facebook, Twitter, Instagram, and LinkedIn."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <header className="flex items-center justify-center bg-white-A700 shadow-xs">
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
            <Img
              src="images/img_ak_1_removebg_preview.png"
              alt="ak1removebg_one"
              className="h-[98px] w-[11%] object-cover md:w-full"
            />
            <div className="flex p-[17px]">
              <ul className="flex flex-wrap self-start">
                <li>
                  <a href="/aboutus">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      About us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/services" className="ml-16">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Services
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="ml-[57px]">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Contact us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <Button size="md" shape="round" className="min-w-[286px] font-bold tracking-[0.20px] sm:px-5">
              Download App
            </Button>
          </div>
        </header>

        {/* order section */}
        <div className="flex flex-col items-center gap-24 md:gap-[72px] sm:gap-12">
          <div className="flex h-[513px] items-center justify-center self-stretch bg-teal-600_7f bg-[url(/public/images/img_frame_887_513x1440.png)] bg-cover bg-no-repeat py-[119px] md:h-auto md:py-5">
            <div className="container-xs mb-[102px] mt-[97px] flex justify-end md:p-5">
              <Text size="6xl" as="p" className="text-right tracking-[-0.32px]">
                Make an Order
              </Text>
            </div>
          </div>

          {/* contact info section */}
          <div className="mx-auto flex w-full max-w-[1245px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[35%] flex-col gap-14 md:w-full sm:gap-7">
              <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white-A700 p-4 shadow-sm">
                <div className="mt-[30px] flex self-start">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Our Location
                  </Text>
                </div>
                <div className="mb-8 flex gap-4 self-stretch">
                  <Img
                    src="images/img_fluent_location_12_regular.svg"
                    alt="fluentlocation"
                    className="h-[24px] w-[24px]"
                  />
                  <div className="flex">
                    <Text as="p" className="self-end tracking-[0.08px] !text-gray-900_bf">
                      Oduduwa University, Ile-Ife
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6 rounded-lg bg-white-A700 p-4 shadow-sm">
                <a href="#" className="mt-[30px]">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Contact Us
                  </Text>
                </a>
                <div className="mb-8 flex gap-4 self-stretch">
                  <Img src="images/img_ion_call_outline.svg" alt="ioncall_one" className="h-[24px] w-[24px]" />
                  <div className="flex">
                    <Text as="p" className="self-start tracking-[0.08px] !text-gray-900_bf">
                      +234 705 2904 849
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[25px] rounded-lg bg-white-A700 p-[13px] shadow-sm">
                <div className="flex self-start">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Connect with Us
                  </Text>
                </div>
                <div className="mb-0.5 flex flex-col gap-6 self-stretch">
                  {data.map((d, index) => (
                    <div key={"contact" + index} className="flex flex-1 gap-4">
                      <Img src={d.whatsappone} alt="whatsapp_one" className="h-[24px] w-[24px]" />
                      <div className="flex">
                        <Text as="p" className="self-end tracking-[0.08px] !text-gray-900_bf">
                          {d.whatsapptwo}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-[58%] flex-col gap-6 rounded-lg bg-gray-50 p-6 md:w-full sm:p-5">
              <div className="flex flex-col gap-[31px]">
                <div className="flex self-start">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Leave Us a Message
                  </Text>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex self-start">
                    <Text as="p" className="self-start tracking-[0.08px] !text-gray-900">
                      Name *
                    </Text>
                  </div>
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Enter your full name`}
                    className="tracking-[0.08px] !text-gray-900_7f sm:pr-5"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex self-start">
                    <Text as="p" className="self-start tracking-[0.08px] !text-gray-900">
                      Email Address *
                    </Text>
                  </div>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Enter your email`}
                    className="tracking-[0.08px] !text-gray-900_7f"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex self-start">
                    <Text as="p" className="self-end tracking-[0.08px] !text-gray-900">
                      Subject *
                    </Text>
                  </div>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_settings.svg" alt="settings" className="h-[56px] w-[56px]" />}
                    name="pleaseselect"
                    placeholder={`Please select`}
                    options={dropDownOptions}
                    className="gap-px tracking-[0.08px] sm:pr-5"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex self-start">
                    <Text as="p" className="self-end tracking-[0.08px] !text-gray-900">
                      Your message
                    </Text>
                  </div>
                  <TextArea
                    shape="round"
                    name="materialsymbols"
                    placeholder={`Enter your message`}
                    className="flex gap-6 tracking-[0.08px] text-gray-900_7f sm:py-5 sm:pr-5"
                  />
                </div>
              </div>
              <Button shape="round" className="w-full font-bold tracking-[0.20px] sm:px-5">
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* footer section */}
        <footer className="mt-28">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center bg-red-A700 py-[38px] sm:py-5">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[7%] flex-col items-center gap-6 px-2.5 md:w-full">
                  <div className="flex">
                    <Text size="xl" as="p" className="!font-normal tracking-[0.03px]">
                      Menu
                    </Text>
                  </div>
                  <div className="self-stretch">
                    <ul className="flex flex-col items-start gap-[18px]">
                      <li>
                        <a href="#">
                          <div className="flex">
                            <Text size="md" as="p" className="tracking-[0.04px]">
                              Home
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="tracking-[0.04px]">
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="tracking-[0.04px]">
                            Services
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-[25%] flex-col items-start gap-10 md:w-full">
                  <div className="flex w-[89%] flex-col gap-6 md:w-full">
                    <a href="#">
                      <div className="flex self-start">
                        <Text size="2xl" as="p">
                          Contact Us
                        </Text>
                      </div>
                    </a>
                    <div className="flex flex-col gap-4">
                      <div className="flex self-start">
                        <Text size="md" as="p" className="tracking-[0.04px]">
                          +234 705 2904 849
                        </Text>
                      </div>
                      <div className="flex">
                        <Text size="md" as="p" className="self-end tracking-[0.04px]">
                          Office Address: Oduduwa University, Ile-Ife
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <Heading size="xs" as="h6" className="tracking-[0.20px] !text-light_green-A100">
                      Download King’s app from Playstore here
                    </Heading>
                  </div>
                </div>
                <div className="flex w-[33%] flex-col gap-10 md:w-full">
                  <div className="flex w-[63%] flex-col items-start gap-4 md:w-full">
                    <div className="flex">
                      <Text size="xl" as="p" className="self-start !font-normal tracking-[0.03px]">
                        Get in touch
                      </Text>
                    </div>
                    <div className="flex w-[86%] justify-between gap-5 py-2.5 md:w-full">
                      <Img
                        src="images/img_ic_baseline_whatsapp.svg"
                        alt="icbaseline_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Img src="images/img_circum_facebook.svg" alt="circumfacebook" className="h-[24px] w-[24px]" />
                      <Img src="images/img_pajamas_twitter.svg" alt="pajamastwitter" className="h-[24px] w-[24px]" />
                      <Img
                        src="images/img_jam_linkedin_circle.svg"
                        alt="jamlinkedin_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Img src="images/img_prime_instagram.svg" alt="primeinstagram" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="relative h-[56px] md:h-auto">
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Your email here`}
                      className="w-full font-medium tracking-[0.04px] sm:pr-5"
                    />
                    <Button
                      color="red_A700"
                      size="xs"
                      shape="round"
                      className="absolute bottom-0 right-[10.00px] top-0 my-auto min-w-[176px] !rounded-md font-medium tracking-[0.02px] sm:px-5"
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center bg-red-500_02 py-6 sm:py-5">
              <div className="container-xs flex justify-between gap-5 px-[169px] md:flex-col md:p-5 md:px-5">
                <div className="flex p-2.5">
                  <Text size="md" as="p" className="self-end text-center tracking-[0.04px]">
                    All rights reserved by King’s Online Cyber Cafe. Copyright © 2024{" "}
                  </Text>
                </div>
                <div className="flex w-[39%] justify-between gap-5 p-2.5 md:w-full">
                  <div className="flex">
                    <Text size="md" as="p" className="self-end tracking-[0.04px]">
                      Cookie policy
                    </Text>
                  </div>
                  <div className="flex">
                    <Text size="md" as="p" className="self-end tracking-[0.04px]">
                      Cookie settings
                    </Text>
                  </div>
                  <div className="flex">
                    <Text size="md" as="p" className="tracking-[0.04px]">
                      Terms of use
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
