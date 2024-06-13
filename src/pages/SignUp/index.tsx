import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading, Img } from "../../components";
import { Link } from "react-router-dom";
import axios from "components/axios";

export default function SignUpPage() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confPass, setconfPassword] = useState("")
const [agreement, setAgreement] = useState(false)
const [fullname,setFullname] = useState("")
const [number,setnumber] = useState("")
const [username,setUsername] = useState("")
const register = async (e) => {
  e.preventDefault();
  if(password === confPass) {
    console.log(email,password,confPass, new Date().toUTCString())
   
   const req  =  await axios.post("/user",{
      fullname : fullname,
      number : number,
      username : "",
      email : email, 
      password : password, 
      timestamp: new Date().toUTCString(),
    })
    
setEmail("")
setPassword("")
setconfPassword("")
setAgreement(false)
}
}

  return (
    <>
      <Helmet>
        <title>Register for King's Online Cyber Cafe</title>
        <meta
          name="description"
          content="Join King's Online Cyber Cafe platform today. Register to experience our exclusive member benefits. Sign up easily with your email and get started!"
        />
      </Helmet>

      {/* signup page section */}
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
              <Heading size="md" as="h1" className="tracking-[0.08px] !text-gray-800">
                Sign up
              </Heading>

            {/* welcome message section */}
            <div className="mt-[33px] flex flex-col items-start gap-[7px] pt-1">
              <Text size="xl" as="p" className="!font-normal tracking-[0.03px] !text-gray-600_04">
                Welcome to King’s Online Cyber Cafe platform
              </Text>
              <Text size="xl" as="p" className="!font-normal tracking-[0.03px] !text-gray-600_04">
                Register as member to experience
              </Text>
            </div>
              {/* Fullname input section */}
              <div className="mt-8 flex flex-col items-start gap-1 self-stretch">
              <div className="flex">
                <Text size="2xl" as="p" className="!font-medium !text-blue_gray-400">
                  Fullname
                </Text>
              </div>
              <Input
                color="gray_100"
                size="lg"
                type="text"
                onChange = {(e) => { setFullname(e)}}
                placeholder={`Adeola Akintunde...`}
                className="self-stretch rounded-[5px] tracking-[0.03px] !text-gray-500 sm:px-5"
              />
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
                onChange = {(e) => { setEmail(e)}}
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
                onChange = {  (e) => setPassword(e) } 
                placeholder={`...............`}
                className="ml-[3px] self-stretch rounded-[5px] tracking-[0.06px] md:ml-0 sm:px-5"
              />
            </div>

            {/* confirm password section */}
            <div className="mt-[18px] flex">
              <Text size="2xl" as="p" className="!font-medium !text-blue_gray-400">
                Confirm Password 
              </Text>
            </div>
            <Input
              color="gray_100"
              size="md"
              type="password"
              onChange = {(e) => { setconfPassword(e) }}
              placeholder={`...............`}
              className="ml-[3px] mt-[9px] self-stretch rounded-[5px] tracking-[0.06px] md:ml-0 sm:px-5"
            />
  {/* Phone Number input section */}
  <div className="mt-8 flex flex-col items-start gap-1 self-stretch">
              <div className="flex">
                <Text size="2xl" as="p" className="!font-medium !text-blue_gray-400">
                  Phonenumber
                </Text>
              </div>
              <Input
                color="gray_100"
                size="lg"
                type="text"
                onChange = {(e) => { setnumber(e)}}
                placeholder={`09123456789`}
                className="self-stretch rounded-[5px] tracking-[0.03px] !text-gray-500 sm:px-5"
              />
            </div>
            {/* terms agreement section */}
            <CheckBox
              name="checkmark"
              label="I agree to the terms of services"
              id="checkmark"
              onChange = {(e) => { setAgreement(!agreement)}}
              className="mt-[26px] px-px pb-0.5 pt-2 text-left text-sm font-medium tracking-[0.04px] text-blue_gray-400"
            />

            {/* create account button section */}
            <Button size="xl"  shape="round" className="mt-[38px] w-full font-bold tracking-[0.20px] sm:px-5"   >
              <Link to="/userpage"  onClick={register}>
                Create Account
              </Link>
            </Button>

            {/* signin redirect section */}
            <div className="ml-[5px] mt-[57px] flex md:ml-0">
              <Text as="p" className="!font-medium tracking-[0.02px] !text-blue_gray-400">
              
                  <span className="text-blue_gray-400">Already a member ?&nbsp;</span>
                 <Link to="/signin">
                  <span className="text-red_500_01">Sign in</span>
                  </Link>
             
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
