import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Home from "pages/Home";
export default function ABOUTUSPage() {
  return (
    <>
      <Helmet>
        <title>About King's Online Cyber Cafe - Our Story & Vision</title>
        <meta
          name="description"
          content="Learn about King's Online Cyber Cafe, a hub for tech enthusiasts and visionaries. Discover our mission to redefine the cyber cafe experience in the digital age."
        />
      </Helmet>

      {/* about us page section */}
      {/* header section */}
      <div className="w-full bg-white-A700">

        <header className="flex items-center justify-center bg-white-A700 shadow-xs">
          <div className="container-xs flex items-center justify-between gap-5 md:gap-3 md:flex-col md:p-5">
            <Img
              src="images/img_ak_1_removebg_preview.png"
              alt="ak1removebg_one"
              className="h-[98px] md:h-[58px] w-[11%] object-cover lg:w-full"
            />
            <div className="flex p-[17px] md:p-[0]">
              <ul className="flex flex-wrap self-start">
                <li className="md:flex-0" >
                  <Link to="/aboutus">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      About us
                    </Text>
                  </Link>
                </li>
                <li className="md:flex-0">
                  <Link to="/services" className="ml-16 md:ml-5">
                    <Text as="p" className="text-center tracking-[0.08px] !text-gray-900">
                      Services
                    </Text>
                  </Link>
                </li>
                <li className="md:flex-0">
                  <Link to="/services" className="ml-16 md:ml-5">
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
        {/* about us intro section */}
        <div className="flex w-full flex-col items-center bg-white-A700">
          <div className="flex flex-col items-end self-stretch">
            <div className="flex h-[513px] items-center justify-center self-stretch bg-teal-600_7f bg-[url(/public/images/img_frame_887.png)] bg-cover bg-no-repeat py-[119px] md:h-auto md:py-5">
              <div className="container-xs mb-[102px] mt-[97px] flex md:p-5">
                <div className="flex">
                  <Text size="6xl" as="p" className="tracking-[-0.32px]">
                    About Us
                  </Text>
                </div>
              </div>
            </div>

            {/* about kings section */}
            <div className="mx-auto mt-[120px] flex w-full max-w-[1046px] items-start justify-between gap-5 md:flex-col md:p-5">
              <div className="mb-[35px] flex w-[78%] flex-col gap-8 md:w-full">
                <div className="flex">
                  <Text size="5xl" as="p" className="text-center tracking-[0.98px] !text-gray-900">
                    About King&#39;s Online Cyber Cafe
                  </Text>
                </div>
                <Text as="p" className="text-center !font-medium tracking-[0.02px] !text-gray-900_bf">
                  Welcome to King&#39;s Online Cyber Cafe, where the digital world meets unparalleled service excellence.
                  We&#39;re not just an online cyber cafe; we&#39;re architects of seamless digital experiences, and
                  here&#39;s our story:
                </Text>
              </div>
              <Button
                size="sm"
                variant="gradient"
                shape="circle"
                color="red_500_01_red_500_03"
                className="w-[48px] !rounded-[24px]"
              >
                <Img src="images/img_grid.svg" />
              </Button>
            </div>
          </div>

          {/* who we are section */}
          <div className="mt-[49px] flex h-[1387px] flex-col gap-[84px] self-stretch bg-[url(/public/images/img_frame_902.png)] bg-cover bg-no-repeat md:h-auto md:gap-[63px] sm:gap-[42px]">
            <div className="flex justify-center">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[41%] flex-col justify-center gap-[33px] py-[18px] md:w-full">
                  <div className="flex self-start">
                    <Text size="5xl" as="p" className="tracking-[0.98px] !text-gray-900">
                      Who We are
                    </Text>
                  </div>
                  <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                    King&#39;s Online Cyber Cafe is more than a service provider; we&#39;re a community of tech
                    enthusiasts, visionist, and go-getters. Our journey began with a simple yet powerful idea — to
                    redefine the cyber cafe experience in the digital age.
                  </Text>
                </div>
                <Img
                  src="images/img_people_with_lightbulb.png"
                  alt="peoplewith_one"
                  className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                />
              </div>
            </div>

            {/* our vision section */}
            <div className="flex justify-center">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                <Img
                  src="images/img_people_with_lightbulb_406x600.png"
                  alt="peoplewith"
                  className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                />
                <div className="flex w-[41%] flex-col justify-center gap-[33px] py-[18px] md:w-full">
                  <div className="flex self-start">
                    <Text size="5xl" as="p" className="tracking-[0.98px] !text-gray-900">
                      Our Vision
                    </Text>
                  </div>
                  <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                    At King&#39;s, we envision a world where digital interactions are not just transactions but journeys
                    of innovation and convenience. Our vision is to make cyber cafe transaction easy and fast leveraging
                    in the online realm.
                  </Text>
                </div>
              </div>
            </div>

            {/* our mission section */}
            <div className="flex justify-center">
              <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[41%] flex-col justify-center gap-[33px] py-[18px] md:w-full">
                  <div className="flex self-start">
                    <Text size="5xl" as="p" className="tracking-[0.98px] !text-gray-900">
                      Our Mission
                    </Text>
                  </div>
                  <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                    Our mission is to empower individuals and businesses by providing a digital sanctuary where ideas
                    flourish, collaborations thrive, and productivity knows no bounds. We are committed to delivering
                    prompt, secure, and user-friendly online services that elevate your digital lifestyle.
                  </Text>
                </div>
                <Img
                  src="images/img_people_with_lightbulb_1.png"
                  alt="peoplewith_five"
                  className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                />
              </div>
            </div>
          </div>

          {/* our values section */}
          <div className="mx-auto mt-[98px] flex w-full max-w-[1320px] flex-col items-center gap-[69px] pb-5 md:p-5 sm:gap-[34px]">
            <div className="flex w-full flex-col items-center px-[355px] md:px-5">
              <div className="flex px-[101px] md:px-5">
                <Text size="5xl" as="p" className="text-center tracking-[0.98px] !text-gray-900">
                  Our Values
                </Text>
              </div>
            </div>
            <div className="flex w-[97%] gap-10 md:w-full md:flex-col">
              <div className="flex h-[400px] w-full flex-col items-start justify-end gap-4 rounded-lg bg-black-900_33 bg-[url(/public/images/img_frame_63.png)] bg-cover bg-no-repeat p-5 shadow-xs md:h-auto">
                <Heading as="h1" className="mt-[237px] !text-white-A700">
                  Innovation
                </Heading>
                <Text as="p" className="mb-5 w-[73%] !font-medium tracking-[0.02px] md:w-full">
                  We embrace technology to constantly innovate and enhance your digital journey
                </Text>
              </div>
              <div className="flex h-[400px] w-full flex-col items-start justify-end gap-[15px] rounded-lg bg-black-900_33 bg-[url(/public/images/img_frame_66.png)] bg-cover bg-no-repeat p-5 shadow-xs md:h-auto">
                <div className="mt-[239px] flex">
                  <Heading as="h2" className="!text-white-A700">
                    Customer-Centricity
                  </Heading>
                </div>
                <Text as="p" className="mb-5 w-[73%] !font-medium tracking-[0.02px] md:w-full">
                  Your satisfaction is at the core of everything we do. We listen, we adapt, and we deliver.
                </Text>
              </div>
              <div className="flex h-[400px] w-full flex-col items-start justify-end gap-[15px] rounded-lg bg-black-900_7f bg-[url(/public/images/img_frame_67.png)] bg-cover bg-no-repeat p-5 shadow-xs md:h-auto">
                <div className="mt-[239px] flex">
                  <Heading as="h3" className="!text-white-A700">
                    Integrity
                  </Heading>
                </div>
                <Text as="p" className="mb-5 w-[73%] !font-medium tracking-[0.02px] md:w-full">
                  We conduct our business with the highest level of integrity, ensuring transparency and trust
                </Text>
              </div>
            </div>
          </div>

          {/* why choose us section */}
          <div className="mt-[100px] flex flex-col items-center gap-[45px] self-stretch">
            <div className="relative h-[1883px] self-stretch md:h-auto">
              <Img src="images/defaultNoData.png" alt="createfrom_one" className="h-[1883px] w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center gap-12">
                <div className="container-xs flex flex-col items-center px-[355px] md:p-5 md:px-5">
                  <div className="flex">
                    <Text size="5xl" as="p" className="text-center tracking-[0.98px] !text-gray-900">
                      Why Choose Us?
                    </Text>
                  </div>
                </div>
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                  <Img
                    src="images/img_people_with_lightbulb_2.png"
                    alt="peoplewith"
                    className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                  />
                  <div className="flex w-[41%] flex-col gap-[15px] md:w-full">
                    <div className="flex self-start">
                      <Heading as="h2" className="!text-gray-900">
                        Seamless Experience
                      </Heading>
                    </div>
                    <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                      Navigate our virtual corridors effortlessly, whether you&#39;re a tech whiz or a digital novice.
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                    <div className="flex w-[41%] flex-col gap-[15px] md:w-full">
                      <div className="flex self-start">
                        <Heading as="h3" className="!text-gray-900">
                          Swift Delivery
                        </Heading>
                      </div>
                      <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                        Experience the epitome of convenience with our swift and reliable delivery system.
                      </Text>
                    </div>
                    <Img
                      src="images/img_people_with_lightbulb_3.png"
                      alt="peoplewith_nine"
                      className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                    />
                  </div>
                </div>
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                  <Img
                    src="images/img_people_with_lightbulb_4.png"
                    alt="peoplewith"
                    className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                  />
                  <div className="flex w-[41%] flex-col gap-4 md:w-full">
                    <div className="flex self-start">
                      <Heading as="h4" className="!text-gray-900">
                        Secure Transactions
                      </Heading>
                    </div>
                    <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                      Your privacy and data security are our top priorities. Trust us for a secure online environment
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center self-stretch">
                  <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                    <div className="flex w-[41%] flex-col gap-[15px] md:w-full">
                      <div className="flex self-start">
                        <Heading as="h5" className="!text-gray-900">
                          Vibrant Community
                        </Heading>
                      </div>
                      <Text as="p" className="leading-6 tracking-[0.08px] !text-gray-900_bf">
                        Join a community where ideas come to life, connections are made, and collaborations unfold
                      </Text>
                    </div>
                    <Img
                      src="images/img_people_with_lightbulb_5.png"
                      alt="peoplewith"
                      className="h-[406px] w-[50%] rounded-lg object-cover md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* get started section */}
            <div className="container-xs px-[365px] md:p-5 md:px-5">
              <Button
                color="lime_500"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_icomoonfreepointleft.svg"
                    alt="icomoon-free:point-left"
                    className="h-[24px] w-[31px]"
                  />
                }
                className="w-full gap-6 font-bold tracking-[0.20px] sm:px-5"
              >
                Get Started here
              </Button>
            </div>
          </div>
        </div>
        <Footer className="mt-[62px] self-stretch" />
      </div>
    </>
  );
}
