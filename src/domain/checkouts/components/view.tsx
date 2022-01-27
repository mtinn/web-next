import { Checkout } from "../../../api/checkout/type";

function Checkout({ checkout }: { checkout: Checkout }) {
  const props = {
    dangerouslySetInnerHTML: { __html: checkout.snippet },
  };
  return <div {...props} />;
}
export default Checkout;
