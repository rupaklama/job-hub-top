/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Router from "next/router";

import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-info">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-dark">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-dark">Register</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {nav()} <div className="container pt-5 pb-5"> {children}</div>
    </>
  );
};

export default Layout;
