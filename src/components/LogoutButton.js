import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";
import Button from "react-bootstrap/Button";

class LogoutButton extends Component {
  render() {
    return (
      <Button variant='Sucessfully Signed In' onClick={this.props.auth0.logout}>
        Log Out
      </Button>
    );
  }
}

export default withAuth0(LogoutButton);