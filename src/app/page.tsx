import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="  flex gap-20">
      <Image src={"/Images/photo1.avif"} alt="abc" width={400} height={400}/>
    </div>
    </>
  );
}
