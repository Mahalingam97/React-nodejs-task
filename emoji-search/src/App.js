import React, {useState ,useEffect} from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import { getEmoji } from "./userservices/userservice";
export default function App(){
  const [emojiList, setemojiList] = useState([]);
  const [filteredmoji,setfilteredemoji]=useState(filterEmoji("", 20,emojiList));
  useEffect(() => {
    getEmoji()
      .then(data => {
        setemojiList(data);
        console.log(data);
      });
  }, []);

  const handleSearchChange = event =>{
    setfilteredemoji(filterEmoji(event.target.value, 20,emojiList));
  }
  return (
            <div>
              <Header />
              <SearchInput textChange={handleSearchChange} />
              <EmojiResults emojiData={filteredmoji} />
            </div>
          );
  }
