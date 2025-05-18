import { mergeTailwindClassNames as cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto flex w-full max-w-(--breakpoint-lg) grow flex-col gap-20 px-5 md:px-10",
        className
      )}
    >
      {children}
    </main>
  );
}
