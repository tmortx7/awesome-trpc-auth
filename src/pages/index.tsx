import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" ">
        <div className="  pt-10 md:px-3  lg:px:6">
          <h1 className=" text-center font-mono md:text-xl">home</h1>
          <div className="mt-0 h-[60vh] md:h-[80vh] w-full flex justify-center ">
            aite
          </div>
        </div>

        <h1 className="text-primary1 font-bold pl-5 text-2xl my-5">paper</h1>
      </main>
    </>
  );
};

export default Home;
