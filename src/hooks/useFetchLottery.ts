import { useState, useEffect } from 'react';

const useFetchLottery = (lotteryType: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${lotteryType}`
        );
        const result = await response.json();
        console.log("result", result);
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lotteryType]);

  return { data, error, loading };
};

export default useFetchLottery;
