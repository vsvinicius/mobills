import styled from 'styled-components';

export const ButtonComponent = styled.button`
  background-color: ${({theme}) => theme.colors.primary.light};
  color: ${({theme}) => theme.colors.fontColor};
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

  &:hover {
    background-color: ${({theme}) => theme.colors.primary.dark};
  }

`;
