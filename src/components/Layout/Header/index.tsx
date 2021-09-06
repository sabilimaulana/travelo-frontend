import Button from "components/Button";
import Container from "components/Container";
import Image from "next/image";
import traveloImage from "public/assets/travelo-logo-header.png";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src={traveloImage}
              alt="Travelo Logo"
              placeholder="blur"
              height={48}
              width={182}
            />

            <Search />
          </div>

          <div className="flex gap-5">
            <Nav />
            <Button className="w-[190px]">Masuk</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
