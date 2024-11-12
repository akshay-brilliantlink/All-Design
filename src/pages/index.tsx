import Design from "@/Components/design";
import Design2 from "@/Components/design2";
import Faq from "@/Components/faq";
import Footer from "@/Components/footer";
import Homepage from "@/Components/homepage";
import Howitwork from "@/Components/howitwork";
import Howitwork2 from "@/Components/howitwork2";
import Pricing from "@/Components/pricing";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Design />
      <Design2 />
      <Howitwork />
      <Howitwork2 />
      <Pricing />
      <Faq/>
      <Footer/>
    </div>
  );
}
