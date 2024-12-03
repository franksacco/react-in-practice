function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="rounded-full h-24 w-24 m-2"
    />
  );
}

export default function Home() {
  return (
    <section className="m-4">
      <h1 className="my-4">Welcome to my app!</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
