import { NextPage } from 'next';
import { LinkComponent, ParentComponent } from '../components/code';
import Layout from '../components/layout';
import {LinearProgress} from "@mui/material";
import useRecordAnalytic from "../hooks/useRecordAnalytic";

const Contacts: NextPage = () => {
  const loading = useRecordAnalytic();

  if (loading) return <LinearProgress />;

  return (
    <Layout>
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
    </Layout>
  );
};

export default Contacts;
