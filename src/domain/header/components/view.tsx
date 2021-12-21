import React from "react";
import logo from "../../../../public/img.png";
import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import styles from "./Header.module.css";
import {useRouter} from "next/router";

function HeaderView() {
  const onClick = () => {
    document.getElementById("menu")?.classList.remove(styles.hidden);
  };
  const router = useRouter();
  const path = [router.query.category ?? []].flat();
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
          <a onClick={onClick}>Menu</a>
        </span>
        <span key={path.join("/")} id={"menu"} className={styles.hidden}>
          <Menu />
        </span>
      </header>
    </>
  );
}

export default HeaderView;
