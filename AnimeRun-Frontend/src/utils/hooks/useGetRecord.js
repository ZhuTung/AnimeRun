import { useQuery } from "@tanstack/react-query";
import getRecord from "../services/getRecord";

function useGetRecord(userId) {
  return useQuery({
    queryKey: ["getRecord", userId],
    queryFn: () => getRecord(userId),
    enabled: true,
  });
}

export default useGetRecord;
