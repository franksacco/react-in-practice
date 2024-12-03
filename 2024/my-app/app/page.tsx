const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'lightblue',
    color: 'red',
    padding: '10px',
    borderRadius: '10px',
    width: '500px',
  }
};

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        className="rounded-full"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <section className="m-4">
      <TodoList />
    </section>
  );
}
