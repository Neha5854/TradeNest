
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Logout = () => {
  const [, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    removeCookie("token", { path: "/" });
    window.location.href = "/";
  }, [removeCookie]);

  return <div>Logging out...</div>;
};

export default Logout;
