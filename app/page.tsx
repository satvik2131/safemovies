import Dashboard from "../components/pages/dashboard";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <main className="p-3 flex flex-col">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}
