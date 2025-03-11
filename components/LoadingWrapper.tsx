"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";  // Make sure this path is correct
import { usePathname } from "next/navigation";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadingWrapper;
