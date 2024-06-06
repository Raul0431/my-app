import { Dashboard } from "app/components/Dashboard";
import { Navbar } from "app/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Navbar />
      <Dashboard />
    </main>
  );
}
