import { Menu, Navigation } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex w-full">
      <Navigation />
      <div className="flex flex-col w-full">
        <Menu />
        <main className="flex-1 pt-4 px-5 relative w-full">{children}</main>
      </div>
    </div>
  );
}
