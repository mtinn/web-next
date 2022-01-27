import { ConfirmationCheckout } from "../../../api/checkout/type";
import ConfirmationItem from "./confirmationItems";

function Confirmation({
  confirmation,
}: {
  confirmation: ConfirmationCheckout;
}) {
  const props = {
    dangerouslySetInnerHTML: { __html: confirmation.snippet },
  };
  return (
    <>
      <div {...props} />
      <ConfirmationItem cart={confirmation.cart} />
    </>
  );
}
export default Confirmation;
