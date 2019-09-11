import React, { Fragment } from "react";
import { css } from "emotion";
import { UserConsumer } from "./UserContext";

const Header = () => {
  return (
    <UserConsumer>
      {({ user, onLogout }) => (
        <Fragment>
          <div className="ui purple huge inverted segment">
            <div className="ui purple secondary inverted menu">
              <button className="ui button">My dashboard</button>
              <div className="right menu">
                <div className="item">
                  <img
                    alt="avatar"
                    className="ui mini circular image"
                    src="http://placecorgi.com/100"
                  />
                  <div
                    className={css`
                      margin: 20;
                    `}
                  />
                  <div className="content">
                    <div className="ui sub header">Hello</div>
                    {user.firstName}
                  </div>
                </div>
                <button className="ui button" onClick={onLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default Header;
