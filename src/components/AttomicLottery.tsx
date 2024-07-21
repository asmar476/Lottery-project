"use client";

import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Card from "@/app/common/card";
import useFetchLottery from "../hooks/useFetchLottery";

const AtomicLottery = ({ lotteryType }: { lotteryType: string }) => {
  const { data, error, loading } = useFetchLottery(lotteryType);

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
        bgColor="bg-atomic-lottery"
        textColor="text-atomicColor"
        circleColor="bg-atomicColor"
      />
    </>
    // </Layout>
  );
};

export default AtomicLottery;
