import { AuthLayoutProps } from "@/types";

const AuthLayout: React.FC<AuthLayoutProps> = ( { children } ) => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      { children }
    </main>
  );
};

export default AuthLayout;
