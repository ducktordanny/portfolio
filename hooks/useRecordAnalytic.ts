import { useEffect, useState } from 'react';
import { AnalyticViewReq } from '../pages/api/view';

const useRecordAnalytic = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const hostname = window.location.hostname;
      if (hostname !== 'ducktordanny.com' && hostname !== 'ducktordanny.vercel.app') return setLoading(false);
      const analyticData: AnalyticViewReq = {
        path: window.location.pathname.replace('/', ''),
        hostname,
        lastVisited: new Date().toISOString(),
      };
      await fetch('api/view', {
        method: 'POST',
        body: JSON.stringify(analyticData),
      });
      setLoading(false);
    })();
  }, []);

  return loading;
};

export default useRecordAnalytic;
