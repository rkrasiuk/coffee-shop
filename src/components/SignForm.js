import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {userAuth} from '../actions/index';

class SignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {error: ''};
  }

  onSubmit(values) {
    this.props.authFunc(values.email, values.password)
      .then((authUser) => {
        if (this.props.signIn)
          this.props.userAuth(authUser);
        this.props.history.push(this.props.redirect);
      })
      .catch(error => this.setState({error: error.message}));
  }

  renderField(field) {
    const {type, hint, input, label, meta: {touched, error}, ...rest} = field;

    return (
      <TextField
        hintText={hint}
        floatingLabelText={label}
        errorText={touched && error}
        type={type}
        {...input}
        {...rest}
      />
    );
  }

  render() {
    const {handleSubmit} = this.props;
    const {palette} = this.props.muiTheme;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>Coffee Account - {this.props.heading}</h2>
        <Field className='formField' name='email' label='Email' component={this.renderField} hint='example@email.com' />
        <Field className='formField' name='password' label='Password' component={this.renderField} hint='password' type='password' />
        <p style={{color: palette.accent1Color}}>
          {this.state.error}
        </p>
        <FlatButton primary label={this.props.label} type='submit' />
        <Link to='/'><FlatButton label='Back' /></Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Enter email';
  }
  if (!values.password) {
    errors.password = 'Enter password';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'SignForm'
})(muiThemeable()(withRouter(connect(null, {userAuth})(SignForm))));
