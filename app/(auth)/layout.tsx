import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-full flex-col items-center justify-center space-y-8 px-4 py-12 lg:w-1/2 lg:px-8">
        {/* Header Section */}
        <div className="relative space-y-6 text-center">
          <Image
            src="/assets/honey.webp"
            alt="Honey"
            width={80}
            height={80}
            className="absolute -top-12 -left-20 size-20 -rotate-[20deg] transition-transform"
          />

          <Image
            src="/assets/honey.webp"
            alt="Honey"
            width={80}
            height={80}
            className="absolute -right-20 -bottom-12 size-20 rotate-[20deg] transition-transform"
          />
          <Link
            href="/"
            className="group inline-flex items-center gap-3 transition hover:opacity-90"
          >
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Welcome to <span className="text-primary">Honeycomb</span>
            </h1>
          </Link>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg leading-relaxed">
            Your playful journey to financial freedom starts here! Join our
            community and learn money management in the most engaging way
            possible.
          </p>
        </div>

        {/* Auth Card Section */}
        <div className="w-full max-w-md">{children}</div>

        {/* Footer Section */}
        <div className="flex max-w-md flex-col items-center space-y-2">
          <Image
            src="/assets/bear-holding-honey.webp"
            alt="Bear mascot"
            width={64}
            height={64}
            className="size-16 opacity-80"
          />
          <p className="text-muted-foreground text-center text-sm text-balance">
            Transforming financial literacy into a delightful adventure, one
            step at a time.
          </p>
        </div>
      </div>
      {/* Right Side - Background Image */}
      <div className="hidden p-6 lg:block lg:w-1/2">
        <div className="h-full w-full overflow-hidden rounded-3xl border-2 border-yellow-700 bg-yellow-100 p-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/auth-bg.webp"
              alt="Auth background"
              fill
              priority
              className="rounded-2xl object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
