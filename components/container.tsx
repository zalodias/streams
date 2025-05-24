import { mergeTailwindClassNames as cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto grid max-w-(--breakpoint-lg) gap-5 px-5 md:px-10",
        className
      )}
    >
      {children}
    </main>
  );
}
