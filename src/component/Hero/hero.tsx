import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col items-center justify-center mt-20 max-w-6xl w-full">
      <div className="mx-auto py-16 sm:py-32 lg:py-24 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:w-2/5">
          <h1 className="text-4xl font-bold tracking-tight text-lime-700 sm:text-5xl">
            Explore the best shopping experience
          </h1>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/productScreen"
              className="w-full sm:w-56 rounded-md bg-lime-200 px-4 py-3 text-2xl font-bold text-lime-700 shadow-sm hover:bg-lime-300 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div
          className="relative mt-10 sm:mt-0"
          style={{
            flex: '0.5',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            alt=""
            src="/src/assets/logo2.png"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};
