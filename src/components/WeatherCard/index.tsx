import React from "react";
import { IConsolidatedWeather } from "../../services/@types";
import { getDayOfTheWeek } from "../../utils/getDayOfTheWeek";
import { parseNumber } from "../../utils/parseNumbers";
import {
  CardContent,
  Container,
  Temperature,
  TitleDay,
  WeatherBody,
  WeatherHeader,
  WeatherIcon,
} from "./styles";

interface WeatherCardProps {
  cityData: IConsolidatedWeather[];
}

function WeatherCard({ cityData }: WeatherCardProps) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [cityDataWithIcons, setCityWithIcons] =
    React.useState<IConsolidatedWeather[]>(cityData);

  React.useEffect(() => {
    async function getIcons(cityData: IConsolidatedWeather[]) {
      const data = cityData.map((city) => ({
        ...city,
        iconUrl: `${apiUrl}static/img/weather/${city.weather_state_abbr}.svg`,
      }));

      setCityWithIcons(data);
    }

    if (cityData.length) {
      getIcons(cityData);
    }
  }, [cityData, apiUrl]);

  return (
    <Container>
      {cityDataWithIcons.length &&
        cityDataWithIcons.map((city) => (
          <CardContent key={city.id}>
            <div>
              <WeatherHeader>
                <TitleDay>{getDayOfTheWeek(city.applicable_date)}</TitleDay>
                <WeatherIcon>
                  <img src={city.iconUrl} alt={city.weather_state_name} />
                </WeatherIcon>
              </WeatherHeader>

              <WeatherBody>
                <Temperature>{parseNumber(city.the_temp)}°</Temperature>

                <ul>
                  <li>
                    <h3>Min.</h3>
                    <p>{parseNumber(city.min_temp)}°</p>
                  </li>
                  <li>
                    <h3>Max.</h3>
                    <p>{parseNumber(city.max_temp)}°</p>
                  </li>
                  <li>
                    <h3>Wind Speed</h3>
                    <p>{parseNumber(city.wind_speed)}</p>
                  </li>
                  <li>
                    <h3>Wind Direction</h3>
                    <p>{city.wind_direction_compass}</p>
                  </li>
                </ul>
              </WeatherBody>
            </div>
          </CardContent>
        ))}
    </Container>
  );
}

export { WeatherCard };
