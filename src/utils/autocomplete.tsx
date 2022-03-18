import Link from "next/link";
import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";
import { AutoComplete, autoItem } from "../api/autocomplete/type";

type SearchFunc = (q: string) => Promise<AutoComplete>;

function AutoComplete({
  search,
  classNameInput,
}: {
  search: SearchFunc;
  classNameInput: string;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState<autoItem[]>([]);
  const loadItems = (query: string) => {
    (async () => {
      const autoComplete = await search(query);
      setItems(autoComplete.items);
    })();
  };
  const handlerBlur = () => {
    setOpen(true);
    loadItems("");
  };
  const handleBlur: FocusEventHandler = (e) => {
    if (!e.currentTarget?.parentNode?.contains(e.relatedTarget)) {
      if (isOpen) {
        setOpen(false);
      }
    }
  };
  const handlerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setOpen(true);
    loadItems(e.target?.value);
  };
  return (
    <>
      <form>
        <input
          className={classNameInput}
          type={"search"}
          name={"q"}
          autoComplete={"off"}
          onBlur={handleBlur}
          onFocus={handlerBlur}
          onChange={handlerChange}
          placeholder={"Sök på Let's deal"}
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
