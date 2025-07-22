import { useState } from "react";
import { UseLoadReturn } from "../types";

function useLoad(): UseLoadReturn {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return { loading, startLoading, stopLoading };
}

export default useLoad;