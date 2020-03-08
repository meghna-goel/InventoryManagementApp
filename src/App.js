import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store"
import Routes from "./routes/routes"
import { LOGIN, WELCOME } from './routes/constant';

const PrivateRoute = ({ component: Component, isProtected, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isProtected === true && localStorage.getItem("access_token") ? (
          <>
            <Component {...props} />
          </>
        ) : (
            <Redirect to={LOGIN} />
          );
      }}
    />
  );
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            {Routes.map((route, i) => {
              if (route.isProtected === true)
                return <PrivateRoute key={i} {...route} />
              else
                return <Route key={i} {...route} />
            })}
            ?<Redirect exact from={WELCOME} to={LOGIN} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
 
};

export default connect(mapStateToProps)(App);