import React from "react";
import { usePathname } from "next/navigation";

interface Categories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Header = ({ categories }: { categories: Categories[] }) => {
  const pathname = usePathname();

  return (
    <header className="top-header">
      <nav className="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
        <a className="navbar-brand d-none d-xl-inline" href="/">
          <p className="text-secondary mt-3" style={{ fontSize: "20px" }}>
            LOGO
          </p>
        </a>
        <a
          className="mobile-menu-btn d-inline d-xl-none"
          href="javascript:;"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <i className="bi bi-list" />
        </a>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <div className="offcanvas-logo">
              <img src="assets/images/logo.webp" className="logo-img" alt="" />
            </div>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body primary-menu mx-auto">
            <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
              <li className="nav-item">
                <a
                  className={pathname == "/" ? "nav-link active" : "nav-link"}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={
                    pathname != "/"
                      ? "nav-link active dropdown-toggle dropdown-toggle-nocaret"
                      : "nav-link dropdown-toggle dropdown-toggle-nocaret"
                  }
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>
                <div className="dropdown-menu dropdown-large-menu">
                  <ul className="row list-unstyled">
                    {categories.map((ctg, index) => (
                      <li className="col-6 col-xl-4" key={index}>
                        <a href={`/${ctg.strCategory.toLowerCase()}`}>
                          {ctg.strCategory}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav secondary-menu flex-row">
          <li className="nav-item">
            <a className="nav-link dark-mode-icon" href="javascript:;">
              <div className="mode-icon">
                <i className="bi bi-moon" />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
