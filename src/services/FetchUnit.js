import { useState, useEffect } from "react";
import axios from "axios";

import { logoutHandler } from "../components/Sidebar/Sidebar";
import { getMethod } from "./api-services";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../features/UserInfo";
export default function FetchUnit(url, depen) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState([]);
  const AlertToast = (msg) => msg;
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request(getMethod(url));
        if (response.data.status === "success") {
          setData(response.data.data);
          setPagination(response.data);
          dispatch(getUserInfo(response.data.data));

          return;
        }
        if (response.data.status === "error") {
          AlertToast(toast.error(response.data.message));
        }
      } catch (error) {
        AlertToast(toast.error(error.response.data.message));

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

  return { data, pagination };
}
