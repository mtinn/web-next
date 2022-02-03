import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { confirmationCheckout } from "../../../../../../../api/checkout/data";
import Confirmation from "../../../../../../../domain/checkouts/components/confirmation/view";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const token = context.req.cookies;
  const cartIdParam = context.params?.cartId;
  const checkoutParamId = context.params?.id;
  const paymentParamId = context.query.paymentId;
  const cartId = typeof cartIdParam === "string" ? cartIdParam : undefined;
  const paymentId =
    typeof paymentParamId === "string" ? paymentParamId : undefined;
  const checkoutId =
    typeof checkoutParamId === "string" ? checkoutParamId : undefined;
  if (
    undefined === cartId ||
    undefined == checkoutId ||
    undefined === paymentId
  ) {
    return {
      notFound: true,
    };
  }
  const confirmation = await confirmationCheckout(
    token.access_token,
    cartId,
    checkoutId,
    paymentId
  );
  return {
    props: {
      categories: [],
      confirmation: confirmation,
    },
  };
};
const StatusPage = ({
  categories,
  confirmation,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Confirmation confirmation={confirmation} />
    </>
  );
};

export default StatusPage;
