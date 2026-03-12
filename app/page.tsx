import Navbar from "@/components/Navbar";
import Image from "next/image";
import Banner from '../components/Banner'
import TopDeals from '../components/TopDeals'
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <>
      <Banner></Banner>
      <TopDeals></TopDeals>
      <Footer></Footer>
      </>
  );
}
