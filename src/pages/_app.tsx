import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme/theme';
import GlobalStyles from '@/styles/globals';
import { useEffect, useState } from 'react';
import langPortugueseBrazil from '../language/pt-BR.json';
import langEnglish from '../language/en-US.json';
import langSpanish from '../language/es.json';
import { IntlProvider } from 'react-intl';

const App = ({ Component, pageProps }: AppProps) => {
  const [currentLanguageFile, setCurrentLanguageFile] =
    useState(langPortugueseBrazil);
  const [currentNavigatorLanguage, setNavigatorLanguage] = useState(String);

  const loadLocale = () => {
    const localeSelected =
      localStorage.getItem('SergioJunior@lang') || navigator.language;

    if (localeSelected === 'en') {
      setCurrentLanguageFile(langEnglish);
    } else if (localeSelected === 'es') {
      setCurrentLanguageFile(langSpanish);
    } else {
      setCurrentLanguageFile(langPortugueseBrazil);
    }
  };

  useEffect(() => {
    setNavigatorLanguage(navigator.language);
    loadLocale();
  }, []);

  return (
    <IntlProvider
      locale={currentNavigatorLanguage}
      messages={currentLanguageFile}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Sérgio Junior</title>
          <meta name='title' content='Sérgio Junior' />
          <meta name='description' content='FullStack and Mobile Developer' />
          <meta
            name='google-site-verification'
            content='u6Vdueaj4zUT5QC9kQe57N0BopUpzrTN9HxiHTOZIBo'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Sérgio Junior' />
          <meta
            name='theme-color'
            content='#4C30F5;
'
          />
          <meta name='background-color' content='#040413' />
          <meta
            property='og:description'
            content='FullStack and Mobile Developer'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:title' content='Sérgio Junior' />
          <meta
            property='twitter:description'
            content='FullStack and Mobile Developer'
          />
          <meta
            name='keywords'
            content='front-end, developer front-end, mobile developer, flutter developer
            developer front-end freelancer, developer reactjs, developer javascript,
            javascript, react, reactjs, typescript, strapi, api, dev, nextjs, cypress, tests,
            sergiojunior, sergiojunior, sergiohtml, sergio junior, freelancer, freela'
          />
          <meta name='robots' content='nofollow' />
          <meta name='revisit-after' content='1 day' />
          <meta property='”og:type”' content='”website”' />
          <meta property='”og:locale”' content='”pt_BR”' />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </IntlProvider>
  );
};
export default App;
