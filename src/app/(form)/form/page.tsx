export default function FormPage() {
  return (
    <main className="h-screen bg-gradient-to-r from-pink-400 to-pink-600 flex justify-center items-center">
      <form action="" className="p-10 flex flex-col bg-white rounded-lg">
        <h1>Form Page</h1>
        <input
          type="text"
          className="border-2 rounded-lg"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="border-2 rounded-lg"
          placeholder="Is You aVirgin?"
        />
        <button type="submit"></button>
      </form>
    </main>
  );
}
