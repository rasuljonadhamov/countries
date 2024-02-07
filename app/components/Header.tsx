interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="container py-6 px-8 border-b-2">
      <header className="header flex justify-between">
        <h1 className="title text-xl font-bold cursor-pointer">{title}</h1>
        <button className="dark-mode-toggle">Dark Mode</button>
      </header>
    </div>
  );
};

export default Header;
