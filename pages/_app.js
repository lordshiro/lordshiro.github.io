import Layout from "../components/Layout/Layout";
import Head from "next/head";
import "../styles/styles.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/Layout/Theme";



export default function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        {" "}
        <title></title>
      </Head>

          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
    </>
  );
}
