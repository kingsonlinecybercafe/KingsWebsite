import React from "react";
import { Img, Button, Text } from "./..";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  title?: string;
  startprojectbutton?: string;
}

export default function LANDINGPAGEHero1({
  title = "Your Trusted Partner in Digital Cafe Experience",
  startprojectbutton = "Start A Project",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
        <div className="mt-8 flex w-[42%] h-[42%] flex-col items-start gap-8 md:w-full">
          <Text size="6xl" as="p" className="tracking-[-0.32px]">
            {title}
          </Text>
          <Button shape="round" className="min-w-[225px] font-bold tracking-[0.20px] sm:px-5">
            <Link  to="/signup">
              {startprojectbutton}
            </Link>
          </Button>
        </div>
        <Img src="images/img_graphic_1.png" alt="graphicone_one" className="h-[471px] w-[22%] object-cover md:w-full" />
      </div>
    </div>
  );
}
