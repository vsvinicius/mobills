import { createRippleEffect, removeRippleEffect } from '../../lib/rippleEffect';
import { ButtonComponent } from './styles';

export default function Button({ children }: { children: React.ReactNode }) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    createRippleEffect(e);
  }
  return (
    <ButtonComponent onMouseDown={handleClick} onMouseUp={removeRippleEffect}>
      {children}
    </ ButtonComponent>
  );
}
