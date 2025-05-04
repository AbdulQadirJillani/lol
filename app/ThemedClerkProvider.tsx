import { ClerkProvider } from "@clerk/nextjs";

export default function ThemedClerkProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    appearance={{
      layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'blockButton'
      },
      elements: {
        cardBox: '!shadow-xl !shadow-accent',
        card: '!bg-background',
        footer: '!hidden',
        headerTitle: '!text-foreground',
        formFieldLabel: '!text-foreground',
        formFieldInput: '!bg-accent !text-foreground',        socialButtonsBlockButton: '!text-foreground !border !border-secondary',
        userButtonTrigger: '!text-foreground',
        userButtonPopoverMain: '!bg-secondary !text-foreground !shadow-lg',
        userButtonPopoverActionButton: '!bg-secondary !text-foreground !hover:text-black',
        userButtonPopoverFooter: '!hidden'
    }
    }}>
      {children}
    </ClerkProvider>
  )
}
