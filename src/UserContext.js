import React from "react";

const { Provider, Consumer } = React.createContext();

class UserProvider extends React.Component {
  state = { currentUser: null };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          onLogout: this.handleLogout,
          onLogin: this.handleLogin
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
