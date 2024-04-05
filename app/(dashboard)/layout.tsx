import { Header, Navigation } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen">
      <Header />
      <div className="py-4 px-5">{children}</div>
    </section>
  );
}
