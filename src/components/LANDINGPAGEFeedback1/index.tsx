import React from "react";
import { Text, Img } from "./..";

const data = [
  {
    circleimage: "images/img_ellipse_2.png",
    description:
      "They are amazing and helped out with my project. From the typing, to printing and spiral binding, they handled them all and my project came it excellently well.",
    jasonoladipo: "Jason Oladipo",
    student: "Student",
  },
  {
    circleimage: "images/img_ellipse_2_64x64.png",
    description:
      "They are amazing and helped out with my project. From the typing, to printing and spiral binding, they handled them all and my project came it excellently well.",
    jasonoladipo: "Abidemi Hassan",
    student: "Professional",
  },
  {
    circleimage: "images/img_ellipse_2_1.png",
    description: "I got my printing job done at an unbelievable price and got it the same day. Thank you",
    jasonoladipo: "Grace Thomas",
    student: "Student",
  },
];
interface Props {
  className?: string;
  title?: string;
  subtitle?: string;
  description1?: string;
  name1?: string;
  role1?: string;
  description2?: string;
  name2?: string;
  role2?: string;
  description3?: string;
  name3?: string;
  role3?: string;
}

export default function LANDINGPAGEFeedback1({
  title = "Our Satisfied customers",
  subtitle = "customer speak for themselves about the experience",
  description1 = "They are amazing and helped out with my project. From the typing, to printing and spiral binding, they handled them all and my project came it excellently well.",
  name1 = "Jason Oladipo",
  role1 = "Student",
  description2 = "They are amazing and helped out with my project. From the typing, to printing and spiral binding, they handled them all and my project came it excellently well.",
  name2 = "Abidemi Hassan",
  role2 = "Professional",
  description3 = "I got my printing job done at an unbelievable price and got it the same day. Thank you",
  name3 = "Grace Thomas",
  role3 = "Student",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-[18px] self-stretch">
        <div className="flex px-[141px] md:px-5">
          <Text size="5xl" as="p" className="text-center tracking-[0.98px] !text-gray-900">
            {title}
          </Text>
        </div>
        <div className="flex">
          <Text size="xl" as="p" className="self-end text-center !font-normal tracking-[0.03px] !text-gray-900_bf">
            {subtitle}
          </Text>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[878px] gap-8 md:flex-col md:p-5">
        {data.map((d, index) => (
          <div key={"listuserone" + index} className="flex w-full flex-col items-center">
            <Img src={d.circleimage} alt="circleimage" className="relative z-[1] h-[64px] w-[64px] rounded-[50%]" />
            <div className="relative mt-[-32px] flex flex-col items-center gap-6 self-stretch rounded bg-cyan-A200 p-4">
              <Img src="images/img_user.svg" alt="user_one" className="mt-6 h-[24px]" />
              <div className="flex flex-col gap-2.5 self-stretch p-2.5">
                <Text size="s" as="p" className="text-center leading-5 tracking-[0.05px] !text-gray-900_bf">
                  {d.description}
                </Text>
                <div className="flex flex-col">
                  <div className="flex">
                    <Text size="md" as="p" className="self-end text-center tracking-[0.04px] !text-gray-900">
                      {d.jasonoladipo}
                    </Text>
                  </div>
                  <div className="flex">
                    <Text size="s" as="p" className="self-start text-center tracking-[0.05px] !text-gray-900_bf">
                      {d.student}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
