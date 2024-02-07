const Hero = () => {
  return (
    <div className="container pt-16 px-8 ">
      <div className=" flex justify-between">
        <input
          className="p-3"
          type="search"
          placeholder="Search for a country..."
        />
        <select name="region" className="p-2">
          <option value="">Filter by Region</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
