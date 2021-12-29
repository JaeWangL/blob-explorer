import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '@containers/home';
import { MainLayout } from '@layouts/index';

const HomePage: NextPage = () => (
  <MainLayout>
    <Home />
  </MainLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }): Promise<any> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
