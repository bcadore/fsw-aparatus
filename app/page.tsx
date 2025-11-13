import Image from "next/image";
import Header from "./_components/ui/header";
import SearchInput from "./_components/ui/search-inputs";

import banner from "../public/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Home;
