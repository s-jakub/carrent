import { useContext } from "react";
import "./CarCard.styles.css";
import StarIcon from "@mui/icons-material/Star";
import Icon from "./Icon";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { ModalProvider } from "../../context/ModalProvider";
import CustomModal from "../CustomModal";

const CarCard = () => {
  const { setModal } = useContext(ModalProvider);

  return (
    <div className="car-card">
      <div className="car-card__title">Mercedes-benz C</div>
      <img
        src="https://www.pngmart.com/files/5/Mercedes-Benz-PNG-Picture.png"
        alt="mercedes-benz c"
      />
      <div className="car-card__price">120 PLN/Dzień</div>
      <div className="car-card__reviews">
        <div className="car-card__reviews__star">
          <StarIcon sx={{ fontSize: "1.2rem", color: "#FCD440" }} />
          <StarIcon sx={{ fontSize: "1.2rem", color: "#FCD440" }} />
          <StarIcon sx={{ fontSize: "1.2rem", color: "#FCD440" }} />
          <StarIcon sx={{ fontSize: "1.2rem", color: "#FCD440" }} />
          <StarIcon sx={{ fontSize: "1.2rem", color: "#FCD440" }} />
        </div>
        <div className="car-card__reviews__reviews">99 ocen</div>
      </div>
      <div className="car-card__car-equipment">
        <Icon description="AC">
          <AcUnitIcon sx={{ fontSize: "1.2rem", color: "#6495ed" }} />
        </Icon>
        <Icon description="Automat">
          <SettingsIcon sx={{ fontSize: "1.2rem", color: "#6495ed" }} />
        </Icon>
        <Icon description="Benzyna">
          <LocalGasStationIcon sx={{ fontSize: "1.2rem", color: "#6495ed" }} />
        </Icon>
        <Icon description="4 Miejsca">
          <AcUnitIcon sx={{ fontSize: "1.2rem", color: "#6495ed" }} />
        </Icon>
      </div>

      <button
        className="car-card__show-car center"
        onClick={() => setModal(true)}
      >
        Zobacz auto
      </button>
      <button className="car-card__rent-car center">Wypożycz auto</button>
    </div>
  );
};

export default CarCard;
