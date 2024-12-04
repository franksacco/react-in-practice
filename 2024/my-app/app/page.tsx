const Item = ({ name, isPacked }: { name: string, isPacked: boolean }) => (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);

const PackingList = () => (
  <section>
    <h1>Sally Ride&apos;s Packing List</h1>
    <ul>
      <Item
        isPacked={true}
        name="Space suit"
      />
      <Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      <Item
        isPacked={false}
        name="Photo of Tam"
      />
    </ul>
  </section>
);

const Home = () => (
  <PackingList />
);
export default Home;
