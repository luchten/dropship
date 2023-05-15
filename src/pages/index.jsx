import * as React from "react"
import Header from "../components/Header"
import PassoAPasso from "../components/PassoAPasso";
import Dropship from "../components/Dropship";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/global.css'
import Modulos from "../components/Modulos";
import Import from "../components/Import";
import Adquirindo from "../components/Adquirindo";
import Valores from "../components/Valores";
import Duvidas from "../components/Duvidas";
import NadaPerder from "../components/NadaPerder";

export default function Home() {
  return (
    <div>
      <Header />
      <PassoAPasso />
      <Dropship />
      <Modulos />
      <Import />
      <Adquirindo />
      <Valores />
      <Duvidas />
      <NadaPerder />
    </div>
  )
}
