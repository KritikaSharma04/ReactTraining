import EmojiItem from "./emojiItem";
export default function EmojiList(props) {
  const data = props.data;
  console.log({ data });

  return (
    <div className="componenet-emoji-results">
      {data.map(function (item) {
        return <EmojiItem title={item.title} symbol={item.symbol} />;
      })}
    </div>
  );
}
