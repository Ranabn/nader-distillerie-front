// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirect({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

    useEffect(() => {
        const allowed = localStorage.getItem("isAllowed");

        if (!allowed || allowed === "false") {
            router.replace("/restriction-age");
        } else {
            setIsAllowed(true);
        }
    }, [router]);

    if (isAllowed === null) return null; // Prevent rendering until check is done

    return <>{children}</>;
}
