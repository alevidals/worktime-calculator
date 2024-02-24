type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
        <div className="flex-1 mx-10">{children}</div>
      </div>
      <div className="flex-1 bg-foreground hidden sm:block" />
    </div>
  );
}
