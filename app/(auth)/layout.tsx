import CodewithasifLogo from "@/components/codewithasif-logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex w-full max-w-[400px] flex-col p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 px-2">
          <CodewithasifLogo />
        </div>
        {children}
      </div>
    </main>
  );
}
