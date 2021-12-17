import Header from "./header";
import Segments from "./segments";
import { Layout } from "../../../api/layout/type";

function LayoutView({ layout }: { layout: Layout }) {
  return (
    <>
      <Header header={layout.header} />
      <Segments segments={layout.segments} />
    </>
  );
}

export default LayoutView;
