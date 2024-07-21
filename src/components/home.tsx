"use client";

import Layout from "./Layout";
import CosmicLottery from "./CosmicLottery";
import ClassicLottery from "./ClassicLotery";
import AtomicLottery from "./AttomicLottery";

const HomePage: React.FC = () => {
  return (
    // <Layout>
    <>
      <div className="flex ml-80 font-bold">
        {" "}
        <h1 className="">Latest Results</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4 h-fixed">
        <CosmicLottery lotteryType="COSMIC" />
        <ClassicLottery lotteryType="CLASSIC" />
        <AtomicLottery lotteryType="ATOMIC" />
      </div>
    </>
    // </Layout>
  );
};

export default HomePage;
