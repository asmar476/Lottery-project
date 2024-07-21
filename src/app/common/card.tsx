import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import Link from "next/link";
const list = [
  {
    img: "/images/img1.png",
    text: "555554 INAE",
  },
  {
    img: "/images/img1.png",
    text: "555554 INAE",
  },
  {
    img: "/images/img1.png",
    text: "555554 INAE",
  },
  {
    img: "/images/img1.png",
    text: "555554 INAE",
  },
  {
    img: "/images/img1.png",
    text: "555554 INAE",
  },
];
const Card = ({
  title,
  bgColor,
  textColor,
  roundNumber,
  previousWinningticket,
  circleColor,
  winningPot,
  nextDraw,
}: any) => {
  console.log("previousWinningticket", previousWinningticket);
  return (
    <div className={`${bgColor} rounded-lg h-fixed max-w-sm`}>
      <div
        className={`${textColor} rounded-lg p-4 max-w-sm flex items-center justify-between`}
      >
        <div className="flex items-center">
          <span className="font-bold mr-4">{title}</span>
          {title !== "CLASSIC" ? (
            <>
              <span className="mr-1">No.</span>
              <span>{roundNumber}</span>
            </>
          ) : (
            "Past 5 Results"
          )}
        </div>
        <span className="ml-10">
          {" "}
          {title === "CLASSIC" ? <FaSearchMinus /> : <FaSearchPlus />}
        </span>
      </div>
      <div className="flex space-x-2  p-4">
        {title !== "CLASSIC" ? (
          <>
            {previousWinningticket?.map((pre: any, index: number) => (
              <div
                key={index}
                className={`${circleColor} flex items-center justify-center w-10 h-10 rounded-full text-white `}
              >
                <span>{pre}</span>
              </div>
            ))}
          </>
        ) : (
          <div className="mx-auto">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex space-x-6">
                <span>231223</span>
                <span className={`${textColor}`}>333333</span>
                <span>555554</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`rounded-lg  max-w-sm flex items-center justify-between  p-2`}
      >
        {title !== "CLASSIC" ? (
          <div className="flex items-center">
            <span className=" mr-4 text-sm">Winning pot</span>
            <span className="ml-4 font-bold">
              {winningPot ? winningPot : "000000000"}
            </span>
            <span className="ml-4 text-sm">LUCKI</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`${circleColor} h-[40px] text-white`}>
        <div className="flex items-center p-2">
          <span className="mr-4 text-sm">Next Draw</span>
          <span>
            <LuClock9 className="text-2xl" />
          </span>
          <span className="ml-4 text-sm">{nextDraw}:00</span>
          <Link href="/login">
            <button
              className={`${textColor} bg-white rounded-md w-[80px] ml-9`}
            >
              Play
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center p-2">
        {title !== "ATOMIC" && (
          <>
            {" "}
            <TiArrowSortedDown className="text-2xl" />
            <p className="">Current Pool Status</p>
          </>
        )}
      </div>
      <div className="mx-auto p-2">
        {title === "ATOMIC" && (
          <>
            {list?.map((li, index) => (
              <div key={index} className="flex justify-between p-2">
                <img className="h-8 w-8" src={li?.img} alt="" />
                <span className=" mt-2">{li?.text}</span>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex items-center justify-center p-2">
        {title === "ATOMIC" && (
          <>
            {" "}
            <TiArrowSortedUp className="text-2xl" />
            <p className="">Close</p>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Card;
