import React from "react";
import styles from "../../../styles/Header.module.css";
import logo from "../../../../public/img.png";
import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";

function HeaderView() {
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
          <Menu />
        </span>
      </header>
    </>
  );
}

export default HeaderView;
