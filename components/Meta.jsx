// IMPORT
import Head from "next/head"; //inporting the head componet so that we may define the site meta data

const Meta = () => {
  return (
    <Head>
      <title>Serenia Ngola</title>
      <meta lang="eng" />
      <meta
        name="description"
        content="Serenia Ngola - Enginheira de TI"
      />
      <meta
        name="keyWords"
        content="Serenia Ngola, Enginheira de TI"
      />
      <link rel="icon" href="/serenia.jpg" />
    </Head>
  );
};

export default Meta;
