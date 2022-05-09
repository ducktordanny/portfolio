import { FormEvent, useState } from 'react';
import { NextPage } from 'next';
import { Button, CircularProgress, TextField } from '@mui/material';
import Footer from '../components/footer';
import Logo from '../components/logo';
import {
  ButtonComponent,
  SelfClosingComponent,
  ParentComponent,
} from '../components/code';
import { AnalyticView } from './api/view';
import useScaleUp from '../hooks/useSlaceUp';

interface User {
  username: string;
  password: string;
}

const Analytics: NextPage = () => {
  const [analytics, setAnalytics] = useState<Array<AnalyticView> | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const trigger = useScaleUp('main', 1);

  const fetchAnalytics = async (user: User) => {
    try {
      const response = await fetch('api/analytics', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await response.json();
      if (resData.error) throw new Error(resData.error);
      setError(null);
      setUser(user);
      trigger();
      setAnalytics(resData as Array<AnalyticView>);
    } catch (err: any) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    await fetchAnalytics({username, password});
  };

  const handleAnalyticsClose = () => {
    trigger();
    setUser(undefined);
    setAnalytics(null);
  };

  const getAnalytics = () => {
    if (!analytics) return 'Nope';
    if (analytics.length < 1) return <SelfClosingComponent name="Nothing" />;
    return analytics.map((siteInfo: AnalyticView) => {
      const { _id: id, views, path, hostname, lastVisited } = siteInfo;
      return (
        <SelfClosingComponent
          key={id}
          name="SiteViews"
          props={[
            { name: 'views', value: views },
            { name: 'from', value: hostname + ':' + path },
            {
              name: 'lastVisited',
              value: new Date(lastVisited).toLocaleString(),
            },
          ]}
        />
      );
    });
  };

  const PasswordField = () => (
    <form
      className="flex flex-col items-center p-3 sm:p-6 lg:p-8"
      onSubmit={handleSubmit}
    >
      {loading && <CircularProgress className="mb-4" />}
      <TextField
        className="username-field"
        id="username"
        name="username"
        type="username"
        label="username"
        disabled={loading}
        error={!!error}
        required
      />
      <TextField
        className="password-field"
        id="password"
        name="password"
        type="password"
        label="password"
        disabled={loading}
        error={!!error}
        helperText={error ? error : ''}
        required
      />
      <Button
        className="w-full"
        type="submit"
        variant="contained"
        disabled={loading}
      >
        Get analytics
      </Button>
    </form>
  );

  const AnalyticsField = () => (
    <section className="p-3 sm:p-6 lg:p-8">
      <pre>
        <ParentComponent name="Analytics">
          {getAnalytics()}
          <ButtonComponent
            name="Refresh"
            onClick={() => user && fetchAnalytics(user)}
          />
          <ButtonComponent name="Close" onClick={handleAnalyticsClose} />
        </ParentComponent>
      </pre>
    </section>
  );

  return (
    <div className="h-full flex flex-col items-center justify-between min-h-screen px-2 py-6 text-xs sm:p-8 sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <Logo className="mx-auto" />
      <main
        className={`${
          analytics ? 'bg-code' : 'bg-form'
        } max-w-full rounded-md opacity-0 md:rounded-2xl mt-6 sm:mt-8`}
      >
        {analytics ? <AnalyticsField /> : <PasswordField />}
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
