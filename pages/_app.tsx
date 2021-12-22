import { AppProps } from 'next/app';
import NextHead from 'next/head'
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo'
import { useEffect, useState } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import config from '@configs/seo.json'
import { defaultTheme } from '@lib/styles/theme';
import { createEmotionCache } from '@utils/index';

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

function MyApp(props: IMyAppProps): JSX.Element {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  useEffect(() => {
    const handleRouteChangeStart = (): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey + 1,
      }));
    };

    const handleRouteChangeEnd = (url: string): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);