import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex mt-24 items-center flex-col text-wrap gap-4">
      <h2 className="text-6xl  font-bold text-primary p-2 text-center">Ai Logo Maker</h2>
      <h2 className="text-2xl  font-bold text-center">
        Generate Perfect logos for your Business , Apps and Websites.
      </h2>
      <h2 className="text-lg text-slate-500 text-center">
        Craft unique and professional logos effortlessly with our AI-powered
        tool.Perfect for Apps , Business and Website !
      </h2>
      <div className="flex gap-1 mt-10 max-w-2xl ">
        <input
          type="text"
          name="title"
          id="logo-title"
          placeholder="Enter your logo name"
          className="px-6 border shadow-md w-full rounded-lg"
        />
        <Button className="">Create</Button>
      </div>
    </div>
  );
};

export default Hero;
