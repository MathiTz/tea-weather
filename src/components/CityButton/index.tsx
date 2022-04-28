import { useAppContext } from "../../context";
import { CityButtonComponent } from "./styles";

interface CityButtonProps {
  cityId: number;
  cityName: string;
}

function CityButton({ cityId, cityName }: CityButtonProps) {
  const { selectedCityId, handleSelectCity, isLoading } = useAppContext();
  const isActive = selectedCityId === cityId;

  return (
    <CityButtonComponent
      onClick={!isActive ? () => handleSelectCity(cityId) : undefined}
      isActive={isActive}
      disabled={isLoading}
    >
      <h2>{cityName}</h2>
    </CityButtonComponent>
  );
}

export { CityButton };
