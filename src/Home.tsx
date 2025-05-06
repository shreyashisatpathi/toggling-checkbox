import { useState } from "react";
import CheckBox from "./Component/CheckBox";
import { list } from "./list";
type Items = {
  id: number;
  name: string;
};
const Home: React.FC = () => {
  const [checkboxList, setCheckBoxList] = useState<Items[]>(list);
  console.log("checkboxList", checkboxList);
  return (
    <div>
      <CheckBox checkboxList={checkboxList} />
    </div>
  );
};
export default Home;
