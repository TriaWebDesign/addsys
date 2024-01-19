"use client";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            footer: {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
}
