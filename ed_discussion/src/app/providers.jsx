'use client'

import {NextUIProvider} from '@nextui-org/react'
import { useRouter } from "next/navigation";

export function Providers({children}) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}