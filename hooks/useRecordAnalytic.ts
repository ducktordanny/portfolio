import {useEffect, useState} from "react";
import {AnalyticViewReq} from "../pages/api/view";

const useRecordAnalytic = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const analytics = async () => {
      console.log('Got');
      const analyticData: AnalyticViewReq = {
        path: window.location.pathname.replace('/', ''),
        hostname: window.location.hostname,
        lastVisited: new Date().toISOString(),
      };
      console.log(analyticData);
      const response = await fetch('api/view', {
        method: 'POST',
        body: JSON.stringify(analyticData),
      });
      console.log('Saved', await response.json());
      setLoading(false);
    }
    analytics();
  }, []);

  return loading;
};

export default useRecordAnalytic;
