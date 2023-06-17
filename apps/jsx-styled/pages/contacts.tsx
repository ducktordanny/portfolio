import { NextPage } from 'next';

import { LinkComponent, ParentComponent } from 'jsx-styled/components/ui-code';

const Contacts: NextPage = () => (
  <ParentComponent name="Contacts">
    <LinkComponent
      name="SendAnEmail"
      href="mailto:ducktordanny@gmail.com"
      props={[{ name: 'to', value: 'ducktordanny@gmail.com' }]}
    />
    <LinkComponent
      name="Github"
      props={[{ name: 'at', value: 'ducktordanny' }]}
      href="https://github.com/ducktordanny"
    />
    <LinkComponent
      name="Instagram"
      href="https://www.instagram.com/ducktordanny/"
      props={[{ name: 'at', value: 'ducktordanny' }]}
    />
    <LinkComponent
      name="Twitter"
      href="https://twitter.com/ducktordanny"
      props={[{ name: 'at', value: 'ducktordanny' }]}
    />
  </ParentComponent>
);

export default Contacts;
