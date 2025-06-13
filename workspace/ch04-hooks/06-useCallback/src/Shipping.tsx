interface ShippingProps {
  shippingFees: number;
  handlePayment: () => void;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Shipping({ shippingFees, handlePayment }: ShippingProps) {
  console.log("Shipping 렌더링.");

  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: {shippingFees.toLocaleString()}원<br />
      </div>
      <br />
      <button type="button" onChange={handlePayment}>
        결제
      </button>
    </>
  );
}

export default Shipping;
