import { ConfirmationCheckout } from "../../../../api/checkout/type";
import ConfirmationItem from "./confirmationItems";

function Confirmation({
  confirmation,
}: {
  confirmation: ConfirmationCheckout;
}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: confirmation.snippet }} />
      <ConfirmationItem cart={confirmation.cart} />
    </>
  );
}
export default Confirmation;
