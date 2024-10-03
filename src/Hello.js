function Hello() {
  const person = {
    name: "Peter",
    theme: { backgroundColor: "green", color: "white" },
  };

  return (
    <>
      <div style={person.theme}>
        <h1> Xin chao: {person.name}</h1>
      </div>
      <div>Chuc ban thanh cong voi React</div>
    </>
  );
}

//HP
function HelloPersion({ name }) {
  return (
    <>
      <div>
        <h1>Xin chao ban:{name}</h1>
      </div>
    </>
  );
}
export default Hello;
export { HelloPersion };
