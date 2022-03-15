import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from './LogoutButton'
import { Card } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, signIn } = useAuth0();

  if (signIn) {
    return <div>Signing in user</div>;
  }

  return (
    isAuthenticated ? (
      <Card style={{ width: '6rem' }}>
        <Card.Img src={user.picture} alt={user.name} />
       
        
        <LogoutButton /> 
      </Card>
    ) : null
  );
};

export default Profile;