import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import MenuListItem from './MenuListItem';
import {passOrder} from '../actions/';
import {COFFEE_TYPES, COFFEE_PRICES} from '../constants/coffee';

class MenuList extends Component {
  constructor(props) {
    super(props);

    let numOrder = 0;
    const orderItems = Object.keys(this.props.order);
    orderItems.forEach(val => numOrder += this.props.order[val]);

    this.state = {order: this.props.order, numOrder};
  }

  handleContentAdd = (value) => {
    const {order, numOrder} = this.state;
    let newOrder =  {...order};
    newOrder[value] = (order[value] ? order[value] + 1 : 1);
    this.setState({ order: newOrder, numOrder: numOrder + 1 });
    this.props.passOrder(newOrder);
  }

  render() {
    const {order} = this.state;
    const coffeeTypes = Object.keys(COFFEE_TYPES);
    return (
      <List>
        <Subheader>Menu</Subheader>
        {coffeeTypes.map((category, idx) => (
          <ListItem
            key={idx}
            primaryText={category}
            primaryTogglesNestedList
            nestedItems={COFFEE_TYPES[category].map((type, i) => (
              <MenuListItem
                key={i}
                primaryText={type}
                secondaryText={COFFEE_PRICES[category][i]}
                quantity={order[type] ? order[type] : 0}
                onClick={this.handleContentAdd}
                button />
            ))} />
        ))}
        <ListItem disabled>
          <Link
            to='order'
            onClick={(e) => {
              if (this.state.numOrder === 0)
                e.preventDefault();
            }}>
            <RaisedButton
              label={`Order ${this.state.numOrder === 0 ? '' : `(${this.state.numOrder})`} `}
              primary />
          </Link>
        </ListItem>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

export default connect(mapStateToProps, {passOrder})(MenuList);
