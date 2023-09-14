import { createGlobalStyle, keyframes } from 'styled-components';

const ripple = keyframes`
  to {
    transform: scale(4);
  }
`;

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
}

button {
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

body,#root {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  min-height: 100vh;
  font-family: 'Maven Pro', sans-serif;
  letter-spacing: 1px;
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
  animation: ${ripple} 1.1s linear forwards;
  background-color: rgba(255, 255, 255, 0.3);
}
`;
