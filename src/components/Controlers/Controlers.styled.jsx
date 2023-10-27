import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Btn = styled.button`
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding: 4px 10px;
  cursor: pointer;
  :active {
    box-shadow: 2px 2px 2px 2px #4d4e4f;
  }
`;
