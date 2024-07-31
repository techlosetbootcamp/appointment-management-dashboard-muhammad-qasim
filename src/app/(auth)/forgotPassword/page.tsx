"use client";
import Button from "@/(components)/button/Button";
import Input from "@/(components)/input/Input";
import Link from "next/link";
import { useForgotPassword } from "./useForgotPassword";
import { logo } from "../../../../public";
import Image from "next/image";

export default function ForgotPassword() {
  const { email, setEmail, onHandleSubmit } = useForgotPassword();
  return (
    <div className="w-full max-w-xl mx-auto sm:pt-[66px] pt-[40px] flex flex-col items-center">
      <div className="flex justify-center mb-6">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={35}
          className="sm:w-[182px] sm:h-[45px]"
        />
      </div>
      <div className="bg-darkzinc rounded-xl shadow-lg border-2 border-lightgray w-[90%] h-auto flex flex-col">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block font-inter text-[22px] leading-[30px] font-bold text-primary sm:text-[26px] sm:leading-[34px]">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-primary">
              Remember your password?
              <Link
                className="text-quaternary decoration-2 hover:underline font-medium"
                href="/login"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="example@ex.com"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-4 block w-full border-2 border-lightgray rounded-md text-sm focus:border-quaternary focus:ring-quaternary shadow-sm font-inter text-primary"
                labelClassName="text-sm font-bold ml-1 mb-2"
                aria-describedby="email-error"
              />
            </div>
            <div className="mt-5">
              <Button
                text="Reset password"
                onClick={onHandleSubmit}
                className="py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-quaternary text-white hover:bg-quaternary focus:outline-none focus:ring-2 focus:ring-quaternary focus:ring-offset-2 transition-all text-[16px] leading-[22px] font-[500]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
