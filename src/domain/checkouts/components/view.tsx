import { Checkout } from "../../../api/checkout/type";

function Checkout({ checkout }: { checkout: Checkout }) {
  return <div dangerouslySetInnerHTML={{ __html: checkout.snippet }} />;
}
export default Checkout;
