import { useEffect, useState } from 'react';
import { AnalyticViewReq } from '../pages/api/view';

const useRecordAnalytic = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const analytics = async () => {
      const analyticData: AnalyticViewReq = {
        path: window.location.pathname.replace('/', ''),
        hostname: window.location.hostname,
        lastVisited: new Date().toISOString(),
      };
      await fetch('api/view', {
        method: 'POST',
        body: JSON.stringify(analyticData),
      });
      setLoading(false);
    };
    analytics();
  }, []);

  return loading;
};

export default useRecordAnalytic;
