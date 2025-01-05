export default async function Page({ params }) {
  const id = (await params).id
  const content = (await params).content
  return <div>My Post: {id} {content}</div>
}