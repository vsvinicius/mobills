import { RippleEffectButton } from './styles';
import RippleEffect from '../RippleEffect';

export default function Button({ children }: { children: JSX.Element; }) {
  function handleClick() {
    console.debug('ola ola');
  }
  return (
    <RippleEffectButton
      onClick={handleClick}
    >
      {children}
      <RippleEffect />
    </RippleEffectButton>
  );
}
