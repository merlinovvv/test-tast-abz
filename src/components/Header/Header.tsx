import { Container } from '../Container/Container.tsx';
import { Logo } from './Logo.tsx';
import Menu from './Menu.tsx';
import './Header.scss';

/**
 * Header component
 * */
function Header() {
  return (
    <header>
      <Container>
        <div className="header">
          <Logo />
          <Menu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
