import { Container } from './styles';
export default function RippleEffect() {
  function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
    console.debug('oi');
    const element = event.currentTarget;
    // element.classList.add('ripple-container');
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
    circle.classList.add('ripple-span');

    const ripple = element.getElementsByClassName('ripple-span')[0];

    if (ripple) {
      ripple.remove();
    }

    element.appendChild(circle);
  }
  return (
    <Container onClick={createRipple} />
  );
}
