import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AppLayout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // navigate("/maintenance", { replace: true }); // tulis code untuk maintenace jika maintenance
  }, []);

  useEffect(() => {
    if (props.needAuthenticated && !localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
  }, [props.needAuthenticated, navigate]);

  if (props.needAuthenticated && !localStorage.getItem("token")) {
    return null;
  }

  return props.children;
}
