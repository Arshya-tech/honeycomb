import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh w-full">
      <div className="my-12 flex w-full flex-col items-center justify-center space-y-6 overflow-x-hidden px-4 py-12 md:my-20 md:space-y-10 lg:px-8 xl:w-1/2">
        {/* Header Section */}
        <div className="relative space-y-4 text-center">
          <Image
            src="/assets/honey.webp"
            alt="Honey"
            width={80}
            height={80}
            className="absolute -top-8 left-0 size-16 -rotate-[25deg] transition-transform select-none hover:-rotate-12 md:-top-12 md:-left-20 md:size-20 2xl:-left-24"
          />

          <Image
            src="/assets/honey.webp"
            alt="Honey"
            width={80}
            height={80}
            className="absolute -right-20 -bottom-12 size-20 rotate-[25deg] transition-transform select-none hover:rotate-12 max-md:hidden"
          />
          <div className="group inline-flex items-center gap-3 transition">
            <h1 className="font-heading font-bold md:text-5xl">
              Welcome to <br className="md:hidden" />
              <Link
                href="/"
                className="text-primary group/appName relative text-4xl sm:text-5xl"
              >
                <span className="bg-primary absolute inset-x-0 bottom-0.5 h-1 scale-x-0 transition-transform duration-200 group-hover/appName:scale-x-100 max-lg:hidden" />
                Honeycomb
              </Link>
            </h1>
          </div>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed md:text-base lg:text-lg">
            Start your playful journey to financial freedom! Join us and learn
            money management in the most engaging way.
          </p>
        </div>

        {/* Auth Card Section */}
        <div className="w-full max-w-md">{children}</div>

        {/* Footer Section */}
        <div className="-mt-2 flex max-w-md flex-col items-center">
          <p className="text-muted-foreground text-center text-sm text-balance">
            Transforming financial literacy into a delightful adventure, one
            step at a time.
          </p>
        </div>
      </div>
      {/* Right Side - Background Image */}
      <div className="hidden p-6 lg:w-1/2 xl:block">
        <div className="h-full w-full overflow-hidden rounded-3xl border-2 border-yellow-700 bg-yellow-100 p-4">
          <div className="relative h-full w-full">
            <Image
              src="/assets/auth-bg.webp"
              alt="Auth background"
              fill
              priority
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
