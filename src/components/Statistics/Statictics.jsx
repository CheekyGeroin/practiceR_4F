import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, List, Text } from './Statictics.styled';

export class Statictics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <List>
          <Item>
            <Text>Good: {good}</Text>
          </Item>
          <Item>
            <Text>Neutral: {neutral}</Text>
          </Item>
          <Item>
            <Text>Bad: {bad}</Text>
          </Item>
          <Item>
            <Text>Total:{total}</Text>
          </Item>
          <Item>
            <Text>Positive feedback: {positivePercentage}%</Text>
          </Item>
        </List>
      </>
    );
  }
}

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
