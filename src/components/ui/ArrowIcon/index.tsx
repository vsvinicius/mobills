import { ArrowBackIosNewRounded } from '@mui/icons-material';

import { ArrowIconPosition } from '@lib/enums';

interface ArrowIconProps {
  className?: string;
  position?: ArrowIconPosition;
}

const rotationDegrees = {
  [ArrowIconPosition.DOWN]: '-90',
  [ArrowIconPosition.LEFT]: '0',
  [ArrowIconPosition.RIGHT]: '180',
  [ArrowIconPosition.UP]: '90',
};

export default function ArrowIcon({
  className,
  position = ArrowIconPosition.RIGHT,
}: ArrowIconProps) {
  return (
    <ArrowBackIosNewRounded
      className={className}
      sx={{ transform: `rotate(${rotationDegrees[position]}deg)` }}
    />
  );
}
