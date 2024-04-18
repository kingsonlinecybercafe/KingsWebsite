import React from "react";
import { Img, Button, Text, Heading } from "./..";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  graphicsdesigntext?: string;
  matchyourideatext?: string;
  sendARequest?: string;
  photocopytext?: string;
  accessquicktext?: string;
  sendarequest1?: string;
  resultcheckingtext?: string;
  fastresulttext?: string;
  sendarequest2?: string;
  researchproject?: string;
  assignments?: string;
  spiralbind?: string;
  forall?: string;
  productdesign?: string;
}

export default function LANDINGPAGEOurfeatures2({
  graphicsdesigntext = "Graphics design, Branding & General Printing",
  matchyourideatext = "Match your idea with creative designs, good printing and branding project",
  sendARequest = "Send a Request",
  photocopytext = "Photocopy, Typing & Scanning",
  accessquicktext = "Access quick quality sharp photocopies and good typing services.",
  sendarequest1 = "Send a Request",
  resultcheckingtext = "Result checking, online application & many more",
  fastresulttext = "Fast result checking, online application with ease.",
  sendarequest2 = "Send a Request",
  researchproject = "Research & Project Work",
  assignments = "Your assignments projects and project work",
  spiralbind = "Spiral Binding, Hard cover Binding & Stationaries",
  forall = "For all of your binding services and sales of stationeries",
  productdesign = "Product design & Development",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex items-center gap-2 self-stretch md:flex-col">
        <div className="flex w-[33%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="self-stretch">
            <Heading size="md" as="h1" className="text-center tracking-[0.08px]">
              {graphicsdesigntext}
            </Heading>
            <Text as="p" className="text-center leading-6 tracking-[0.08px] !text-gray-900_7f">
              {matchyourideatext}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendARequest}
            </Link>
          </Button>
        </div>
        <Img src="images/img_rectangle_14.png" alt="image" className="h-[462px] w-[33%] object-cover md:w-full" />
        <div className="flex w-[33%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="self-stretch">
            <Heading size="md" as="h2" className="text-center tracking-[0.08px]">
              {spiralbind}
            </Heading>
            <Text as="p" className="text-center leading-6 tracking-[0.08px] !text-gray-900_7f">
              {forall}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendarequest1}
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center self-stretch pr-1.5 md:flex-col">
        <Img
          src="images/img_rectangle_14_462x437.png"
          alt="image_one"
          className="h-[462px] w-[33%] object-cover md:w-full"
        />
        <div className="flex w-[34%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="flex flex-col items-center gap-[5px] self-stretch">
            <Heading size="md" as="h2" className="text-center tracking-[0.08px]">
              {productdesign}
            </Heading>
            <Text as="p" className="text-center tracking-[0.08px] !text-gray-900_7f">
              {fastresulttext}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendarequest2}
            </Link>
          </Button>
        </div>
        <Img src="images/img_rectangle_16.png" alt="image_two" className="h-[462px] w-[33%] object-cover md:w-full" />
      </div>
      <div className="flex items-center gap-2 self-stretch md:flex-col">
        <div className="flex w-[33%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="self-stretch">
            <Heading size="md" as="h1" className="text-center tracking-[0.08px]">
              {researchproject}
            </Heading>
            <Text as="p" className="text-center leading-6 tracking-[0.08px] !text-gray-900_7f">
              {researchproject}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendARequest}
            </Link>
          </Button>
        </div>
        <Img src="images/img_rectangle_14.png" alt="image" className="h-[462px] w-[33%] object-cover md:w-full" />
        <div className="flex w-[33%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="self-stretch">
            <Heading size="md" as="h2" className="text-center tracking-[0.08px]">
              {photocopytext}
            </Heading>
            <Text as="p" className="text-center leading-6 tracking-[0.08px] !text-gray-900_7f">
              {accessquicktext}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendarequest1}
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center self-stretch pr-1.5 md:flex-col">
        <Img
          src="images/img_Rectangle_15.png"
          alt="image_one"
          className="h-[462px] w-[33%] object-cover md:w-full"
        />
        <div className="flex w-[34%] flex-col items-center gap-[167px] md:w-full md:gap-[125px] sm:gap-[83px]">
          <div className="flex flex-col items-center gap-[5px] self-stretch">
            <Heading size="md" as="h2" className="text-center tracking-[0.08px]">
              {resultcheckingtext}
            </Heading>
            <Text as="p" className="text-center tracking-[0.08px] !text-gray-900_7f">
              {fastresulttext}
            </Text>
          </div>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link to="/signup">
              {sendarequest2}
            </Link>
          </Button>
        </div>
        <Img src="images/img_Rectangle_17.png" alt="image_two" className="h-[462px] w-[33%] object-cover md:w-full" />
      </div>
    </div>
  );
}
