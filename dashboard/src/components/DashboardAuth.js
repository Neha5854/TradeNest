import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const DashboardAuth = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token) {
      window.location.href = "http://localhost:3000/login";
      return;
    }

    axios
      .post("http://localhost:3002/auth", {}, { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  return children;
};

export default DashboardAuth;
