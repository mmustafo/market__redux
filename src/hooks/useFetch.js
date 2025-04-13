import { useState, useEffect } from "react";
import { axiosInstance } from "../utils";

export function useFatch(url) {
  const [data, setData] = useState(null);
  const [error, seError] = useState(false);
  const [ispanding, setIspanding] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIspanding(true);
      try {
        const req = await axiosInstance(url);
        setData(req);
      } catch (error) {
        console.log(error);
      }finally{
          setIspanding(false)
      }
    };
    fetchData()
  }),[url];
}
