import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import Search from "./components/SearchBar";
import filterEmoji from "./filterEmoji";

export default function App() {
  const initialEmojis = filterEmoji("", 20);
  const [filteredEmojis, setFilteredEmojis] = useState(initialEmojis);
   
  return (
    <>
      <Header />
      <Search setEmoji={setFilteredEmojis} />
      <EmojiList data={filteredEmojis} />
    </>
  );
}