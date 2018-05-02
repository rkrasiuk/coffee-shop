import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Tabs, Tab} from 'material-ui/Tabs';
import HomeIcon from 'material-ui/svg-icons/action/home';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CouponIcon from 'material-ui/svg-icons/notification/confirmation-number';

import AboutPage from './AboutPage';
import MenuList from './MenuList';
import CouponPage from './CouponPage';
import {selectTab} from '../actions/index';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.tab };
  }

  handleChange = (value) => {
    this.props.selectTab(value);
  }

  render() {
    return(
      <Tabs value={this.props.tab}
        onChange={this.handleChange}>
        <Tab
          icon={<HomeIcon />}
          label='About'
          value='about'>
            <AboutPage />
        </Tab>
        <Tab
          icon={<MenuIcon />}
          label='Menu'
          value='menu'>
            <MenuList />
        </Tab>
        <Tab
          icon={<CouponIcon />}
          label='Coupons'
          value='coupon'>
            <CouponPage />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tabSelected
  };
}

export default connect(mapStateToProps, {selectTab})(Navigation);
