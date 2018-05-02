import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import {passOrder, selectTab} from '../actions/index';
import * as routes from '../constants/routes';

class WaitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {completed: 0};
  }

  componentWillMount() {
    if (!this.props.userAuth)
      this.props.history.push('/');
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div>
        <br />
        <LinearProgress mode="determinate" value={this.state.completed} />
        <br />
        <Link to={routes.MAIN}>
          <RaisedButton
            label='Back to Home'
            primary
            onClick={() => {
              this.props.passOrder({});
              this.props.selectTab('about');
            }} />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userAuth: state.userAuth
  };
}

export default connect(mapStateToProps, {passOrder, selectTab})(WaitPage);
