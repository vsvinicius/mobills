import { MoreVert } from '@mui/icons-material';
import {
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Typography,
} from '@mui/material';
import bankIcon from '@assets/images/c6-bank.png';
import { useState } from 'react';
export default function AccountItem() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Paper className="h-60 w-[48.95%] grid-rows-5 rounded-3xl p-4 font-bold">
      <Box className="flex justify-between">
        <header className="flex items-end gap-2">
          <img
            src={bankIcon}
            alt="bank logo"
            style={{ width: '2rem', borderRadius: '50%' }}
          />
          <Typography variant="h6" className="font-bold opacity-70">
            Bank name
          </Typography>
        </header>
        <IconButton onClick={handleClick}>
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
          <MenuList>
            <MenuItem>Editar</MenuItem>
            <MenuItem>Arquivar</MenuItem>
            <MenuItem>Transações</MenuItem>
            <MenuItem>Reajuste de saldo</MenuItem>
          </MenuList>
        </Popover>
      </Box>
    </Paper>
  );
}
