import { useState } from 'react';

import { Box } from '@mui/material';

import { cn } from '@lib/classnames';

enum DirectionButton {
  LEFT = 'left',
  RIGHT = 'right',
}

interface SwitchButtonProps {
  buttonNames: [string, string];
  className?: string;
  onChangeButton: (position: DirectionButton) => void;
}

export default function SwitchButton({
  buttonNames,
  className = '',
  onChangeButton,
}: SwitchButtonProps) {
  const [firstButton, secondButton] = buttonNames;
  const [selectedButton, setSelectedButton] = useState<DirectionButton>(
    DirectionButton.LEFT,
  );

  function handleChangeSelectedButton(newPosition: DirectionButton) {
    setSelectedButton(newPosition);
    onChangeButton(newPosition);
  }

  return (
    <div
      className={cn(
        'relative flex w-80 cursor-pointer select-none justify-between overflow-hidden rounded-full bg-paper px-5',
        className,
      )}
    >
      <Box className="flex h-full w-full items-center justify-between rounded">
        <Box
          className={cn('z-10 font-semibold opacity-70', {
            'opacity-100': selectedButton === DirectionButton.LEFT,
          })}
          onClick={() => handleChangeSelectedButton(DirectionButton.LEFT)}
        >
          {firstButton}
        </Box>
        <Box
          className={cn('z-10 font-semibold opacity-70', {
            'opacity-100': selectedButton === DirectionButton.RIGHT,
          })}
          onClick={() => handleChangeSelectedButton(DirectionButton.RIGHT)}
        >
          {secondButton}
        </Box>
      </Box>
      <div
        className={cn(
          'absolute left-0 top-0 float-left block h-full w-1/2 rounded-full bg-success transition-all',
          {
            'translate-x-full': selectedButton === DirectionButton.RIGHT,
          },
        )}
      />
    </div>
  );
}
