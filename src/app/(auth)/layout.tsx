type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-dvh flex items-center justify-center max-w-72 mx-auto">
      {children}
    </div>
  );
}
