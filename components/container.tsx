import { mergeTailwindClassNames as cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto flex flex-col w-full max-w-(--breakpoint-lg) grow items-center gap-5 px-5 md:px-10",
        className
      )}
    >
      {children}
    </main>
  );
}
