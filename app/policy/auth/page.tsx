import Image from "next/image";
import {Hero, Navbar} from '@/components'
import SignUpForm from "@/components/Registration";
import Button from "@/components/Button";

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
