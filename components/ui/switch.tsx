"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import Sun from "@/app/_NavBar/Sun"
import Moon from "@/app/_NavBar/Moon"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "bg-background shadow-[rgba(0,0,0,0.2)] dark:shadow-accent shadow-[inset_-1px_0px_7px] dark:shadow-[inset_1px_0px_7px] inline-flex h-7 w-12 shrink-0 items-center rounded-full focus-visible:border-ring focus-visible:ring-ring/50 transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background shadow-[rgba(0,0,0,0.3)] dark:shadow-[rgba(248,250,252,0.3)] shadow-[inset_1px_0px_7px] pointer-events-none block size-6 p-1 mx-[1.5px] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[calc(100%-3px)] data-[state=unchecked]:translate-x-0"
        )}
      >
        {
          props.checked ? <Moon /> : <Sun />
        }
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
