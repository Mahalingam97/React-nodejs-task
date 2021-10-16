import { useState, useEffect } from "react";
import { getEmoji } from "./userservice";

export default function Filter() {
  const [emojiList, setemojiList] = useState([]);
  const fetchAllEmoji = () => {
    getEmoji()
      .then(users => {
        console.log(users);
        setemojiList(users);
      });
  };
  useEffect(() => {
    getEmoji()
      .then(response => response.json())
      .then(data => {
        setemojiList(data);
        console.log(data);
      });

  }, []);
  console.log(emojiList);
  return fetchAllEmoji;
}
