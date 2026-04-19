import { Router } from "express";
const PaymentRouter = Router();
import { getPaymentController, updatePremiumAccessController } from "../controllers/payment.controller.js";

PaymentRouter.post("/order", getPaymentController);
PaymentRouter.patch("/update-premium-access", updatePremiumAccessController);

export default PaymentRouter;