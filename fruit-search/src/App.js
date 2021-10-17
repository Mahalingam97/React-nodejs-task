import React, {useState ,useEffect} from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import FruitResults from "./FruitResults";
import filterFruit from "./filterFruit";
import { getFruit } from "./userservices/userservice";
export default function App(){
  const [fruitList, setfruitList] = useState([]);
  const [filteredfruit,setfilteredfruit]=useState(filterFruit("", 20,fruitList));
  useEffect(() => {
    getFruit()
      .then(data => {
        setfruitList(data);
        console.log(data);
      });
  }, []);

  const handleSearchChange = event =>{
    setfilteredfruit(filterFruit(event.target.value, 20,fruitList));
  }
  return (
            <div>
              <Header />
              <SearchInput textChange={handleSearchChange} />
              <FruitResults fruitData={filteredfruit} />
            </div>
          );
  }
