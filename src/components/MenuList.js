import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
    orderItems.forEach((val) => numOrder += this.props.order[val]);

    this.state = { order: this.props.order, numOrder: numOrder };
  }

  handleContentAdd = (value) => {
    const {order, numOrder} = this.state;
    let newOrder =  {...order};
    newOrder[value] = (order[value] ? order[value] + 1 : 1);
    console.log(newOrder);
    this.setState({ order: newOrder, numOrder: numOrder + 1 });
    this.props.passOrder(newOrder);
  }

  render() {
    const {order} = this.state;
    const coffeeTypes = Object.keys(COFFEE_TYPES);
    console.log(COFFEE_TYPES);
    return (
      <List>
        <Subheader>Menu</Subheader>
        {coffeeTypes.map((category, idx) => { return (
          <ListItem
            key={idx}
            primaryText={category}
            primaryTogglesNestedList={true}
            nestedItems={COFFEE_TYPES[category].map((type, i) => { return (
              <MenuListItem
                key={i}
                primaryText={type}
                secondaryText={COFFEE_PRICES[category][i]}
                quantity={order[type] ? order[type] : 0}
                onClick={this.handleContentAdd}
                button={true} />
            )})}/>
        )})}
        {/*<ListItem primaryText='Espresso Beverages'
          primaryTogglesNestedList={true}
          nestedItems={[
            <MenuListItem key={1} text='Caffe Americano' onClick={this.handleContentAdd} button={true} />,
            <MenuListItem key={2} text='Caffe Latte' onClick={this.handleContentAdd} button={true} />,
            <MenuListItem key={3} text='Cappuccino' onClick={this.handleContentAdd} button={true} />,
            <MenuListItem key={4} text='Flat White' onClick={this.handleContentAdd} button={true} />
          ]}
        />
        <ListItem primaryText='Cold Brew and Iced Coffee'
          primaryTogglesNestedList={true}
          nestedItems={[
            <MenuListItem key={1} text='Iced Coffee' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={2} text='Cascara Cold Brew' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={3} text='Narino 70 Cold Brew' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={4} text='Vanilla Sweet Cold Brew' onClick={this.handleContentAdd} button={true}/>
          ]}
        />
        <ListItem primaryText='Iced Tea'
          primaryTogglesNestedList={true}
          nestedItems={[
            <MenuListItem key={1} text='Shaken Sweet Tea' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={2} text='Shaken Iced Black Tea' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={3} text='Iced Passion Tango Tea Lemonade' onClick={this.handleContentAdd} button={true}/>,
            <MenuListItem key={4} text='Iced Pina Colada Tea Infusion' onClick={this.handleContentAdd} button={true}/>
          ]}
        />*/}
        <ListItem disabled={true}>
          <Link to='order' onClick={e => {
            if(this.state.numOrder === 0)
              e.preventDefault()
            }}>
            <RaisedButton
              label={`Order ${this.state.numOrder === 0 ? '' : `(${this.state.numOrder})` } `}
              primary={true} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ passOrder: passOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
