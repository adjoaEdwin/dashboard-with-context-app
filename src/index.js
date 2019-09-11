import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
import { UserProvider, UserConsumer } from "./UserContext";

import "./styles.css";

class App extends React.Component {
  render() {
    // const { currentUser } = this.state;
    return (
      <UserProvider>
        <UserConsumer>
          {({ user }) =>
            user ? (
              <MainPage />
            ) : (
              <div className="ui container">
                <LoginForm onLogin={this.handleLogin} />
              </div>
            )
          }
        </UserConsumer>
      </UserProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
