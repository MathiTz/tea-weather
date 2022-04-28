export interface IConsolidatedWeather {
  id: number;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction_compass: string;
  applicable_date: string;
  weather_state_abbr: string;
  weather_state_name: string;
  iconUrl?: string;
}

export interface IWeather {
  consolidated_weather: IConsolidatedWeather[];
}
