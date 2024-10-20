import { BannerTtop } from "./styles";
import BannerImage from "../../assets/banner.png";

const bannerTop = ({ children, ...props }) => {
  return (
    <BannerTtop {...props}> {children}
      <img src={BannerImage} alt="Banner" />
    </BannerTtop>
  );
};   




export default bannerTop;