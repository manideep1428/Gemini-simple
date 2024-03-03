'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      router.push("/ChatPage");
    }, 2000); 
    return () => clearTimeout(delay);
  }, []); 
  return loading ? (
    <div className="w-full h-full bg-black"><img className='p-auto m-auto text-center' src="/Loading.svg"/></div>
  ) : null
}
