interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className="flex p-4 bg-primary-400">{children}</div>;
};

export default Header;
