import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get user route is working",
  });
});

router.post("/", (req, res) => {
  const body = req.body;

  res.status(200).json({
    message: "User's Data has been received",
    user: body,
  });
});

export default router;
