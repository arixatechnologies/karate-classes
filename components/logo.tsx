import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-mark relative grid h-14 w-14 place-items-center rounded-full bg-white p-1 shadow-glow">
        <Image
          src="/images/logo/mahira-shotokan-karate-logo.png"
          alt="Mahira Shotokan Karate-Do India logo"
          width={56}
          height={56}
          priority
          className="h-full w-full rounded-full object-contain"
        />
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl font-bold tracking-wide text-white md:text-2xl">Mahira Karate</div>
        <div className="text-[11px] font-semibold tracking-[0.18em] text-gold">Shotokan Karate-Do India</div>
      </div>
    </div>
  );
}
