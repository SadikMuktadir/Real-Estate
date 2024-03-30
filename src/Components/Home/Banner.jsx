import HomeSearchField from "./HomeSearchField";

const Banner = () => {
  return (
    <div className="flex justify-between my-[100px]">
      <div className="my-auto">
        <h1 className="text-[64px] w-[400px] font-bold">Modern living for everyone</h1>
        <h1 className="text-[20px] mt-2 w-[400px]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </h1>
        <div>
            <HomeSearchField></HomeSearchField>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co/GdbPQ8t/pexels-expect-best-323780-2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
