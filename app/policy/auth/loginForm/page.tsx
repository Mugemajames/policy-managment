import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >

      <LoginForm />
    </section>
  );
}
