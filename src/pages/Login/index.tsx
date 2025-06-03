import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AccentSVG from "@/assets/accent.svg";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

import PageWrapper from "@/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/AuthContext";
import { useEffect, useState } from "react";
import { DUMMY_CREDENTIALS } from "@/types/User";

const Login = () => {
  interface formLogin {
    email: string;
    password: string;
  }

  const { login, auth } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
  });

  const form = useForm<formLogin>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<formLogin> = async (data) => {
    setLoading(true);
    try {
      const response = await login(data.email, data.password);
      if (response.status === 201 || response.status === 200) {
        toast({
          title: response.data.message,
          description: "You have successfully logged in.",
        });
      } else {
        toast({
          title: response.data.message,
          description: "Please check your email and password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your email and password.",
        variant: "destructive",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/dashboard", { replace: true });
    }
  }, [auth, navigate]);

  return (
    <PageWrapper title="Login">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex w-full h-full">
          <div className="relative w-1/2 h-full bg-secondary overflow-hidden">
            <img
              src={AccentSVG}
              alt="Accent Graphic"
              className=" right-[400px] top-[-80px] absolute origin-top-left "
            />
            <img
              src={AccentSVG}
              alt="Accent Graphic"
              className=" right-[200px] top-[-80px] absolute origin-top-left "
            />
            <img
              src={AccentSVG}
              alt="Accent Graphic"
              className=" right-[0px] top-[-80px] absolute origin-top-left "
            />
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
            <div className="flex flex-col items-start w-full max-w-md gap-8">
              <div className="space-y-3">
                <h1 className="text-4xl">Login to your account</h1>
                <p className="text-gray-500">Please login to your account</p>
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-800 font-semibold">
                    🔹 Demo Credentials (Offline Mode):
                  </p>
                  <p className="text-sm text-red-600">
                    📧 Email: {DUMMY_CREDENTIALS.email}
                  </p>
                  <p className="text-sm text-red-600">
                    🔑 Password: {DUMMY_CREDENTIALS.password}
                  </p>
                  <p className="text-xs text-red-500 mt-1">
                    Use these credentials to access sample data without internet
                    connection
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="example@example.com"
                              {...field}
                            />
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="******"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      variant="default"
                      disabled={loading}
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </Button>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="link"
                        onClick={() => navigate("/register")}
                      >
                        Don't Have Account?
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
