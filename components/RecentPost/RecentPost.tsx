import React from "react";
import Link from "next/link";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div className="bg-recentBackground my-[66px] h-[502px] flex items-center justify-evenly">
      <div className="w-[1030px] mx-auto P-6 flex justify-between items-center">
        <h2 className="text-[22px] font-medium ml-[10px] flex">Recent Post</h2>
        <Link
          href={""}
          className={`${heebo.className} text-[22px] font-medium text-mypink`}
        >
          View all
        </Link>
      </div>
      <div className="bg-white w-[483px] h-[356px] ml-[130px] mt-[20px] flex">
        <div className="w-[391px] h-[286px] ml-10 mt-8">
          <h2 className={`${heebo.className} font-bold text-[26px] text-black`}>
            Making a design system from scratch
          </h2>
          <div className="flex items-center justify-between mt-4">
            <p className={`${heebo.className} text-[18px] font-normal`}>
              12 Feb 2020
            </p>
            <p className={`${heebo.className} text-[18px] font-normal`}>|</p>
            <p className={`${heebo.className} text-[18px] mr-20 font-normal`}>
              Design , Pattern
            </p>
          </div>
          <div className={`${heebo.className} text-[16px] mt-6 font-normal`}>
            <p className="flex flex-col items-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="bg-white w-[483px] h-[356px] ml-[130px] mt-[20px] flex justify-between items-center">
          <div className="w-[391px] h-[286px] ml-10 mt-8">
            <h2
              className={`${heebo.className} font-bold text-[26px] text-black`}
            >
              Making a design system from scratch
            </h2>
            <div className="flex items-center justify-between mt-4">
              <p className={`${heebo.className} text-[18px] font-normal`}>
                12 Feb 2020
              </p>
              <p className={`${heebo.className} text-[18px] font-normal`}>|</p>
              <p className={`${heebo.className} text-[18px] mr-20 font-normal`}>
                Design , Pattern
              </p>
            </div>
            <div className={`${heebo.className} text-[16px] mt-6 font-normal`}>
              <p className="flex flex-col items-center">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
