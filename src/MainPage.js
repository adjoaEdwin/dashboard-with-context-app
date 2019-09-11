import React, { Fragment } from "react";
import Header from "./Header";
import { UserConsumer } from "./UserContext";

const MainPage = () => {
  return (
    <UserConsumer>
      {() => (
        <Fragment>
          <Header />
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default MainPage;
