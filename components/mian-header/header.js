import Link from "next/link";

import logo from "@/assets/logo.png";
import style from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logo} alt="logo" priority />
          Foodies
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
