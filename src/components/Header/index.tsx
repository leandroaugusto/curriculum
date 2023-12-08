interface HeaderProps {
  readonly children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-center py-8 relative">
        {children}
      </div>
    </header>
  );
}
