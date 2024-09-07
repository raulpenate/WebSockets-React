import { useEffect, useState } from "react";
import { getUserStorage } from "../helpers/getUsuariosStorage";
import { useNavigate } from "react-router-dom";

export const useShowDesktop = () => {
  const navigate = useNavigate();
  const [user] = useState(getUserStorage());

  useEffect(() => {
    if (user.agent && user.desktop) {
      navigate("/desktop");
    } else {
      navigate("/login");
    }
  }, [navigate, user]);
};
