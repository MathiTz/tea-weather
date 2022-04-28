import React from "react";
import { toast } from "react-toastify";
import { IWeather } from "../services/@types";
import { getCityByWoeId } from "../services/routes";

interface IAppContext {
  handleSelectCity: (cityId: number) => Promise<void>;
  selectedCityId: number;
  cityData: IWeather;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppContext = React.createContext<IAppContext>({} as IAppContext);

function AppProvider({ children }: IAppProviderProps) {
  const [selectedCityId, setSelectedCityId] = React.useState(0);
  const [cityData, setCityData] = React.useState<IWeather>({} as IWeather);
  const [loading, setLoading] = React.useState(false);

  const handleSelectCity = async (cityId: number) => {
    setSelectedCityId(cityId);
    setLoading(true);

    try {
      const responseData = await getCityByWoeId(cityId);

      setCityData(responseData);
      toast.success("City selected successfully");
    } catch (error) {
      toast.error("Error while selecting city");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cityData,
        selectedCityId,
        handleSelectCity,
        isLoading: loading,
        setIsLoading: setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext(): IAppContext {
  const context = React.useContext(AppContext);

  return context;
}

export { AppProvider, useAppContext };
