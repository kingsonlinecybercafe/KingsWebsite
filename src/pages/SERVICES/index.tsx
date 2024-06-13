import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Text, Button, Input, Img, Heading, TextArea, SelectBox } from "../../components";
import LANDINGPAGEOurfeatures2 from "components/LANDINGPAGEOurfeatures2";

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

export default function SERVICESPage() {
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
              className="h-[98px] w-[11%] object-cover lg:w-full"
            />
            <div className="flex p-[17px]">
              <ul className="flex flex-wrap self-start">
                <li className="md:flex-1" >
                  <Link to="/aboutus">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      About us
                    </Text>
                  </Link>
                </li>
                <li className="md:flex-1">
                  <Link to="/services" className="ml-16">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Services
                    </Text>
                  </Link>
                </li>
                <li className="md:flex-1">
                  <Link to="/contact" className="ml-[57px]">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Contact us
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <Button size="md" shape="round" className="min-w-[286px] font-bold tracking-[0.20px] sm:px-5">
              Download App
            </Button>
          </div>
        </header>
                {/* order section */}
                <div className="w-full bg-white-A700">
                    <div className="flex flex-col items-center gap-24 md:gap-[72px] sm:gap-12">
                        <div className="flex h-[513px] items-center justify-center self-stretch bg-teal-600_7f bg-[url(/public/images/img_frame_887_513x1440.png)] bg-cover bg-no-repeat py-[119px] md:h-auto md:py-5">
                            <div className="container-xs mb-[102px] mt-[97px] flex justify-end md:p-5">
                                <Text size="6xl" as="p" className="text-right tracking-[-0.32px]">
                                    Our Services
                                </Text>
                            </div>
                        </div>

                        <div className="mb-[35px] flex w-[78%] flex-col gap-8 md:w-full">
                            <div className="flex">
                                <Text size="5xl" as="p" className="text-center tracking-[0.98px] !text-gray-900">
                                    About King&#39;s Online Cyber Cafe
                                </Text>
                            </div>
                            <Text as="p" className="text-center !font-medium tracking-[0.02px] !text-gray-900_bf">
                                Printing, Photocopy, Book Binding, Lamination, Project Writing, and more.
                            </Text>
                        </div>
                        <LANDINGPAGEOurfeatures2 className="mx-auto mt-[120px] w-full max-w-[1311px] md:p-5" />
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
