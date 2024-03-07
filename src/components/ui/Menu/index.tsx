import { PropsWithChildren, useState } from 'react';

import { Box, Button, Popover } from '@mui/material';

import { cn } from '@lib/classnames';

interface MenuProps {
  buttonClassName?: string;
  buttonLabel: React.ReactNode;
  menuClassName?: string;
}

export default function Menu({
  buttonClassName,
  buttonLabel,
  children,
  menuClassName,
}: PropsWithChildren<MenuProps>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  return (
    <>
      <Button
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-expanded={isOpen ? 'true' : undefined}
        aria-haspopup="true"
        className={cn(
          'flex w-44 rounded-full border-white-light lowercase text-white hover:border-white-light hover:bg-white-light',
          buttonClassName,
        )}
        onClick={handleClick}
        variant="outlined"
      >
        {buttonLabel}
      </Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        className={menuClassName}
        onClose={handleClose}
        open={isOpen}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              border: 'none',
              borderRadius: '1.5rem',
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Box onClick={handleClose}>{children}</Box>
      </Popover>
    </>
  );
}
