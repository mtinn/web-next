import Link from "next/link";
import arrowRight from "../../public/arrow-right.svg";
import Image from "next/image";
import React from "react";
import styles from "./Breadcrumb.module.css";
type BreadcrumbItem = {
  name: string;
  href: string | null;
};

function BreadcrumbLinks({ links }: { links: BreadcrumbItem[] }) {
  return (
    <>
      <ul className={styles.breadcrumb}>
        {links.map(
          (item: BreadcrumbItem, key: number, arr: BreadcrumbItem[]) => (
            <li key={key}>
              {item.href ? (
                <>
                  <Link href={`${item.href}`}>
                    <a>{item.name}</a>
                  </Link>
                  {arr.length - 1 !== key && (
                    <Image src={arrowRight.src} alt="" width={16} height={16} />
                  )}
                </>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default BreadcrumbLinks;
