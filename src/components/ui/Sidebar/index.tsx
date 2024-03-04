import { Link, useLocation } from 'react-router-dom';

import {
  AccountBalanceOutlined,
  Add,
  ArrowForwardIosRounded,
  CreditCardOutlined,
  FormatListBulleted,
  HomeOutlined,
} from '@mui/icons-material';
import { Drawer, MenuItem, MenuList, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import logoBars from '@assets/images/logo-bars.svg';
import fullLogo from '@assets/images/logo-dark.svg';
import { cn } from '@lib/classnames';
import { SidebarSize } from '@lib/enums';

interface SidebarProps {
  onToggleSize: () => void;
  size: SidebarSize;
}
const SIDEBAR_TRANSITION = 'width 300ms ease-in-out';

const MENU_ITEMS = [
  { Icon: HomeOutlined, href: '/dashboard', name: 'Dashboard' },
  { Icon: AccountBalanceOutlined, href: '/accounts', name: 'Contas' },
  {
    Icon: FormatListBulleted,
    href: '/transactions',
    name: 'Transações',
  },
  {
    Icon: CreditCardOutlined,
    color: 'success',
    href: '/credit-cards',
    name: 'Cartões de crédito',
  },
];

export default function Sidebar({
  onToggleSize,
  size,
}: Readonly<SidebarProps>) {
  const { pathname } = useLocation();

  return (
    <Drawer
      PaperProps={{
        sx: {
          overflow: 'visible',
          transition: SIDEBAR_TRANSITION,
          width: size,
          zIndex: 0,
        },
      }}
      open
      sx={{ transition: SIDEBAR_TRANSITION, width: size, zIndex: 0 }}
      variant="permanent"
    >
      <Button
        className="absolute -right-3 top-20 z-50 m-0 min-w-6 rounded-full p-0"
        onClick={onToggleSize}
        sx={{
          ':hover': {
            backgroundColor: 'background.paper',
          },
          backgroundColor: 'background.paper',
        }}
        variant="contained"
      >
        <ArrowForwardIosRounded
          className="w-4"
          sx={{ rotate: size === SidebarSize.LG ? '180deg' : '0deg' }}
        />
      </Button>
      <div className="mt-6 h-full w-full">
        <div className="ml-8 flex w-[9rem]">
          <img
            alt="bars logo"
            src={logoBars}
            style={{
              opacity: 1,
              transition: 'opacity 300ms linear',
              width: '2.1rem',
              ...(size === SidebarSize.LG && {
                height: 0,
                opacity: 0,
                width: 0,
              }),
            }}
          />
          <img
            alt="full logo"
            src={fullLogo}
            style={{
              opacity: 1,
              paddingBottom: 8,
              transition: 'opacity 300ms linear',
              width: '9rem',
              ...(size === SidebarSize.SM && {
                height: 0,
                opacity: 0,
                width: 0,
              }),
            }}
          />
        </div>
        <Button
          sx={{
            borderRadius: '100%',
            marginLeft: 2.5,
            marginTop: 3,
            minHeight: '54px',
            minWidth: '54px',
            transition: 'all 300ms linear',
            width: '54px',
            ...(size === SidebarSize.LG && {
              borderRadius: '36px',
              display: 'flex',
              gap: 1,
              width: '168px',
            }),
          }}
          variant="contained"
        >
          <Add />
          <Typography
            sx={{
              textTransform: 'capitalize',
              ...(size === SidebarSize.SM && {
                display: 'none',
                height: 0,
                width: 0,
              }),
            }}
            variant="body1"
          >
            Novo
          </Typography>
        </Button>

        <MenuList className="mt-6">
          {MENU_ITEMS.map(({ Icon, color = 'primary', href, name }) => (
            <MenuItem
              className={cn(
                'flex w-full overflow-hidden border-solid pl-9 font-medium',
                {
                  [`border-l-${color}`]: pathname === href,
                  'border-l-4 border-solid pl-8': pathname === href,
                },
              )}
              key={name}
            >
              <Link
                className={cn(
                  'flex h-11 w-full items-center justify-start gap-11 text-white no-underline opacity-70',
                  { [`text-${color}`]: pathname === href },
                )}
                to={href}
              >
                <Icon />
                {name}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </div>
    </Drawer>
  );
}
