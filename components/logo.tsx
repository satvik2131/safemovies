import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row gap-1">
      <Image alt="SafeMovies" src="/logo.svg" width={40} height={40} />
      <p className="font-extrabold text-4xl align-sub">SafeMovies</p>
    </div>
  );
}
