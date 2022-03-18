import React, { useState } from "react";
import logo from "../../../../public/img.png";
import menuLogo from "../../../../public/menu.svg";
import searchLogo from "../../../../public/search.svg";
import Link from "next/link";
import Menu from "./menu/menu";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import Cart from "../../cart/components/view";
import AutoComplete from "../../../utils/autocomplete";
import { getList } from "../../autocomplete/autocomplete";

function HeaderView() {
  const router = useRouter();
  const path = [router.query.category ?? []].flat();
  const [menu, showMenu] = useState<boolean>(false);
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.content}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={logo.src} alt="" width={48} height={30} />
            </a>
          </Link>
          <a
            className={styles.menu}
            onClick={(e) => {
              e.preventDefault();
              showMenu(!menu);
            }}
          >
            <Image src={menuLogo.src} alt="" width={16} height={16} />
            <span>KATEGORIER</span>
          </a>
          <span key={path.join("/")} className={menu ? "" : "hidden"}>
            <Menu />
          </span>
          <span className={styles.autocomplete}>
            <img
              className={styles.searchLogo}
              src={searchLogo.src}
              alt=""
              width={24}
              height={24}
            />
            <AutoComplete search={getList} classNameInput={styles.search} />
          </span>
          <Cart />
        </div>
      </header>
    </>
  );
}

export default HeaderView;
