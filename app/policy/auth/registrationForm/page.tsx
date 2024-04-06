import Image from "next/image";
import SignUpForm from "@/components/Registration";

export default function Home() {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <SignUpForm />
    </section>
  );
}
