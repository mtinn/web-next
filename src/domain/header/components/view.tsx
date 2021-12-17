import React from "react";
import styles from "../../../styles/Header.module.css";
import logo from "../../../../public/img.png";
import Link from "next/link";
import Menu from "./menu";

function HeaderView() {

    return (
        <>
            <header>
                <span>
                    <Link href={`/`}>
                        <a><img className={styles.logo} src={logo.src}/></a>
                    </Link>
                </span>
                <span>
                    <Menu/>
                </span>
            </header>
        </>
    );
};

export default HeaderView;