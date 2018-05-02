import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const CouponPage = () => (
    <div>
      <Subheader>Show this coupon to the cashier</Subheader>
      <List>
        <ListItem
          primaryText='Caffe Americano'
          secondaryText={<s>2$</s>}
          leftAvatar={<Avatar src={'images/CaffeAmericano.jpg'} />}
          rightAvatar={<FloatingActionButton mini={true} disabled={true}>1.5$</FloatingActionButton>} />
        <ListItem
          primaryText='Caffe Latte'
          secondaryText={<s>4$</s>}
          leftAvatar={<Avatar src={'images/CaffeLatte.jpg'} />}
          rightAvatar={<FloatingActionButton mini={true} disabled={true}>3$</FloatingActionButton>} />
        <ListItem
          primaryText='Iced Passion Tango Tea Lemonade'
          secondaryText={<s>4$</s>}
          leftAvatar={<Avatar src={'images/IcedPassionTangoTeaLemonade.jpg'} />}
          rightAvatar={<FloatingActionButton mini={true} disabled={true}>3.5$</FloatingActionButton>} />
      </List>
    </div>
)

export default CouponPage;
