import HeaderDesktop from "@/layouts/header/HeaderDesktop";
import HeaderMobile from "@/layouts/header/HeaderMobile";

const MainHeader: React.FC = () => {
  return (
    <>
      <div className="hidden omd:block">
        <HeaderDesktop />
      </div>
      <div className="hidden omd:block h-[100px]" />
      <div className="block omd:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};

export default MainHeader;
