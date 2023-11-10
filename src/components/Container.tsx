import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 25px;
  padding:10px;
`;
