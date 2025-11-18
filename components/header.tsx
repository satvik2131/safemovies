import { Input } from "./ui/input";
import { ModeToggle } from "./toggleTheme";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row gap-2">
      <Logo />
      <Input
        type="text"
        className="lg:mx-auto max-w-48 lg:max-w-xs"
        placeholder="Search movies"
      />
      <ModeToggle className="hidden lg:block" />
    </div>
  );
}
