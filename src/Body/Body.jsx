import "./../CustomStyle/Scrollbar.css";
import LeftSection from "./Section/LeftSection/LeftSection";
import RightSection from "./Section/RightSection/RightSection";
import PostSection from "./Section/PostSection/PostSection";

const Body = () => {
  return (
    <div className="flex gap-1 relative">
      <section className="p-5 w-1/4 h-screen overflow-y-scroll no-scrollbar">
        <LeftSection></LeftSection>
      </section>

      <section className="w-2/4 p-5  overflow-y-scroll no-scrollbar">
        <PostSection></PostSection>
      </section>
      <section className="w-1/4 p-5 overflow-y-scroll no-scrollbar">
        <RightSection></RightSection>
      </section>
    </div>
  );
};

export default Body;
