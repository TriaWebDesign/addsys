import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <main className="flex flex-col items-center justify-center">
        <div className="p-10">
          <h1 className="text-6xl font-bold">
            We Accept Mentally Ill Students
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nisi
            perferendis nostrum vero vitae quos ea a consequuntur aspernatur
            dolores iste? Praesentium voluptatum nesciunt ipsam amet non velit
            alias nihil.
          </p>
        </div>
        <Image src="/mental.png" width={300} height={800} alt="mental" />
      </main>
    </main>
  );
}
