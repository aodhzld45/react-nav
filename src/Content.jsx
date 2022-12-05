//import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
//import React, { useState, useEffect } from 'react';

//다국어 처리 import
//import { IntlProvider } from "react-intl";
//import IntlPage from "./components/Login/intlage";

//인증 관련 import
//import { signIn } from "./auth/auth";
//import AuthRoute from "./auth/AuthRoute";

//국가별 jsonData
//import enUsMsg from "./lang/en-US.json";
//import koMsg from "./lang/ko.json";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  width: 100%;
  min-height: 200px;
  background: #fffffe;
  color: #0f0e17;
  border-radius: 8px;
  text-align: center;
`;

function Content() {

  //const [user, setUser] = useState(null);
  //const authenticated = user != null;

  //다국어 지원용 locale 선언
  //const locale = localStorage.getItem("locale") ?? "ko";
 // const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

 // const login = ({ username, password }) => setUser(signIn({username, password}));

  return (
    <Main>
      <h1>{window.location.pathname}</h1>
{/*
      <Switch>
        <Route
          path="/login"
          render={props => (

            <IntlProvider locale={locale} messages={messages}>
              <IntlPage authenticated={authenticated} login={login} {...props} />
            </IntlProvider>
          )}
        >
        </Route>
      </Switch>

  */}
    </Main>

  );
}

export default Content;
