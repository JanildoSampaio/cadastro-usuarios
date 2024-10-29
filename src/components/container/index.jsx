import { BannerTtop } from "./styles";
import BannerImage from "../../assets/banner.png";

const bannerTop = () => {
  return (
    <BannerTtop>
      <img src={BannerImage} alt="Banner" />
    </BannerTtop>
  );
};   




export default bannerTop;