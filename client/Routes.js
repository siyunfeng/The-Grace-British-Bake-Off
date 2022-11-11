import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import { me } from './store';
import AdminPage from './components/AdminPage';
import AllUsers from './components/AllUsers';
import AdminAllProducts from './components/AdminAllProducts';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, userType } = this.props;
    return (
      <div>
        {isLoggedIn && userType === 'CUSTOMER' ? (
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route exact path="/shop" component={AllProducts} />
            <Route path="/shop/products/:productId" component={SingleProduct} />
            <Route exact path="/cart/:orderId" component={Cart} />
            <Redirect to="/home" />
          </Switch>
        ) : isLoggedIn && userType === 'ADMIN' ? (
          <Switch>
            <Route exact path="/manage" component={AdminPage} />
            <Route exact path="/manage/users" component={AllUsers} />
            <Route path="/manage/products" component={AdminAllProducts} />
            <Redirect to="/manage" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={AllProducts} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/shop" component={AllProducts} />
            <Route path="/shop/products/:productId" component={SingleProduct} />
            <Route exact path="/cart/:orderId" component={Cart} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    userType: state.auth.userType,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
