import AuthButton from "../components/AuthButton";

export default async function Home() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-center items-center p-3 text-sm">
          <AuthButton/>
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <div className="flex flex-col gap-16 items-center">
          <h1 className="sr-only">Interview Questions App</h1>

          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-lg text-center">
            The fastest way to learn all the
            <span className="font-bold hover:underline">{ " " }interview questions{ " " }</span>
            you need
            <span className="font-bold hover:underline">{ " " }to know{ " " }</span>
            to increase your chances of getting hired.
          </p>
        </div>
      </div>
    </div>
  );
}
