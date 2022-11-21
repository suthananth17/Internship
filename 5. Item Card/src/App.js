import styles from "./Components/Card.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import deleteIcon from "./Components/Images/delete.svg";

//ReOpened Break in to items, Delete Icon Shows when clicks item, Reducer Hook(Must) //Gradient Temp Control
//Initial State Mockup Objects
const App = () => {
  const [items, setItems] = useState([
    { itemName: "item 1", amount: 4, isSelected: false },
    { itemName: "item 2", amount: 5, isSelected: false },
    { itemName: "item 3", amount: 6, isSelected: true },
  ]);

  //Initialation of Item Names and Total
  const [value, setValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);

  //When add plus icon
  const submitHandler = () => {
    const newItem = {
      itemName: value,
      amount: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setValue("");
  };

  const deletetHandler = (index) => {
    const filter = (value, object) => {
      return object !== index;
    };
    const filteredItems = items.filter(filter);

    console.log(filteredItems);
    setItems(filteredItems);
   
  };

  //Amount Increasing
  const handleAmountIncrease = (index) => {
    const newItems = [...items];
    newItems[index].amount++;

    setItems(newItems);
    calculateTotal();
  };

  //Amount Decrease
  const handleAmountDecrease = (index) => {
    const newItems = [...items];
    newItems[index].amount--;

    setItems(newItems);
    calculateTotal();
  };

  //Tick or UnTicked
  const toggleComplete = (e,index) => {

    if (e.target.id !== "singleItemdeleteicon" ) {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
    }

  };

  //Calculate Total
  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div>
      <div className={styles.card_container}>
        <div className={styles.add_item}>
          <input
            className={styles.add_input}
            placeholder="Add an item..."
            value={value}
            onChange={(event) => setValue(event.target.value )}
          />
          <button>
            <FontAwesomeIcon icon={faPlus} onClick={submitHandler} />
          </button>
        </div>

        <div className={styles.item_list}>
          {items.map((item, index) => (
            <div className={styles.item_container}>
              <div 
                className={styles.item_name}
                onClick={(e) => toggleComplete(e,index)}
              >
                
                {item.isSelected ? (
                  <>
                    <div className={styles.record}>
                      <span className={styles.padding}>
                        <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                      </span>

                      <span className={styles.completed}>{item.itemName}</span>
                      <img
                        className={styles.delete}
                        src={deleteIcon}
                        id="singleItemdeleteicon"
                        alt="delete"
                        onClick={() => deletetHandler(index)}
                      />
                      {/* dont use extra code </img> */}
                    </div>
                  </>
                ) : (
                  <>
                    <span className={styles.padding}>
                      <FontAwesomeIcon icon={faCircle} size="1x" />
                    </span>
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className={styles.quantity}>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleAmountDecrease(index)}
                  />
                </button>
                <span> {item.amount} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleAmountIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.total}>
          <div>Total: {totalItemCount}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
