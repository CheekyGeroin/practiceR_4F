import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;
