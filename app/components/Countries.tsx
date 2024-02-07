import React from "react";

interface Country {
  id: string;
  name: {
    common: string;
  };
  region: string;
  flags: {
    png?: string;
  };
}
interface CountriesProps {
  countries: Country[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <div className="container px-16 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 cursor-pointer ">
      {countries.map((country) => (
        <div
          key={country.id}
          className="card rounded-lg shadow-md hover:shadow-xl text-center"
        >
          <img
            src={country.flags.png}
            alt={country.region}
            className="w-full h-48 object-fill rounded-t-lg"
          />
          <div className="p-4">
            <h1 className=" text-xl font-bold">{country.name.common}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
