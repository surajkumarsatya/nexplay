export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

// import Link from "next/link";

// function loadScript() {
//   return new Promise<void>(function (resolve, reject) {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => {
//       resolve();
//     };
//     script.onerror = (err) => {
//       reject(err);
//     };
//     document.body.appendChild(script)
//   });
// }

// export default function Home() {
//   async function openRazorPayCheckout() {
//     try {
//       // 1. make payment request to backend
//       const res = await fetch("http://locolhost:3000/checkout", {
//         method: "POST",
//       });

//       const data = await res.json()
//       const order = data.order
//       console.log("res", res);

//       await loadScript();

//       const finalOrderObject = {
//   key: "rzp_test_S0AQgloJHds0Y4", //nedd to change
//   "amount": order.amount, // Amount is in currency subunits
//   "currency": order.currency,
//   "name": "Acme Corp",
//   "description": "Test Transaction",
//   "image": "https://picsum.photos/200/300",
//   "order_id": order.id, // This is a sample Order ID
//   "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }) {
//     alert(response.razorpay_payment_id);
//     alert(response.razorpay_order_id);
//     alert(response.razorpay_signature);
// },
//   "prefill": {
//     "name": "Jasbir",
//     "email": "Jasbir@example.com",
//     "contact": "9000090000"
//   },
//   "notes": {
//     "address": "Razorpay Corporate Office"
//   },
//   "theme": {
//     "color": "#3399cc"
//   }
//       };
//       const rzp1 = new Razorpay(finalOrderObject)
//       rzp1.open()

//       // error handling
//     rzp1.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
//     alert(response.error.step);
//     alert(response.error.reason);
//     alert(response.error.metadata.order_id);
//     alert(response.error.metadata.payment_id);
// });
//     } catch (error) {}
//   }

//   return (
//     <div>
//       <h1>Payment Demo</h1>
//       <button onClick={openRazorPayCheckout}>Pay 100</button>
//     </div>
//   );
// }
