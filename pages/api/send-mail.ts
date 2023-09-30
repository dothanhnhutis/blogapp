// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OTPSearch } from "@/common.type";
import { sendMail } from "@/lib/nodemailer";
import { createOTP, getOTPByEmail } from "@/lib/action";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateOTPCode } from "@/lib";

type Data = {
  okey: boolean;
};

export interface SendMailApiRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

export default async function handler(
  req: SendMailApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;
  const {
    otpSearch: { edges },
  } = (await getOTPByEmail(email)) as {
    otpSearch: { edges: { node: OTPSearch }[] };
  };
  let otp: string;
  if (edges.find((otp) => otp.node.type === "registerUser")) {
    otp = edges[0].node.code;
  } else {
    otp = generateOTPCode();
    await createOTP(
      otp,
      email,
      "registerUser",
      new Date(Date.now() + 30 * 60 * 1000).toISOString()
    );
  }
  const data = {
    from: 'I.C.H Verify Email" <gaconght@gmail.com>',
    to: email,
    subject: "I.C.H Verify Email",
    html: `<b>code: ${otp}</b>`,
  };
  const isSuccess = await sendMail(data);
  return res.status(200).json({ okey: isSuccess });
}
