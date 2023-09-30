import AuthLayout from "@/components/Layouts/AuthLayout";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [isHiddenPassword, setIsHiddenPassword] = React.useState<boolean>(true);
  const [alert, setAlert] = React.useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlert({ ...alert, show: false });
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoadingSubmit(true);
    signIn("credentials", {
      ...form,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        setIsLoadingSubmit(false);
        router.push("/manager");
      } else {
        setIsLoadingSubmit(false);
        console.log(res?.error);
        setAlert({
          show: true,
          message: "Invalid email or password.",
        });
      }
    });
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
            Sign in with Google
          </span>
        </button>
        <button
          tabIndex={-1}
          className="group flex items-center space-x-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50"
        >
          <AiFillGithub size={20} />
          <span className="group-hover:text-[#5D87FF] ">
            Sign in with Github
          </span>
        </button>
      </div>
      <div className="my-6 flex items-center before:content-[''] before:flex before:flex-1 before:border-b after:content-[''] after:flex after:flex-1 after:border-b after:border-gray-300">
        <p className="px-2 ">or sign in with</p>
      </div>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label className="text-base font-medium pb-1" htmlFor="email">
            Email
          </label>
          <input
            value={form.email}
            onChange={handleOnchange}
            type="email"
            name="email"
            id="email"
            autoCapitalize="false"
            className="p-2 border rounded-md overflow-hidden"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-base font-medium pb-1" htmlFor="password">
            Password
          </label>
          <div className="flex p-2 border rounded-md overflow-hidden space-x-2">
            <input
              value={form.password}
              onChange={handleOnchange}
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
          {alert.show && (
            <p className="text-red-500 font-normal text-xs">{alert.message}</p>
          )}
        </div>

        <div className="flex justify-end items-center mb-2">
          <Link
            tabIndex={-1}
            href="/auth/forgot-password"
            className="text-base font-normal text-[#5d87ff]"
          >
            Forgot Password ?
          </Link>
        </div>

        {isLoadingSubmit ? (
          <div className="flex items-center justify-center space-x-1 rounded-lg bg-[#5d87ff] text-white py-2 w-full text-center opacity-60">
            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <span>Processing...</span>
          </div>
        ) : form.email.length > 0 && form.password.length > 0 && !alert.show ? (
          <button
            type="submit"
            className="rounded-lg bg-[#5d87ff] text-white py-2 w-full"
          >
            Sign In
          </button>
        ) : (
          <p className="rounded-lg bg-[#5d87ff] text-white py-2 w-full text-center opacity-60">
            Sign In
          </p>
        )}
      </form>

      <div className="flex items-center justify-center space-x-2 mt-6">
        <p>You don't have an account?</p>
        <Link
          tabIndex={-1}
          href="/auth/signup"
          className="text-[#5d87ff] font-normal text-base"
        >
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
