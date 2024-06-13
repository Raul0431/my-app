import { Dashboard } from "app/components/Dashboard";
import { Invoice } from "app/components/Invoice";
import { Navbar } from "app/components/Navbar";
import { Sidebar } from "app/components/Sidebar";

export default function Home() {
  return (
    <>
      {/*<Invoice />*/}
      <main className="flex min-h-screen">
        <section className="hidden lg:block min-w-[15%]">
          <Sidebar />
        </section>
        <section className="flex flex-col items-center w-full lg:max-w-[85%] min-h-full">
          <Navbar />
          <Dashboard />
        </section>
      </main>
    </>
  );
}
