import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@containers/container';
import { MainLayout } from '@layouts/index';

const ContainerPage: NextPage = () => {
  const router = useRouter();
  const { containerName } = router.query;

  return (
    <MainLayout>
      <Container containerName={containerName as string} />
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContainerPage;
