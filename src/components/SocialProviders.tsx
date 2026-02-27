import Image from "next/image";

interface SocialProvidersProps {
  mode: "sign-in" | "sign-up";
}

export default function SocialProviders({ mode }: SocialProvidersProps) {
  const actionLabel = mode === "sign-in" ? "Sign in" : "Sign up";

  return (
    <div className="grid gap-3" aria-label="Social authentication providers">
      <button
        type="button"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-light-300 bg-light-100 px-4 text-body-medium text-dark-900 transition-colors hover:bg-light-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-700"
      >
        <Image src="/google.svg" alt="Google" width={18} height={18} />
        {actionLabel} with Google
      </button>

      <button
        type="button"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-light-300 bg-light-100 px-4 text-body-medium text-dark-900 transition-colors hover:bg-light-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-700"
      >
        <Image src="/apple.svg" alt="Apple" width={18} height={18} />
        {actionLabel} with Apple
      </button>
    </div>
  );
}
