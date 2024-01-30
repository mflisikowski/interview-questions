import AuthUserImage from "@/components/auth/auth-user-image";
import AuthButton from "@/components/auth/auth-button";
import Logo from "@/components/logo";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Logo className="-m-1.5 p-1.5"/>
          </div>

          <div className="lg:flex lg:gap-x-1"></div>

          <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-x-1">
            <AuthUserImage/>
            <AuthButton/>
          </div>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col items-center">
        <div className="flex flex-col gap-16 items-center">
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-lg text-center">
            The fastest way to learn all the
            <span className="font-bold hover:underline">{" "}interview questions{" "}</span>
            you need
            <span className="font-bold hover:underline">{" "}to know{" "}</span>
            to increase your chances of getting hired.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
