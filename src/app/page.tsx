import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src={'/images/flags.jpg'} alt="flags" width={200} height={200} className="rounded-3xl mt-12"/>
      <h1 className="text-white font-bold mt-8 text-4xl">Country Names</h1>
    </div>
  );
}
