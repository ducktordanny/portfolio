import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { startCase } from 'lodash';

import { LinkComponent, ParentComponent } from 'jsx-styled/components/ui-code';

export interface NavigationProps {
  paths: string[];
}

export const Navigation: React.FC<NavigationProps> = ({
  paths,
}: NavigationProps) => {
  /** Get current path without the slash. */
  const currentPath = useRouter().pathname.slice(1);

  /** Returns props value for ParentComponent. */
  const getCurrentPage = () => {
    if (paths.includes(currentPath)) {
      return [
        {
          name: 'currentlyOn',
          value: startCase(currentPath),
        },
      ];
    }
    return [];
  };

  return (
    <ParentComponent name="Navigation" props={getCurrentPage()}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>{startCase(currentPath)}</title>
      </Head>
      {paths
        .filter((path) => path !== currentPath)
        .map((path, index) => (
          <LinkComponent
            key={`${path}-${index}`}
            name={startCase(path)}
            navigation
            href={`/${path}`}
          />
        ))}
    </ParentComponent>
  );
};
