export default function AdmissionPage({
  params,
}: {
  params: { admission_id: string };
}) {
  return (
    <main className="h-screen">
      <h1>Admission ID:</h1>
      <p>{params.admission_id}</p>
    </main>
  );
}
