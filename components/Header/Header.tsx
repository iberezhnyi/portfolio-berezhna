import { FC, useState } from 'react'
import css from './header.module.css'

const Header: FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleMenuClick = () => {
    setIsMenuShown((prev) => !prev)
    // setIsMenuShown(!isMenuShown)
  }
  return (
    <header className={css.header}>
      <nav className={`${css.nav} container`}>
        <a href="index.html" className={css.nav__logo}>
          Smith
        </a>

        <div
          className={
            isMenuShown ? `${css.nav__menu} ${css['show-menu']}` : css.nav__menu
          }
        >
          <ul className={`${css.nav__list} grid`}>
            <li className={css.nav__item}>
              <a
                href="#home"
                className={`${css.nav__link} ${css['active-link']}`}
              >
                <i className={`${css.nav__icon} uil uil-estate`}></i>
                Home
              </a>
            </li>

            <li className={css.nav__item}>
              <a href="#about" className={css.nav__link}>
                <i className={`${css.nav__icon} uil uil-user`}></i>
                About
              </a>
            </li>

            <li className={css.nav__item}>
              <a href="#skills" className={css.nav__link}>
                <i className={`${css.nav__icon} uil uil-file-alt`}></i>
                Skills
              </a>
            </li>

            <li className={css.nav__item}>
              <a href="#services" className={css.nav__link}>
                <i className={`${css.nav__icon} uil uil-briefcase-alt`}></i>
                Services
              </a>
            </li>

            <li className={css.nav__item}>
              <a href="#portfolio" className={css.nav__link}>
                <i className={`${css.nav__icon} uil uil-scenery`}></i>
                Portfolio
              </a>
            </li>

            <li className={css.nav__item}>
              <a href="#contacts" className={css.nav__link}>
                <i className={`${css.nav__icon} uil uil-message`}></i>
                Contacts
              </a>
            </li>
          </ul>

          <i
            className={`${css.nav__close} uil uil-times`}
            onClick={handleMenuClick}
          ></i>
        </div>

        <div className={css.nav__toggle} onClick={handleMenuClick}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
