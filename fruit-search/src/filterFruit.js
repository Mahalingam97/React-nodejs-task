export default function FilterFruit(searchText,maxResults,fruitList) {
  return (fruitList
    .filter(fruit => {
      if (fruit.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (fruit.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults))
}
