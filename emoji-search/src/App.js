
import React, {useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default function App(){
  const [filteredmoji,setfilteredemoji]=useState(filterEmoji("", 20));
  const handleSearchChange = event =>{
    setfilteredemoji(filterEmoji(event.target.value, 20));}
    return (
            <div>
              <Header />
              <SearchInput textChange={handleSearchChange} />
              <EmojiResults emojiData={filteredmoji} />
            </div>
          );
  }
