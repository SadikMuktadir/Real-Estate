import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const TopOffer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("../../../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });
  return (
    <div className="mb-[100px]">
      <div>
        <h1 className="text-[50px] font-bold">Top offers</h1>
        <p className="text-[20px]">
          Fulfill your career dreams, enjoy all the achievements of the city
          center and luxury housing to the fullest.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[100px]">
        {items.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default TopOffer;
