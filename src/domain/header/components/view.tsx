import React, { useState } from "react";
import logo from "../../../../public/img.png";
import Link from "next/link";
import Menu from "./menu/menu";
import Image from "next/image";
import styles from "./menu/Menu.module.css";
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
      <header>
        <span>
          <Link href="/">
            <a>
              <Image
                className={styles.logo}
                src={logo.src}
                alt=""
                width={50}
                height={40}
              />
            </a>
          </Link>
        </span>
        <span>
          <a
            onClick={(e) => {
              e.preventDefault();
              showMenu(!menu);
            }}
          >
            Menu
          </a>
        </span>
        <span key={path.join("/")} className={menu ? "" : styles.hidden}>
          <Menu />
        </span>
        <AutoComplete search={getList} />
        <Cart />
      </header>
    </>
  );
}

export default HeaderView;
