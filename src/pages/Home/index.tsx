import { Loader } from "../../components";
import { CityButton } from "../../components/CityButton";
import { WeatherCard } from "../../components/WeatherCard";
import { useAppContext } from "../../context";
import { IWeather } from "../../services/@types";
import { citiesOptions } from "../../utils/mockCityOptions";
import { CityOptionsContainer, Container, WarningMessage } from "./styles";

function Home() {
  const { cityData, isLoading } = useAppContext();

  function renderCityData(cityData: IWeather) {
    if (isLoading) {
      return <Loader isLoading={isLoading} />;
    }

    if (!Object.values(cityData).length) {
      return <WarningMessage>No city selected</WarningMessage>;
    }

    return <WeatherCard cityData={cityData.consolidated_weather} />;
  }

  return (
    <Container>
      <CityOptionsContainer>
        {citiesOptions.map((cityOption) => (
          <CityButton
            key={cityOption.cityId}
            cityId={cityOption.cityId}
            cityName={cityOption.cityName}
          />
        ))}
      </CityOptionsContainer>

      {renderCityData(cityData)}
    </Container>
  );
}

export { Home };
