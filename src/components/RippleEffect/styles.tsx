import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const Container = styled.span`
  width: 100%;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple} 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
`;
