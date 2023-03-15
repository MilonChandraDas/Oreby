import Image from "./Components/Layout/Image";
import Flex from "./Components/Layout/Flex";
import List from "./Components/Layout/List";
import ListItem from "./Components/Layout/ListItem";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  let [navResponsive, setNavResponsive] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 767) {
        setNavResponsive(false);
      } else {
        setNavResponsive(true);
      }
    }
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <>
      <nav className="max-w-container mx-auto px-3.5 py-5">
        <Flex className="lg:flex  ">
          <div className="w-3/12 items-center">
            <picture>
              <Image imgSrc="assets/Logo.webp " />
            </picture>
          </div>
          <div className="w-9/12 items-center">
            <AiOutlineMenu
              onClick={() => setNavResponsive(!navResponsive)}
              className="block lg:hidden ml-auto"
            />
            {navResponsive && (
              <List className="lg:flex lg:gap-x-10 lg:justify-center  font-dm text-md font-bold	text-[#767676] ">
                <ListItem
                  item="Home"
                  className="hover:text-black transition-all "
                />
                <ListItem
                  item="Shop"
                  className="hover:text-black transition-all"
                />
                <ListItem
                  item="About"
                  className="hover:text-black transition-all"
                />
                <ListItem
                  item="Contacts"
                  className="hover:text-black transition-all"
                />
                <ListItem
                  item="Journal"
                  className="hover:text-black transition-all"
                />
              </List>
            )}
          </div>
        </Flex>
      </nav>
    </>
  );
}

export default App;
