import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { Roboto, Aladin } from "next/font/google";
import UserProvider from "@/context/userContext";
import ChatProvider from "@/context/chatContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const aladin = Aladin({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: [].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ChatProvider>
          <main className={roboto.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ChatProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
