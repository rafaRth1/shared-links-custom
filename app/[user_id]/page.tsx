async function getUser() {
  const res = await fetch("");

  return res.json();
}

export default function PageUser({ params }: { params: string }) {
  return <div>page Id</div>;
}
