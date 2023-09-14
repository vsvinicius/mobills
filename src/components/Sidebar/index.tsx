import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Container,
  Logo,
  ExpandButton,
  IconsList,
  IconContainer,
  ExpandedLogo
} from './styles';

import logo from '../../assets/images/logo-dark.svg';
import logoBars from '../../assets/images/logo-bars.svg';
import arrow from '../../assets/icons/arrow.svg';

import { ReactComponent as Dashboard } from '../../assets/icons/house.svg';
import { ReactComponent as Accounts } from '../../assets/icons/accounts.svg';
import { ReactComponent as Card } from '../../assets/icons/card.svg';
import { ReactComponent as Reports } from '../../assets/icons/graphic.svg';
import { ReactComponent as Settings } from '../../assets/icons/gear.svg';
import { ReactComponent as Planning } from '../../assets/icons/flag.svg';
import { ReactComponent as Transactions } from '../../assets/icons/list.svg';
import { createRippleEffect } from '../../lib/rippleEffect';

type IconInfo = {
  path: string;
  name: string;
  color?: string;
  Icon: React.FunctionComponent;
};

const icons = [
  { path: 'dashboard', name: 'Dashboard', Icon: Dashboard },
  { path: 'accounts', name: 'Contas', Icon: Accounts },
  { path: 'transactions', name: 'Transações', Icon: Transactions },
  { path: 'cards', color: '#38ADA2', name: 'Cartões de crédito', Icon: Card },
  { path: 'planning', name: 'Planejamento', Icon: Planning },
  { path: 'reports', name: 'Relatórios', Icon: Reports },
  { path: 'settings', name: 'Configurações', Icon: Settings },
] as IconInfo[];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pathname, setPathname] = useState('');
  const location = useLocation();

  useEffect(() => {
    const [, path] = window.location.pathname.split('/');
    setPathname(path);
  }, [location, setPathname]);

  function handleExpandedButton() {
    setIsExpanded((prevState) => !prevState);
  }


  return (
    <Container $isExpanded={isExpanded}>
      <Logo src={logoBars} $shouldHide={isExpanded} />
      <ExpandedLogo src={logo} $shouldHide={!isExpanded} />
      <ExpandButton
        type="button"
        onClick={handleExpandedButton}
        $isExpanded={isExpanded}
      >
        <img src={arrow} />
      </ExpandButton>
      <IconsList>
        {icons.map(({ name, color, Icon, path }) =>
          <IconContainer
            key={path}
            $color={color}
            $isActive={pathname === path}
            $isExpanded={isExpanded}
            onClick={createRippleEffect}
            className='ripple-container'
          >
            <Link to={`/${path}`}>
              <Icon />
              <span>
                {name}
              </span>
            </Link>
          </IconContainer>
        )}
      </IconsList>
    </Container>
  );
}
