import axios from "axios";
import { useQuery } from "react-query";

const getLatestNews = async (trackingID: number) => {
  const { data }: any = await axios
    .get(`/data/property/trackingDetails/${trackingID}`)
    .catch();
  return data.data;
};

export default function useLatestNews(trackingID: number) {
  return useQuery({
    queryKey: ["trackingDetail", trackingID],
    queryFn: () => getLatestNews(trackingID),
    cacheTime: 3 * 60 * 1000,
    // enabled: false, // Set this to false to disable this query from automatically running.
  });
}
