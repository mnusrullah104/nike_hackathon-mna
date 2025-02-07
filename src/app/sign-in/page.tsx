"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
  useSignIn,
} from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { ImAppleinc } from "react-icons/im";


const Login = () => {
  const { user } = useUser(); // Get user details from Clerk
  const { signIn, setActive, isLoaded } = useSignIn(); // Clerk's sign-in function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      }
    } catch {
      setError("Sign-in failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-[600px]">
      {/* Right Section */}
      <div className="flex-1 mb-4 mt-4 bg-black flex justify-center items-center">
        <SiNike size={150} className="text-white" />
      </div>

      {/* Left Section */}
      <div className="flex-1 bg-white flex flex-col justify-center px-8 lg:px-20">
        <SignedIn>
          {/* When signed in */}
          <div className="flex flex-col items-center">
            <UserButton />
            <h1 className="text-3xl font-bold mb-4">
              Welcome, {user?.firstName || "User"}!
            </h1>
            <p className="mt-4 text-lg text-center">
              Shop now and use the coupon{" "}
              <span className="font-bold text-black">Muhammad Nasrullah</span> to get a
              $50 discount on your next purchase!
            </p>
          </div>
        </SignedIn>

        <SignedOut>
          {/* When signed out */}
          <div>
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            {error && <p className="text-red-500">{error}</p>}

            {/* Google Sign In Button */}
            <SignInButton mode="modal">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
                <FcGoogle size={24} /> Continue with Google
              </button>
              
            </SignInButton>
            <SignInButton mode="modal">

            <button className="w-full mt-3 flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
              <ImAppleinc size={24} /> Continue with Apple
              </button>
              </SignInButton>


            <div className="text-center my-4 text-gray-500">or</div>

            {/* Email and Password Login */}
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                    👁
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700 text-sm">Remember Me</span>
                </label>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot Password
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Sign In
              </button>
            </form>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;














// import { SignedOut, SignInButton } from "@clerk/nextjs";
// import { Sign } from "crypto";
// import Image from "next/image"

// const Sign_In = () => {
//     return (
//         <>
//             <div className='h-screen  grid place-content-center  overflow-hidden  '>
//                 <div className=' w-[380px] h-[489] font-[Helvetica] '>

//                     <div className="flex justify-center  ">
//                         <Image
//                             src="/logo.png"
//                             alt="logo"
//                             width={60}
//                             height={60}
//                             className="pb-4 mt-5 ml-2
//     "

//                         />
//                     </div>

//                     <div className="flex justify-center text-center text-2xl font-[Helvetica] font-[700] leading-8  ">
//                         <h1>Your Account <br /> For Everything <br />Nike </h1>
//                     </div>


//                     <div className="mt-11 border border-gray-300/60   px-4 py-2 rounded-sm outline-none ">
//                         <input type="email" name="email" id="1" placeholder="Email address " />
//                     </div>

//                     <div className="mt-5 border px-4 py-2 rounded-sm outline-none ">
//                         <input type="password" name="passowrd" id="1" placeholder="Password " />
//                     </div>
//                     <div className="flex ">
//                         <input
//                             type="checkbox"
//                             name="checkbox"
//                             id="checkbox"
//                             aria-label="Keep me signed in"
//                             className="w-6 h-6 mt-5 appearance-none bg-white border border-gray-300/60 rounded checked:bg-black checked:focus:ring-2 checked:focus:ring-white checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
//                         />

//                         <p className="mt-5 ml-3  text-sm text-zinc-500/70">Keep me signed in</p>
//                         <p className="mt-5 ml-16 text-sm text-zinc-300">Forgotten your password?</p>
//                     </div>


//                     <div className="flex justify-center mt-9 text-center text-zinc-500/70">
//                         <p>
//                             By Logging in, you agree to {'Nike\u0027s'} <span className="underline underline-offset-2">Privacy Policy</span> and <span className="underline underline-offset-2">Terms of Use</span>
//                         </p>
//                     </div>
//                     <div className="bg-zinc-800 text-center  mt-6">
//                         {/* <button className=" text-white/90 py-3 rounded-lg font-extralight text-sm"> */}
//                         {/* SIGN IN */}
                        
//                         {/* </button> */}
//                         <SignedOut>
//                             <SignInButton />
//                         </SignedOut>
//                     </div>


//                     <div className="pb-11 flex justify-center p-4 text-zinc-500/70">

//                         <p className="">
//                             Not a Member? <span className="text-zinc-900 underline underline-offset-2"> Join Us.</span>
//                         </p>
//                     </div>


//                 </div>


//             </div>
//         </>
//     )
// }

// export default Sign_In;
