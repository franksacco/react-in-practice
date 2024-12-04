export default async function Post({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <section>Post {id}</section>
  );
}