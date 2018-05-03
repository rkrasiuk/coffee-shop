import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MenuListItem from './MenuListItem';
import {passOrder} from '../actions';
import * as routes from '../constants/routes';

class OrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {order: this.props.order};
  }

  componentWillMount() {
    if (!this.props.userAuth)
      this.props.history.push('/');
  }

  handleContentRemove = (value) => {
    const {order} = this.state;
    let newOrder = {...order};
    newOrder[value] = order[value] - 1;
    if (newOrder[value] === 0) delete newOrder[value];
    this.setState({order: newOrder});
    this.props.passOrder(newOrder);
  }

  render() {
    const orderItems = Object.keys(this.state.order);
    return (
      <div>
        <Subheader>Your order</Subheader>
        <List>
          {orderItems.map((item, i) => (
            <MenuListItem
              key={i}
              primaryText={item}
              quantity={this.state.order[item]}
              onClick={this.handleContentRemove}
              button={false} />
          ))}
        </List>
        <Link to={routes.WAIT}>
          <RaisedButton label='Submit' primary />
        </Link>
        <Link to={routes.MAIN}>
          <FlatButton label='Back' secondary />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order,
    userAuth: state.userAuth
  };
}

export default connect(mapStateToProps, {passOrder})(OrderPage);
