import { LayoutHeader } from "../../../api/layout/type";
export default function Header({ header }: { header: LayoutHeader }) {
  return (
    <>
      <h1>{header.title} </h1>
      <div>{header.description}</div>
    </>
  );
}
