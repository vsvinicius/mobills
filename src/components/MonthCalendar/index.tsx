import ArrowIcon from '@components/ArrowIcon';
import { cn } from '@lib/classnames';
import { ArrowIconPosition } from '@lib/enums';
import { Box, Button, IconButton, Popover, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

const MONTHS = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

export default function MonthCalendar() {
  const [selectedMonth, setSelectedMonth] = useState<number>(dayjs().month());
  const [selectedYear, setSelectedYear] = useState<number>(dayjs().year());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  function handleClickMonth(month: number) {
    setSelectedMonth(month);
  }

  function handleClickYear(yearToSum: number) {
    setSelectedYear((prevState) => prevState + yearToSum);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        aria-haspopup="true"
        className="flex w-44 rounded-full border-white-light lowercase text-white hover:border-white-light hover:bg-white-light"
      >
        <span className="w-2/3 pr-2">{dayjs().format('MMMM')}</span>
        <ArrowIcon position={ArrowIconPosition.DOWN} className="w-4" />
      </Button>
      <Popover
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              borderRadius: '1.5rem',
              border: 'none',
            },
          },
        }}
        sx={{
          mt: 2,
        }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Box className="bg-paper flex flex-col overflow-hidden rounded-3xl border-none">
          <Box className="flex items-center justify-between bg-primary p-4">
            <IconButton onClick={() => handleClickYear(-1)}>
              <ArrowIcon position={ArrowIconPosition.LEFT} className="w-6" />
            </IconButton>
            <Typography variant="h6" className="text-center font-bold">
              {selectedYear}
            </Typography>
            <IconButton onClick={() => handleClickYear(1)}>
              <ArrowIcon position={ArrowIconPosition.RIGHT} className="w-6" />
            </IconButton>
          </Box>
          <Box className=" grid grid-cols-4 gap-4 p-4">
            {MONTHS.map((month, index) => (
              <Button
                key={month}
                onClick={() => handleClickMonth(index)}
                className={cn(
                  'rounded-full font-bold text-white hover:bg-white hover:bg-opacity-10',
                  { 'text-primary': selectedMonth === index },
                )}
              >
                {month}
              </Button>
            ))}
          </Box>
        </Box>
      </Popover>
    </>
  );
}