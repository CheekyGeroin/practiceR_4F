import { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notifications.styled';

export class Notifications extends Component {
  render() {
    return <Text>{this.props.message}</Text>;
  }
}

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
