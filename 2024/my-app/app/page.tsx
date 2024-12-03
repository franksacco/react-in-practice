type Person = {
  name: string;
  imageId: string;
};

function getImageUrl(person: Person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img
      className="rounded-full"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit rounded-lg border border-solid border-gray-500 p-4">
      {children}
    </div>
  );
}

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

export default function Home() {
  return (
    <section className="m-4">
      <Profile />
    </section>
  );
}
