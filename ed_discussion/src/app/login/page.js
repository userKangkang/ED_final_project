"use client"
import { useState, useEffect } from "react";
import LoginForm from "./loginform";

const fadeInKeyframes = `
  @keyframes fadeIn {
    from {
      opacity: 1;
      filter:blur(5px);
    }
    to {
      opacity: 1;
    }
  }
`;

export default function LoginPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <main
      className={`flex items-center justify-center h-screen ${
        loaded ? "" : "animate-blur"
      }`}
      style={{
        backgroundImage: "url('/login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.1s ease",
        filter: loaded ? "none" : "blur(5px)",
        animation: loaded ? "fadeIn 1s ease" : "",
      }}
    >
      <style>{fadeInKeyframes}</style>
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg p-3 md:h-36"></div>
        <LoginForm />
      </div>
    </main>
  );
}






