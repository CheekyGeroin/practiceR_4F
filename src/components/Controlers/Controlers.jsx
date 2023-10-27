import { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Item, Btn } from './Controlers.styled';

export class Controlers extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <List>
          {options.map(option => (
            <Item key={option}>
              <Btn type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </Btn>
            </Item>
          ))}
        </List>
      </>
    );
  }
}

Controlers.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
