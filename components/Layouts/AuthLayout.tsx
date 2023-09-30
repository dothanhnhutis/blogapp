import React from "react";
import Image from "next/image";
type Props = {
  children: React.ReactNode;
};
const AuthLayout = async ({ children }: Props) => {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-auth overflow-scroll">
      <div className="bg-white opacity-100 shadow rounded-lg p-8">
        <div className="flex items-center justify-center w-full">
          <Image src="/images/logo.png" width={110} height={110} alt="Logo" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
