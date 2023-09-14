import { createGlobalStyle, keyframes } from 'styled-components';

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export default createGlobalStyle`

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      font-family: 'Maven Pro', sans-serif;
      font-family: 'Open Sans', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
}
body,#root {
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  min-height: 100vh;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
.ripple-container{
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
