import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import About from "@/components/About";
import Interests from "@/components/Interests";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
