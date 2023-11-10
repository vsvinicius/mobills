import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Container = styled.nav<{ $isExpanded?: boolean; }>`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding-top:1.5rem;
  border-right: 1px solid rgba(255,255,255,0.07);
  transition: min-width 0.3s;
  min-width: 5.7rem;
  max-width: 5.7rem;

  ${({ $isExpanded }) => $isExpanded && css`
    min-width: 16rem;

    button img {
      transform: rotateY(0.5turn);
    }
  `}
`;

export const Logo = styled.img<{ $shouldHide?: boolean; }>`
  display: block;
  margin: 0 auto;
  padding-bottom:0.5rem;
  width: 2.2rem;
  opacity: ${({ $shouldHide }) => $shouldHide ? 0 : 1};
  animation: ${fadeIn} 0.3s;
  
  ${({ $shouldHide }) => $shouldHide && css`
    animation: ${fadeOut} 0.3s forwards;
    display: none;
  `}
`;

export const ExpandedLogo = styled.img<{ $shouldHide?: boolean; }>`
  display: block;
  margin-left:1.5rem;
  width: 8.5rem;
  animation: ${fadeIn} 0.3s;
  
  ${({ $shouldHide }) => $shouldHide && css`
    animation: ${fadeOut} 0.3s forwards;
    display: none;
  `}
`;

export const ExpandButton = styled.button<{ $isExpanded?: boolean; }>`
  border-radius: 100%;
  position: absolute;
  top:6rem;
  left:${({ $isExpanded }) => $isExpanded ? '15.25rem' : '5rem'};
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  padding:3px;
  border:none;
  cursor: pointer;
  transition: left 0.3s ease;

  img {
    width: 1.125rem;
    transition: transform 0.3s ease-out;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  margin-top:1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconContainer = styled.li<{
  $color?: string; $isActive: boolean, $isExpanded: boolean
}>`
  display: flex;
  height: 100%;
  width: calc(100% - 4px);
  border-left: 4px solid transparent;
  transition: all 0.3s ease-in-out;
  list-style-type: none;

  ${({ $isActive, $color, theme }) => $isActive && css`
      border-color: ${$color || theme.colors.primary.main};
      
      svg {
        stroke:${$color || theme.colors.primary.main};
        fill:${$color || theme.colors.primary.main};
      }

      a span {
        color: ${$color || theme.colors.primary.main} !important;
      }
  `}



  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  a {
    display: flex;
    width: 100%;
    text-decoration:none;
    align-items: center;
    padding: 1rem 0;

    svg {
      width: ${({ $isExpanded }) => $isExpanded ? '25%' : '40%'};
      align-self: center;
      padding-left: 1.5rem;
    }

    span {
      width: 70%;
      overflow: hidden;
      visibility: hidden;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.fontColor};
      opacity: 0.7;
      visibility: ${({ $isExpanded }) => $isExpanded ? 'visible' : 'hidden'};
    }
  }
`;
