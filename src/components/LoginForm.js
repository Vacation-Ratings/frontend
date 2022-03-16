import { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
    super(props);
    this.state = { user: '' };
    }

  render() {
    return (
        <>
        <input onChange={(e) => this.setState({ user: e.target.value })} type="text" placeholder="email@domain.com"/>
        <button onClick={() => this.props.loginHandler(this.state.user)}>Login</button>
      </>
    );
  }
};

export default LoginForm;
