import { useEffect, useState } from "react";

export const useLoadingView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading;
};
