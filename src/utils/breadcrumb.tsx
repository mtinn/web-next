import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href: string | null;
};

function BreadcrumbLinks({ links }: { links: BreadcrumbItem[] }) {
  return (
    <>
      <ul>
        {links.map((item: BreadcrumbItem, key) => (
          <li key={key}>
            {item.href ? (
              <Link href={`${item.href}`}>
                <a>{item.name}</a>
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BreadcrumbLinks;
