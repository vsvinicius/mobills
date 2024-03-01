import { cn } from '@lib/classnames';
import { Box } from '@mui/material';
import { useState } from 'react';

enum DirectionButton {
  LEFT = 'left',
  RIGHT = 'right',
}

interface SwitchButtonProps {
  buttonNames: [string, string];
  onChangeButton: (position: DirectionButton) => void;
  className?: string;
}

export default function SwitchButton({
  buttonNames,
  onChangeButton,
  className = '',
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
        'bg-paper relative flex w-80 cursor-pointer select-none justify-between overflow-hidden rounded-full px-5',
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
          'bg-success absolute left-0 top-0 float-left block h-full w-1/2 rounded-full transition-all',
          {
            'translate-x-full': selectedButton === DirectionButton.RIGHT,
          },
        )}
      />
    </div>
  );
}

// export default function SwitchButton() {
//   const [checked, setChecked] = useState<boolean>(false);

//   return (
//     <label
//       htmlFor="open"
//       className="bg-paper relative flex h-10 w-80 cursor-pointer justify-between overflow-hidden rounded-full px-5"
//     >
//       <input
//         id="open"
//         type="checkbox"
//         className="hidden"
//         onClick={() => setChecked((prevState) => !prevState)}
//       />
//       <Box className="flex h-full w-full items-center justify-between rounded">
//         <Box sx={{ zIndex: 10 }}>Faturas abertas</Box>
//         <Box sx={{ zIndex: 10 }}>Faturas fechadas</Box>
//       </Box>
//       <div
//         className={cn(
//           'bg-success absolute left-0 top-0 float-left block rounded-full px-20 py-5 transition-all',
//           {
//             'translate-x-full': checked,
//           },
//         )}
//       />
//     </label>
//   );
// }
