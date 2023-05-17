import { useMemo } from "react";

export const useCloseRedirect = (setIsActive: (bool: boolean) => void) => {
  useMemo(() => {
    setTimeout(() => {
      setIsActive(false);
    });
  }, [window.location.pathname]);
};
