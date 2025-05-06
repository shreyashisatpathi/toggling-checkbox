import { useState } from "react";
import "./styles.css";
const CheckBox = ({ checkboxList }) => {
  const [selectItem, setSelectItems] = useState(
    checkboxList.map((item) => ({ ...item, checked: false }))
  );
  const allChecked = selectItem.every((item) => item.checked);
  const toggleSelectAll = () => {
    const updatedList = selectItem.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setSelectItems(updatedList);
    console.log("afterclickingselectItem", updatedList);
  };
  const toggleCheckbox = (id: number) => {
    const updatedList = selectItem.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectItems(updatedList);
  };
  console.log("allChecked", allChecked);
  console.log("selectItem", selectItem);

  return (
    <div className="main">
      <div>
        <label>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={toggleSelectAll}
          />
          Select All
        </label>
      </div>
      <div className="listItems">
        {selectItem.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheckbox(item.id)}
            ></input>
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};
export default CheckBox;
