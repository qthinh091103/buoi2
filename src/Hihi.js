function Hihi() {
  const hiAll = () => {
    alert("Hello Everyone!!!");
  };
  const hiYou = (name) => {
    alert("Hello" + name);
  };

  return (
    <span>
      <button onClick={hiAll}>Hi All</button>
      <button onClick={hiYou}>Hi You</button>
    </span>
  );
}

export default Hihi;
