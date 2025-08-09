import Button from '../Button/Button.tsx';

/**
 * Menu for Header
 * */
function Menu() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="header__menu">
        <li>
          <Button href="#users">Users</Button>
        </li>
        <li>
          <Button href="#signup">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
