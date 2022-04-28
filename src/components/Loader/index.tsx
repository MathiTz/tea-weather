import { LoaderIcon } from "./styles";

interface LoaderProps {
  isLoading: boolean;
}
function Loader({ isLoading }: LoaderProps) {
  return <div>{isLoading && <LoaderIcon />}</div>;
}

export { Loader };
