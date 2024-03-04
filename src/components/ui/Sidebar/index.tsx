import { Drawer, MenuItem, MenuList, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { SidebarSize } from '@lib/enums';
import logoBars from '@assets/images/logo-bars.svg';
import fullLogo from '@assets/images/logo-dark.svg';
import {
  AccountBalanceOutlined,
  Add,
  ArrowForwardIosRounded,
  CreditCardOutlined,
  FormatListBulleted,
  HomeOutlined,
} from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@lib/classnames';

interface SidebarProps {
  onToggleSize: () => void;
  size: SidebarSize;
}
const SIDEBAR_TRANSITION = 'width 300ms ease-in-out';

const MENU_ITEMS = [
  { Icon: HomeOutlined, name: 'Dashboard', href: '/dashboard' },
  { Icon: AccountBalanceOutlined, name: 'Contas', href: '/accounts' },
  {
    Icon: FormatListBulleted,
    name: 'Transações',
    href: '/transactions',
  },
  {
    Icon: CreditCardOutlined,
    name: 'Cartões de crédito',
    href: '/credit-cards',
    color: 'success',
  },
];

export default function Sidebar({
  onToggleSize,
  size,
}: Readonly<SidebarProps>) {
  const { pathname } = useLocation();

  return (
    <Drawer
      open
      variant="permanent"
      sx={{ width: size, transition: SIDEBAR_TRANSITION, zIndex: 0 }}
      PaperProps={{
        sx: {
          width: size,
          transition: SIDEBAR_TRANSITION,
          overflow: 'visible',
          zIndex: 0,
        },
      }}
    >
      <Button
        className="absolute -right-3 top-20 z-50 m-0 min-w-6 rounded-full p-0"
        variant="contained"
        onClick={onToggleSize}
        sx={{
          backgroundColor: 'background.paper',
          ':hover': {
            backgroundColor: 'background.paper',
          },
        }}
      >
        <ArrowForwardIosRounded
          className="w-4"
          sx={{ rotate: size === SidebarSize.LG ? '180deg' : '0deg' }}
        />
      </Button>
      <div className="mt-6 h-full w-full">
        <div className="ml-8 flex w-[9rem]">
          <img
            src={logoBars}
            alt="bars logo"
            style={{
              width: '2.1rem',
              opacity: 1,
              transition: 'opacity 300ms linear',
              ...(size === SidebarSize.LG && {
                width: 0,
                height: 0,
                opacity: 0,
              }),
            }}
          />
          <img
            src={fullLogo}
            alt="full logo"
            style={{
              width: '9rem',
              paddingBottom: 8,
              opacity: 1,
              transition: 'opacity 300ms linear',
              ...(size === SidebarSize.SM && {
                width: 0,
                height: 0,
                opacity: 0,
              }),
            }}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            marginLeft: 2.5,
            minHeight: '54px',
            borderRadius: '100%',
            minWidth: '54px',
            width: '54px',
            transition: 'all 300ms linear',
            ...(size === SidebarSize.LG && {
              borderRadius: '36px',
              width: '168px',
              display: 'flex',
              gap: 1,
            }),
          }}
        >
          <Add />
          <Typography
            variant="body1"
            sx={{
              textTransform: 'capitalize',
              ...(size === SidebarSize.SM && {
                display: 'none',
                width: 0,
                height: 0,
              }),
            }}
          >
            Novo
          </Typography>
        </Button>

        <MenuList className="mt-6">
          {MENU_ITEMS.map(({ Icon, name, href, color = 'primary' }) => (
            <MenuItem
              key={name}
              className={cn(
                'flex w-full overflow-hidden border-solid pl-9 font-medium',
                {
                  'border-l-4 border-solid pl-8': pathname === href,
                  [`border-l-${color}`]: pathname === href,
                },
              )}
            >
              <Link
                to={href}
                className={cn(
                  'flex h-11 w-full items-center justify-start gap-11 text-white no-underline opacity-70',
                  { [`text-${color}`]: pathname === href },
                )}
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
