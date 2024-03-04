import { PropsWithChildren, useState } from 'react';

import { MoreVert } from '@mui/icons-material';
import { IconButton, Popover } from '@mui/material';

interface SeeMoreMenuProps {
  className?: string;
}

export default function SeeMoreMenu({
  children,
  className,
}: PropsWithChildren<SeeMoreMenuProps>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <>
      <IconButton className={className} onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        onClose={handleClose}
        open={isOpen}
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
