import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@features/container';
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

export const getStaticPaths = async (): Promise<any> => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: 'blocking', // indicates the type of fallback
});

export const getStaticProps = async ({ locale }: { locale: string }): Promise<any> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContainerPage;
