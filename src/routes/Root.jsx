import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          Home
        </Link>
        <nav>
          <Link to="/new">New</Link>
          <a
            href="https://github.com/KritikaSharma04"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
