import { ArrowIconPosition } from '@lib/enums';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

interface ArrowIconProps {
  position?: ArrowIconPosition;
  className?: string;
}

const rotationDegrees = {
  [ArrowIconPosition.UP]: '90',
  [ArrowIconPosition.DOWN]: '-90',
  [ArrowIconPosition.RIGHT]: '180',
  [ArrowIconPosition.LEFT]: '0',
};

export default function ArrowIcon({
  position = ArrowIconPosition.RIGHT,
  className,
}: ArrowIconProps) {
  return (
    <ArrowBackIosNewRounded
      sx={{ transform: `rotate(${rotationDegrees[position]}deg)` }}
      className={className}
    />
  );
}
