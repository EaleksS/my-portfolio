import { FC } from "react";
import { AllMedia, Contacts, Layout } from "../../widgets";

export const ContactsPage: FC = (): JSX.Element => {
  return (
    <Layout>
      <Contacts type={2} />
      <AllMedia />
    </Layout>
  );
};
