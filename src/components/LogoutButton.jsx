import React from "react";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      sx={{
        marginLeft: 4,
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;