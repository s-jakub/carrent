import React, { useEffect, useState } from "react";
import "./Navbar.styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  useEffect(() => {
    if (isDesktop) setIsMenuActive(false);
  }, [isDesktop]);

  return (
    <>
      <section className="navbar">
        {isDesktop && (
          <>
            <div className="navbar__logo">CarRENT</div>
            <nav className="navbar__nav-wrapper">
              <a href="/" className="link active">
                Strona główna
              </a>
              <a href="/howItWorks" className="link">
                Jak to działa
              </a>
              <a href="/cars" className="link">
                Samochody
              </a>
              <a href="/aboutUs" className="link">
                O nas
              </a>
            </nav>
            <div className="navbar__btns">
              <button className="navbar__btns__sign-in">Zaloguj się</button>
              <button className="navbar__btns__sign-up">Zarejestruj się</button>
            </div>
          </>
        )}
        {!isDesktop && (
          <>
            <div className="mobile-wrapper">
              <div className="navbar__logo">CarRENT</div>
              <MenuIcon
                sx={{ fontSize: 30 }}
                onClick={() => setIsMenuActive(!isMenuActive)}
              />
            </div>
          </>
        )}
      </section>
      {isMenuActive && (
        <div className="mobile-menu-content">
          <nav className="mobile-menu-content__nav-wrapper">
            <a href="/" className="link active">
              Strona główna
            </a>
            <a href="/howItWorks" className="link">
              Jak to działa
            </a>
            <a href="/cars" className="link">
              Samochody
            </a>
            <a href="/aboutUs" className="link">
              O nas
            </a>
          </nav>
          <div className="mobile-menu-content__btns">
            <button className="mobile-menu-content__btns__sign-in">
              Zaloguj się
            </button>
            <button className="navbar__btns__sign-up">Zarejestruj się</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
