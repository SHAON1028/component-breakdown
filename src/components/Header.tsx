interface HeaderProps {
    text:string
}

const Header: React.FC<HeaderProps> = ({text}) => {
  return (
    <div className="">
     
      <h1 className="text-xl font-bold mb-4">{text}</h1>
    </div>
  );
}
export default Header