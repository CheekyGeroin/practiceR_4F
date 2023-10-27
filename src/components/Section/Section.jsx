import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </Container>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
