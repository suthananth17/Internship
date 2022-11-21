import {React, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "../IceCream/IceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Ice-Creams - {numOfIcecreams} </h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(reStocked(value))}>
        Restock Ice creams
      </button>
    </div>
  );
};

export default IceCreamView;
