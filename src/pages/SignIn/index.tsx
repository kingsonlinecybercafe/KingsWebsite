import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading, Img } from "../../components";
import { Link } from "react-router-dom";
import axios from "components/axios";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savePass, setSavePass] = useState(false);
  const login = async (e) => {
    console.log(email,password, new Date().toUTCString())
/*
  await axios.get('/user',{
   email : email, 
   password : password, 
})
    setEmail("")
    setPassword("")
    setSavePass(false)*/
}


  return (
    <>
      <Helmet>
        <title>Register for King's Online Cyber Cafe</title>
        <meta
          name="description"
          content="Join King's Online Cyber Cafe platform today. Log in to experience our exclusive member benefits. Sign up easily with your email and get started!"
        />
      </Helmet>

      {/* signin page section */}
      <div className="flex w-full flex-col items-center justify-center gap-[35px] bg-white-A700 p-[47px] md:p-5">
        {/* logo section */}
        <Img
          src="images/img_ak_1_removebg_preview.png"
          alt="ak1removebg_one"
          className="mr-[500px] h-[72px] w-[12%] object-cover md:ml-0"
        />
        <div className="w-[43%] md:w-full">
          {/* signup form section */}
          <div className="my-[35px] flex flex-col items-start">
            <a href="#">
              <Heading size="md" as="h1" className="tracking-[0.08px] !text-gray-800">
                Sign In
              </Heading>
            </a>

            {/* welcome message section */}
            <div className="mt-[33px] flex flex-col items-start gap-[7px] pt-1">
              <Text size="xl" as="p" className="!font-normal tracking-[0.03px] !text-gray-600_04">
                Welcome to King’s Online Cyber Cafe platform
              </Text>
              <Text size="xl" as="p" className="!font-normal tracking-[0.03px] !text-gray-600_04">
                Log in as member to experience
              </Text>
            </div>

            {/* email input section */}
            <div className="mt-8 flex flex-col items-start gap-1 self-stretch">
              <div className="flex">
                <Text size="2xl" as="p" className="!font-medium !text-blue_gray-400">
                  Email
                </Text>
              </div>
              <Input
                color="gray_100"
                size="lg"
                type="email"
                onChange  ={(e) => setEmail(e) }
                placeholder={`bayur453@gmail.com`}
                className="self-stretch rounded-[5px] tracking-[0.03px] !text-gray-500 sm:px-5"
              />
            </div>

            {/* password input section */}
            <div className="mt-[23px] flex flex-col items-start gap-1 self-stretch">
              <div className="flex">
                <Text size="2xl" as="p" className="!font-medium !text-blue_gray-400">
                  Password
                </Text>
              </div>
              <Input
                color="gray_100"
                size="md"
                type="password"
                onChange ={(e) => setPassword(e)}
                placeholder={`...............`}
                className="ml-[3px] self-stretch rounded-[5px] tracking-[0.06px] md:ml-0 sm:px-5"
              />
            </div>

            {/* terms agreement section */}
            <CheckBox
              name="checkmark"
              label="Save Password"
              id="checkmark"
              onChange={(e) => setSavePass(!savePass)}
              className="mt-[26px] px-px pb-0.5 pt-2 text-left text-sm font-medium tracking-[0.04px] text-blue_gray-400"
            />

            {/* create account button section */}
            <Button size="xl" shape="round" className="mt-[38px] w-full font-bold tracking-[0.20px] sm:px-5" >
              <Link to="/userpage" onClick={login}  >
                Log In
              </Link>
            </Button>

            {/* signin redirect section */}
            <div className="ml-[5px] mt-[57px] flex md:ml-0">
              <Text as="p" className="!font-medium tracking-[0.02px] !text-blue_gray-400">
                <span className="text-blue_gray-400">Forgot Password ?</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
