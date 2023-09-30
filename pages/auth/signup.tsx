import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineCheck } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { ZodIssueCode, z } from "zod";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import {
  createNewUser,
  getUserByEmail,
  updateUserByEmail,
  getOTPByEmail,
  updateOTP,
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
const Register = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  const [isEmailExist, setIsEmailExist] = React.useState<boolean>(false);
  const [isOTPExpired, setIsOTPExpired] = React.useState<boolean>(false);
  const [timeCountDown, setTimeCountDown] = React.useState<number>(0);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const [isLoadingSendEmail, setIsLoadingSendEmail] = useState<boolean>(false);
  const [isCreateSuccess, setIsCreateSuccess] = useState<boolean>(false);
  const [form, setForm] = useState<RegisterSubmit>({
    email: "",
    password: "",
    otp: "",
  });
  const [onFocusField, setOnFocusField] = useState<
    keyof RegisterSubmit | undefined
  >(undefined);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setOnFocusField(e.target.name as keyof RegisterSubmit);
  };
  const handleOnBlur = () => {
    setOnFocusField(undefined);
  };

  const [errorFormValidate, setErrorFormValidate] = useState<
    { path: (string | number)[]; code: ZodIssueCode }[]
  >([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeCountDown(parseInt(window.localStorage.getItem("count") ?? "0"));
    }
  }, []);

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

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (timeCountDown > 0) {
        localStorage.setItem("count", (timeCountDown - 1).toString());
        setTimeCountDown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timeId);
  }, [timeCountDown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoadingSubmit(true);
    try {
      const userQuery = (await getUserByEmail(form.email)) as {
        user: UserProfile;
      };
      if (userQuery.user) {
        setIsEmailExist(true);
        setIsLoadingSubmit(false);
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
        setIsLoadingSubmit(false);
        return;
      }
      await updateOTP(edges[0].node.id);

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
      setIsLoadingSubmit(false);
      setIsCreateSuccess(true);
      setTimeout(() => {
        setIsCreateSuccess(false);
      }, 3000);
    } catch (error: any) {}
  };

  const handleSendEmail = async () => {
    setIsLoadingSendEmail(true);
    try {
      const userQuery = (await getUserByEmail(form.email)) as {
        user: UserProfile;
      };
      if (userQuery.user) {
        setIsLoadingSendEmail(false);
        setIsEmailExist(true);

        return;
      }
      setTimeCountDown(60);
      const data = await fetch("/api/send-mail", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email: form.email }),
      });
      console.log(data);
      setIsLoadingSendEmail(false);
    } catch (error: any) {
      console.log(error);
      setIsLoadingSendEmail(false);
    }
  };
  return (
    <AuthLayout>
      <div className="flex mt-6 space-x-4 items-center justify-center">
        <button
          tabIndex={-1}
          className="group flex items-center space-x-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50"
        >
          <FcGoogle size={20} />
          <span className="group-hover:text-[#5D87FF]">
            Sign up with Google
          </span>
        </button>
        <button
          tabIndex={-1}
          className="group flex items-center space-x-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50"
        >
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
            value={form.email}
            onChange={handleOnchange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            type="email"
            name="email"
            id="email"
            autoCapitalize="false"
            className="p-2 border rounded-md overflow-hidden"
          />
          {!(onFocusField === "email") &&
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
              value={form.password}
              onChange={handleOnchange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              className="flex-grow"
              type={isHiddenPassword ? "password" : "text"}
              name="password"
              id="password"
              autoCapitalize="false"
            />
            <button
              tabIndex={-1}
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

          {(form.password.length > 0 || onFocusField === "password") && (
            <>
              <p className="font-medium text-sm">Your password must include:</p>
              <p
                className={`inline-flex space-x-2 items-center ${
                  errorFormValidate.find(
                    (i) => i.path[0] === "password" && i.code === "too_small"
                  )
                    ? "text-gray-500"
                    : " text-green-400"
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
                    : "text-green-400"
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
              value={form.otp}
              onChange={handleOnchange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
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
            ) : isLoadingSendEmail ? (
              <div className="flex items-center justify-center space-x-1 border-l p-2 w-20 text-center opacity-50">
                <span>Send</span>
                <p className="h-3 w-3 border-t-transparent border-solid animate-spin rounded-full border-gray-500 border-2"></p>
              </div>
            ) : form.email.length === 0 ||
              (!(onFocusField === "email") &&
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
          {!(onFocusField === "otp") &&
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
          {isCreateSuccess && (
            <p className="text-green-400 font-normal text-xs ">
              Successful account registration
            </p>
          )}
        </div>

        {isLoadingSubmit ? (
          <div className="flex items-center justify-center space-x-1 rounded-lg bg-[#5d87ff] text-white py-2 w-full text-center opacity-60">
            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <span>Processing...</span>
          </div>
        ) : !errorFormValidate.length && !isEmailExist && !isOTPExpired ? (
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
          tabIndex={-1}
          href="/auth/signin"
          className="text-[#5d87ff] font-normal text-base"
        >
          Sign In
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
