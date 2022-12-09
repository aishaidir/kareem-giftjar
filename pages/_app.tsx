// import "../styles/globals.css";
import { EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { FC } from "react";
import PageProvider from "../src/components/helpers/PageProvider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface MUIAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <PageProvider emotionCache={emotionCache}>
      {getLayout(<Component {...pageProps} />)}
    </PageProvider>
  );
};

export default App;
