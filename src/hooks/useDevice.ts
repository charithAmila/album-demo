import { size } from "../utils/constants";

const useDevice = () => {
  if (window.innerWidth >= size.desktop) {
    return "desktop";
  }
  if (window.innerWidth >= size.laptopL) {
    return "laptopL";
  }
  if (window.innerWidth >= size.laptop) {
    return "laptop";
  }
  return "mobile";
};

export default useDevice;
