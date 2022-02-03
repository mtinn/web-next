import Link from "next/link";
import React, { useState } from "react";
import { AutoComplete, autoItem } from "../api/autocomplete/type";

type SearchFunc = (q: string) => Promise<AutoComplete>;

function AutoComplete({ search }: { search: SearchFunc }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState<autoItem[]>([]);
  const loadItems = (query: string): void => {
    (async () => {
      const autoComplete = await search(query);
      setItems(autoComplete.items);
    })();
  };
  const handlerBlur = () => {
    setOpen(true);
    loadItems("");
  };
  const handleBlur = (event: any) => {
    if (!event.currentTarget.parentNode.contains(event.relatedTarget)) {
      if (isOpen) {
        setOpen(false);
      }
    }
  };
  const handlerChange = (e: any) => {
    setOpen(true);
    loadItems(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type={"search"}
          name={"q"}
          autoComplete={"off"}
          onBlur={handleBlur}
          onFocus={handlerBlur}
          onChange={handlerChange}
        />
        <ul className={isOpen ? "" : "hidden"}>
          {items.map((item: autoItem, key: number) => (
            <li key={key}>
              <Link href={`${item.uri}`}>
                <a>{item.displayName}</a>
              </Link>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default AutoComplete;
