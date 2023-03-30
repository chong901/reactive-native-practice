import { RAPID_API_KEY } from "@env";
import axios from "axios";
import { useEffect, useState } from "react";

const rapidApiKey = RAPID_API_KEY;
export const useFetch = <T>(path: string, params: Record<string, unknown>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${path}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params,
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request<T>(options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};
