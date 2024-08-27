import { PaymentProps } from "@/types/type";
import CustomButton from "./CustomButton";

const Payment = () => {
  const openPaymentSheet = async () => {};

  return (
    <>
      <CustomButton
        title="Confirmar viaje"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
