import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineCheck } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { ZodIssueCode, z } from "zod";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import {
  createNewUser,
  getUserByEmail,
  updateUserByEmail,
  getOTPByEmail,
} from "@/lib/action";
import { OTPSearch, RegisterSubmit, UserProfile } from "@/common.type";

const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/),
  otp: z.string().length(6),
});
const Register2 = () => {
  const [isHiddenPassword, setIsHiddenPassword] = React.useState<boolean>(true);
  const [isEmailExist, setIsEmailExist] = React.useState<boolean>(false);
  const [isOTPExpired, setIsOTPExpired] = React.useState<boolean>(false);
  const [timeCountDown, setTimeCountDown] = React.useState<number>(0);
  useEffect(() => {
    const timeId = setTimeout(() => {
      if (timeCountDown > 0) {
        setTimeCountDown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timeId);
  }, [timeCountDown]);

  const [form, setForm] = useState<RegisterSubmit>({
    email: "",
    password: "",
    otp: "",
  });

  const [errorFormValidate, setErrorFormValidate] = useState<
    { path: (string | number)[]; code: ZodIssueCode }[]
  >([]);

  useEffect(() => {
    const val = registerSchema.safeParse(form);
    setIsEmailExist(false);
    setIsOTPExpired(false);
    if (!val.success) {
      setErrorFormValidate(
        val.error.issues.map((i) => ({ path: i.path, code: i.code }))
      );
    } else {
      setErrorFormValidate([]);
    }
  }, [form]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const [isOnFocusEmailField, setOnFocusEmailField] = useState<boolean>(false);
  const refEmail = useOutsideClick<HTMLInputElement>((isOutSide) => {
    setOnFocusEmailField(!isOutSide);
  });

  const [isOnFocusPasswordField, setIsOnFocusPasswordField] =
    useState<boolean>(false);
  const refPassword = useOutsideClick<HTMLInputElement>((isOutSide) => {
    setIsOnFocusPasswordField(!isOutSide);
  });

  const [isOnFocusOtpField, setIsOnFocusOtpField] = useState<boolean>(false);
  const refOtp = useOutsideClick<HTMLInputElement>((isOutSide) => {
    setIsOnFocusOtpField(!isOutSide);
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userQuery = (await getUserByEmail(form.email)) as {
        user: UserProfile;
      };
      if (userQuery.user) {
        setIsEmailExist(true);
        return;
      }
      const {
        otpSearch: { edges },
      } = (await getOTPByEmail(form.email)) as {
        otpSearch: { edges: { node: OTPSearch }[] };
      };

      if (
        !edges.find((otp) => otp.node.type === "registerUser") ||
        edges.find((otp) => otp.node.type === "registerUser")?.node.code !==
          form.otp
      ) {
        setIsOTPExpired(true);
        return;
      }

      const newUserMutation = (await createNewUser(form)) as {
        userCreate: {
          user: UserProfile;
        };
      };
      await updateUserByEmail(newUserMutation.userCreate.user.email, {
        username: newUserMutation.userCreate.user.id,
      });

      setForm({
        email: "",
        password: "",
        otp: "",
      });
      console.log("create new success.");
    } catch (error: any) {}
  };

  const handleSendEmail = async () => {
    try {
      const userQuery = (await getUserByEmail(form.email)) as {
        user: UserProfile;
      };
      if (userQuery.user) {
        setIsEmailExist(true);
        return;
      }
      setTimeCountDown(5);
      const data = await fetch("/api/send-mail", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email: form.email }),
      });
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-[110px] h-[110px]">
          <Image priority src="/images/logo.png" fill sizes="110" alt="Logo" />
        </div>
      </div>
      <div className="flex mt-6 space-x-4 items-center justify-center">
        <button className="group flex items-center space-x-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50">
          <FcGoogle size={20} />
          <span className="group-hover:text-[#5D87FF]">
            Sign up with Google
          </span>
        </button>
        <button className="group flex items-center space-x-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50">
          <AiFillGithub size={20} />
          <span className="group-hover:text-[#5D87FF] ">
            Sign up with Github
          </span>
        </button>
      </div>
      <div className="my-6 flex items-center before:content-[''] before:flex before:flex-1 before:border-b after:content-[''] after:flex after:flex-1 after:border-b after:border-gray-300">
        <p className="px-2 ">or sign up with</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label className="text-base font-medium pb-1" htmlFor="email">
            Email
          </label>
          <input
            ref={refEmail}
            value={form.email}
            onChange={handleOnchange}
            type="email"
            name="email"
            id="email"
            autoCapitalize="false"
            className="p-2 border rounded-md overflow-hidden"
          />
          {!isOnFocusEmailField &&
            form.email.length > 0 &&
            errorFormValidate.find((i) => i.path[0] === "email") && (
              <p className="text-red-500 font-normal text-xs">
                Enter a valid email address
              </p>
            )}
          {isEmailExist && (
            <p className="font-normal text-xs">
              You have registered,
              <Link className="text-red-500 text-sm" href="/auth/signin">
                Sign in
              </Link>
            </p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-base font-medium pb-1" htmlFor="password">
            Password
          </label>
          <div className="flex p-2 border rounded-md overflow-hidden space-x-2">
            <input
              ref={refPassword}
              value={form.password}
              onChange={handleOnchange}
              className="flex-grow"
              type={isHiddenPassword ? "password" : "text"}
              name="password"
              id="password"
              autoCapitalize="false"
            />
            <button
              type="button"
              className="text-gray-600"
              onClick={() => setIsHiddenPassword(!isHiddenPassword)}
            >
              {isHiddenPassword ? (
                <PiEyeClosedBold size={20} />
              ) : (
                <PiEyeBold size={20} />
              )}
            </button>
          </div>

          {(form.password.length > 0 || isOnFocusPasswordField) && (
            <>
              <p className="font-medium text-sm">Your password must include:</p>
              <p
                className={`inline-flex space-x-2 items-center ${
                  errorFormValidate.find(
                    (i) => i.path[0] === "password" && i.code === "too_small"
                  )
                    ? "text-gray-500"
                    : " text-green-300"
                }`}
              >
                <AiOutlineCheck size={12} />
                <span className="font-normal text-xs">8 to 20 characters</span>
              </p>
              <p
                className={`inline-flex space-x-2 items-center ${
                  errorFormValidate.find(
                    (i) =>
                      i.path[0] === "password" && i.code === "invalid_string"
                  )
                    ? "text-gray-500"
                    : "text-green-300"
                }`}
              >
                <AiOutlineCheck size={12} />
                <span className="font-normal text-xs">
                  Letters, numbers and special characters
                </span>
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col mb-10">
          <label className="text-base font-medium pb-1" htmlFor="otp">
            Code
          </label>
          <div className="border rounded-md overflow-hidden flex items-center ">
            <input
              ref={refOtp}
              value={form.otp}
              onChange={handleOnchange}
              type="otp"
              name="otp"
              id="otp"
              autoCapitalize="false"
              className="flex-grow p-2"
            />
            {timeCountDown ? (
              <p className="border-l p-2 w-14 text-center opacity-50">
                {timeCountDown}s
              </p>
            ) : form.email.length === 0 ||
              (!isOnFocusEmailField &&
                errorFormValidate.find((i) => i.path[0] === "email")) ? (
              <p className="border-l p-2 w-14 text-center opacity-50"> Send</p>
            ) : (
              <button
                onClick={handleSendEmail}
                type="button"
                className="hover:bg-slate-100 border-l p-2 w-14"
              >
                Send
              </button>
            )}
          </div>
          {!isOnFocusOtpField &&
            form.otp.length > 0 &&
            errorFormValidate.find((i) => i.path[0] === "otp") && (
              <p className="text-red-500 font-normal text-xs ">
                Enter the 6-digit code
              </p>
            )}
          {isOTPExpired && (
            <p className="text-red-500 font-normal text-xs ">
              Email verification code has expired
            </p>
          )}
        </div>

        {!errorFormValidate.length && !isEmailExist && !isOTPExpired ? (
          <button
            type="submit"
            className="rounded-lg bg-[#5d87ff] text-white py-2 w-full"
          >
            Sign Up
          </button>
        ) : (
          <p className="rounded-lg bg-[#5d87ff] text-white py-2 w-full text-center opacity-60">
            Sign Up
          </p>
        )}
      </form>

      <div className="flex items-center justify-center space-x-2 mt-6">
        <p>Already have an Account?</p>
        <Link
          href="/auth/signin"
          className="text-[#5d87ff] font-normal text-base"
        >
          Sign In
        </Link>
      </div>

      <input
        type="text"
        onFocus={() => console.log("focus")}
        onBlur={() => console.log("onblur")}
      />
    </AuthLayout>
  );
};

export default Register2;
