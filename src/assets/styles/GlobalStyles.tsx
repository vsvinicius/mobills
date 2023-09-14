import { createGlobalStyle, keyframes } from 'styled-components';

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
}

body,#root {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  min-height: 100vh;
  font-family: 'Maven Pro', sans-serif;
}

.ripple-container {
  position: relative;
  overflow: hidden;
}
.ripple {
  position: absolute;
  width: 100%;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple} 600ms linear;
  background-color: rgba(255, 255, 255, 0.1);
}
`;
