import { MoreVert } from '@mui/icons-material';
import { IconButton, Popover } from '@mui/material';
import { PropsWithChildren, useState } from 'react';

interface SeeMoreMenuProps {
  className?: string;
}

export default function SeeMoreMenu({
  children,
  className,
}: PropsWithChildren<SeeMoreMenuProps>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <>
      <IconButton onClick={handleClick} className={className}>
        <MoreVert />
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            className: 'rounded-3xl',
          },
        }}
      >
        {children}
      </Popover>
    </>
  );
}
