import { useState, useEffect } from "react";
import axios from "axios";

import { logoutHandler } from "../components/Sidebar/Sidebar";
import { getMethod } from "./api-services";
import { toast } from "react-toastify";
export default function KSHFunction(url, depen) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const AlertToast = (msg) => msg;
  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const response = await axios.request(getMethod(url));
        if (response.data.success) {
          setData(response.data.data);

          setLoading(true);
          return;
        }
        if (!response.data.success) {
          AlertToast(toast.error(response.data.message));
          setLoading(true);
          return;
        }
      } catch (error) {
        AlertToast(toast.error(error.response.data.message));
        setLoading(true);
        if (
          error.response.status === 401 ||
          error.response.data.message === "Unauthenticated."
        ) {
          logoutHandler();
        }
        //  setError(err.response.data.errors);
      }
    })();

    return () => {
      setData([]);
    };
  }, [url, ...depen]);

  return { data, loading };
}
