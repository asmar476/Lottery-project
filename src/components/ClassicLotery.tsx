"use client";

import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Card from "@/app/common/card";
import useFetchLottery from "../hooks/useFetchLottery";

const ClassicLottery = ({ lotteryType }: { lotteryType: string }) => {
  const { data, error, loading } = useFetchLottery(lotteryType);
  console.log("classic lottery", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    // <Layout>
    <>
      <Card
        title={data?.data?.lotteryName}
        roundNumber={data?.data?.roundNumber}
        previousWinningticket={data?.data?.previousWinningticket}
        nextDraw={data?.data?.nextDraw}
        bgColor="bg-classic-lottery"
        textColor="text-classicColor"
        circleColor="bg-classicColor"
      />
    </>
    // </Layout>
  );
};

export default ClassicLottery;
