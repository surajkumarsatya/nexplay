import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-800 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black p-4">
      
      <Card className="w-full max-w-sm border-zinc-800 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
        
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-white text-center">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-zinc-400">
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form>
            <div className="grid gap-4">

              <div className="grid gap-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-zinc-950 border-zinc-800 text-white focus-visible:ring-zinc-700 placeholder:text-zinc-600"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="bg-zinc-950 border-zinc-800 text-white focus-visible:ring-zinc-700 placeholder:text-zinc-600"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-zinc-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-zinc-950 border-zinc-800 text-white focus-visible:ring-zinc-700"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="text-zinc-300">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="bg-zinc-950 border-zinc-800 text-white focus-visible:ring-zinc-700"
                />
              </div>

            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 bg-transparent p-6 mt-2">
          
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-zinc-200 transition-all font-semibold"
          >
            Sign Up
          </Button>

          {/* Divider (same as login) */}
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-800"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900/80 px-2 text-zinc-500">Or</span>
            </div>
          </div>

          <p className="text-sm text-zinc-400 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-white hover:underline underline-offset-4 font-medium"
            >
              Login
            </Link>
          </p>

        </CardFooter>
      </Card>
    </div>
  );
}
