import React from "react";
import { Text } from "./..";

const data = [
  { research: "Research & Project Work" },
  { research: "Result checking, online application & many more" },
  { research: "Spiral Binding, Hard cover Binding & Stationaries" },
  { research: "Graphics design, Branding & General Printing" },
  { research: "Product design & Development" },
  { research: "Photocopy, Typing & Scanning" },
];
interface Props {
  className?: string;
  researchtext?: string;
  resultcheckingtext?: string;
  spiralbindingtext?: string;
  graphicsdesigntext?: string;
  productdesigntext?: string;
  photocopytext?: string;
}

export default function LANDINGPAGESlide2({
  researchtext = "Research & Project Work",
  resultcheckingtext = "Result checking, online application & many more",
  spiralbindingtext = "Spiral Binding, Hard cover Binding & Stationaries",
  graphicsdesigntext = "Graphics design, Branding & General Printing",
  productdesigntext = "Product design & Development",
  photocopytext = "Photocopy, Typing & Scanning",
  ...props
}: Props) {
  return (
    <div {...props}>
      {data.map((d, index) => (
        <div
          key={"servicelist" + index}
          className="ml-[18px] mt-[7px] flex-shrink-0 w-[calc(31% - 9px)] flex h-[399px] w-[31%] items-end justify-center rounded-[10px] bg-[url(/public/images/img_frame_803.png)] bg-gradient1 bg-cover bg-no-repeat p-[42px] md:ml-0 md:mt-0 md:h-auto md:w-full md:p-5"
        >
          <Text size="3xl" as="p" className="mt-[225px] font-normal">
            {d.research}
          </Text>
        </div>
      ))}
    </div>
  );
}
