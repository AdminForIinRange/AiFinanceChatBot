

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { verifySecret, sendEmailOTP } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface OtpModalProps {
  type: string;
  accountId: string;
  email: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpModal: React.FC<OtpModalProps> = ({
  accountId,
  email,
  isOpen,
  setIsOpen,
  type,
}) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setPassed(false);
    try {
      const sessionId = await verifySecret({ accountId, password });
      if (sessionId) router.push("/");
      setPassed(true);
    } catch (error) {
      setIsLoading(false);
      setPassed(false);

      console.log("Failed to verify OTP", error);
    } finally {
      setPassed(true);
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    await sendEmailOTP({ email });
  };





  return (
    <AlertDialog
      open={isOpen && !passed}
      onOpenChange={(open) => (open ? setIsOpen(open) : passed && setIsOpen(false))}
    >
      <AlertDialogContent className="flex-row items-center border bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl font-semibold">
            Enter Your OTP
          </AlertDialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-4" />
          </Button>
          <AlertDialogDescription className="text-center text-gray-600 dark:text-gray-400">
            We've sent a code to
            <br /> <span className="font-medium">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-center py-4">
          <InputOTP maxLength={6} value={password} onChange={setPassword}>
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot
                index={0}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700 "
              />
              <InputOTPSlot
                index={1}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
              <InputOTPSlot
                index={2}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
              <InputOTPSlot
                index={3}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
              <InputOTPSlot
                index={4}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
              <InputOTPSlot
                index={5}
                className="shad-otp-slot dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="vstack-center">
          <Button
            onClick={handleSubmit}
            className="w-full bg-black text-white dark:bg-blue-700  "
          >
            {isLoading ? "Verifying..." : "Submit"}
          </Button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Didn't get a code?{" "}
            <Button
              variant="link"
              className="p-0 text-blue-500 dark:text-blue-400"
              onClick={handleResendOtp}
            >
              Click to resend
            </Button>
          </p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpModal;
