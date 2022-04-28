import { useState, useEffect } from "react";
import axios from "axios";

import { logoutHandler } from "../components/Sidebar/Sidebar";
import { getMethod } from "./api-services";
import { toast } from "react-toastify";
export default function TableGetFunction(url, depen) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState([]);
  const AlertToast = (msg) => msg;
  useEffect(() => {
    (async () => {
      setLoading(false);
      try {
        const response = await axios.request(getMethod(url));
        if (response.data.status === "success") {
          setData(response.data.data);
          setPagination(response.data);
          setLoading(true);
          return;
        }
        if (response.data.status === "error") {
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
  }, [url, ...depen]);

  return { data, pagination, loading };
}
