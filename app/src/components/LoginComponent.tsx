import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface LoginComponentProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

const LoginComponent: React.FC<LoginComponentProps> = ({ login, setLogin }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const FormSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });
  
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
    const onSubmit = (data: object) => {
      console.log("Form data:", data);
    };
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
  return (
    <div
        className={`w-1/2 ${
          login ? "translate-x-full" : "translate-x-0"
        } flex flex-col justify-center items-start px-36 gap-`}
      >
        <p className="text-black text-4xl font-semibold mb-6">Log In</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <p className="text-black text-lg font-light">Email</p>
                  <FormControl>
                    <Input placeholder="Enter Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <p className="text-black text-lg font-light">Password</p>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        {...field}
                      />
                      <span
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="w-5 h-8 text-gray-500" />
                        ) : (
                          <EyeIcon className="w-5 h-8 text-gray-500" />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="h-12 w-full text-xl" type="submit">
              Submit
            </Button>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setLogin(!login);
                }}
                className="text-blue-600 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </form>
        </Form>
      </div>
  )
}

export default LoginComponent