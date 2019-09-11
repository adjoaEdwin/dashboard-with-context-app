import React from "react";
import { css } from "emotion";
import axios from "axios";
import { UserConsumer } from "./UserContext";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    error: {
      email: "An email is required",
      password: "A password is required"
    }
  };

  handleFormSubmit = (e, onLogin) => {
    e.preventDefault();

    this.setState({ loading: true });

    axios
      .post("http://localhost:4500/signin", {
        email: this.state.email,
        password: this.state.password
      })
      .then(result => {
        this.setState({ loading: false });
        onLogin(result.data.user);
      })
      .catch(e => console.error(e));
  };

  render() {
    const { loading, email, error, password } = this.state;
    return (
      <UserConsumer>
        {({ onLogin }) => (
          <div
            className={css`
              margin-top: 50px;
            `}
          >
            <div className="ui raised fluid card">
              <div className="ui content">
                <form
                  className="ui big form"
                  onSubmit={e => this.handleFormSubmit(e, onLogin)}
                >
                  <div className="field">
                    <label>Email</label>
                    <div
                      className={css`
                        margin-bottom: 10px;
                      `}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    {!email ? (
                      <div className="ui red message">{error.email}</div>
                    ) : null}
                  </div>

                  <div
                    className={css`
                      margin-bottom: 30px;
                    `}
                  />

                  <div className="field">
                    <label>Password</label>
                    <div
                      className={css`
                        margin-bottom: 10px;
                      `}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />

                    {!password ? (
                      <div className="ui red message">{error.password}</div>
                    ) : null}
                  </div>

                  <div
                    className={css`
                      margin-bottom: 30px;
                    `}
                  />
                  <button
                    className="ui fluid primary big button"
                    type="submit"
                    disabled={loading}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default Login;
