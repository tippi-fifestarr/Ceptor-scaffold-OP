"use client";

// import { useState } from "react";
import Image from "next/image";
import QuizNavigator from "../../components/QuizNavigator";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Quiz: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  // const buttonPosition = { bottom: 16, right: 16 };

  return (
    <div className="relative">
      <div className="fixed top-0 h-screen w-screen z-0">
        <Image
          src="/QuizBackground.png"
          width={1000}
          height={1000}
          alt="midPage"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center flex-col flex-grow pt-10 relative z-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Games-Scaffold 🏗🔴 </span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div className="w-full flex flex-wrap justify-around items-center p-5 mt-0">
            <QuizNavigator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
