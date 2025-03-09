interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthCard({ children, title, description }: AuthCardProps) {
  return (
    <div className="bg-card w-full rounded-xl border border-zinc-700 p-6 shadow-lg transition-shadow hover:shadow-xl">
      <div className="mb-6 space-y-2 text-center">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
}
