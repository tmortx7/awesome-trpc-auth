import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  const helloNoArgs = trpc.healthcheck.useQuery();
  return (
    <div className="flex justify-center">
      <div className="mt-4">{JSON.stringify(helloNoArgs.data, null, 2)}</div>
    </div>
  );
};

export default HomePage;
