function Item({ props }) {
  return (
    <>
      <div>
        <li>
          <a href={props.content}>Day la web React</a>
        </li>
      </div>
    </>
  );
}

function Menu({ list }) {
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <Item props={item} key={index} />
        ))}
      </ul>
    </>
  );
}

function Header() {
  const list = [
    {
      link: "/about",
      content: "about me",
    },
  ];
  return <Menu list={list} />;
}

export { Menu, Item, Header };
