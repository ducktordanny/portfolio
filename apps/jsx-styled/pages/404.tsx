import React from 'react';

import { SelfClosingComponent } from 'jsx-styled/components/ui-code';

const NotFound: React.FC = () => (
  <SelfClosingComponent
    name="Error"
    props={[
      { name: 'status', value: '404' },
      { name: 'message', value: 'This page could not be found.' },
    ]}
  />
);

export default NotFound;
