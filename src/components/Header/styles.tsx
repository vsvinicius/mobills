import styled from 'styled-components';

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.gray[900]};
  position: fixed;
  top:0;
  left:0;
  z-index: 1;
  height: 100%;
  width: 100px;
`;

export const Logo = styled.img`
  display: block;
  margin:0 auto;
`;
