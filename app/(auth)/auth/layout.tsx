export default function AuthLayout( {
  children,
}: {
  children: React.ReactNode;
} ): React.ReactNode {
  return (
    <main className="min-h-screen flex flex-col items-center">
      { children }
    </main>
  );
}
