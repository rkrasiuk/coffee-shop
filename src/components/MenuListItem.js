import React, {Component} from 'react';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

class MenuListItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.primaryText);
  }

  render() {
    const {primaryText, secondaryText, button, quantity} = this.props;
    return (
      <ListItem
        onClick={this.handleClick}
        primaryText={`${primaryText} ${quantity === 0 ? '' : `(${quantity})`}`}
        secondaryText={secondaryText ? `${secondaryText}$` : ''}
        leftAvatar={<Avatar src={`images/${primaryText.split(' ').join('')}.jpg`} />}
        rightAvatar={
          <FloatingActionButton mini={true} secondary={!button}>
            {button ? <ContentAdd /> : <ContentRemove />}
          </FloatingActionButton>
        } />
    );
  }
}



export default MenuListItem;
