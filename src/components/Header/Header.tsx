import NavLink from '../NavLink/NavLink';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/contacts">Contacts</NavLink>
      </div>
      <div className={css.wrap}>
        <NavLink href="/register">Register</NavLink>
        <NavLink href="/login">Log In</NavLink>
      </div>
      <div className={css.wrap}>
        <p className={css.text}>Hello, {'name'}!</p>
        <button className={css.button} type="button">
          Logout
        </button>
      </div>
    </header>
  );
}
