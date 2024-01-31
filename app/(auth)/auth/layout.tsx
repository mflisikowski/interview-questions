import { AuthLayoutProps } from "@/types";

const AuthLayout: React.FC<AuthLayoutProps> = ( { children } ) => {
  return (
    <main>
      { children }
    </main>
  );
};

export default AuthLayout;
