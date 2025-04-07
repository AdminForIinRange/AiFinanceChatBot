"use client";
import { isValidPhoneNumber } from "libphonenumber-js";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createAccount, signInUser } from "@/lib/actions/user.actions";
import OtpModal from "@/components/OTPModal";

type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const formSchema = z.object({
    fullName:
      type === "sign-up"
        ? z.string().min(2, {
            message: "Invalid Full Name.",
          })
        : z.string().optional(),
    email: z.string().email({
      message: "Invalid Email.",
    }),
    phoneNumber:
      type === "sign-up"
        ? z.string().refine(
            (value) => isValidPhoneNumber(value, "US"), // Adjust country code as needed
            { message: "Invalid Phone Number." },
          )
        : z.string().optional(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage(""); // Clear any previous errors
    try {
      const user =
        type === "sign-up"
          ? await createAccount({
              fullName: values.fullName || "",
              email: values.email,
              phoneNumber: values.phoneNumber || "",
              password: values.password,
            })
          : await signInUser({
              email: values.email,
              password: values.password,
            });

      setAccountId(user.accountId);
      setIsOpen(true); // Open OTP modal
    } catch (err: any) {
      // Display the error message
      setErrorMessage(
        err?.message ||
          (type === "sign-up"
            ? "Failed to create account. Please try again."
            : "Failed to sign in. Please try again."),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight">
              {type === "sign-in" ? "Welcome back" : "Create an account"}
            </CardTitle>
            <CardDescription>
              {type === "sign-in"
                ? "Enter your credentials to access your account"
                : "Enter your details to create your account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              {errorMessage !== "Email is already registered" &&
                errorMessage !== "Phone number is already registered" && (
                  <div className="text-[0.8rem] font-medium text-rose-400">
                    {errorMessage}
                  </div>
                )}
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {type === "sign-up" && (
                  <>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <PhoneInput
                              defaultCountry="au"
                              value={field.value}
                              onChange={(value) => field.onChange(value)}
                              inputClassName="   flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                          {errorMessage === "Invalid Phone Number." && (
                            <div className="text-[0.8rem] font-medium text-rose-400">
                              {errorMessage}
                            </div>
                          )}
                        </FormItem>
                      )}
                    />
                  </>
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="crib@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      {errorMessage === "Email is already registered" && (
                        <div className="text-[0.8rem] font-medium text-rose-400">
                          {errorMessage}
                        </div>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showPassword ? "Hide password" : "Show password"}
                            </span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>{type === "sign-in" ? "Sign In" : "Sign Up"}</>
                  )}
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              {type === "sign-in"
                ? "Don't have an account? "
                : "Already have an account? "}
              <a
                href={`/${type === "sign-in" ? "sign-up" : "sign-in"}`}
                className="font-semibold text-primary hover:underline"
              >
                {type === "sign-in" ? "Sign Up" : "Sign In"}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {accountId && (
        <OtpModal
          email={form.getValues("email")}
          type={type}
          accountId={accountId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default AuthForm;
