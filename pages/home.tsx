// React tools
import { useState } from "react";

// Next tools
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// CSS styles
import style from "../styles/home.module.scss";

// Icons
import { Icon } from "@iconify/react";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import emailOutline from "@iconify/icons-eva/email-outline";
import phoneOutline from "@iconify/icons-eva/phone-outline";
import codeIcon from "@iconify/icons-entypo/code";
import nextJs from "@iconify/icons-cib/next-js";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";

// Logo
import etna from "../public/images/etna-logo.png";
import mentorgoal from "../public/images/mg.svg";

// Images
import profile from "../public/images/profile_picture.jpeg";
import mg1 from "../public/images/Mg1.png";
import mg2 from "../public/images/Mg2.png";
import mg3 from "../public/images/Mg3.png";
import live1 from "../public/images/live1.svg";
import ma from "../public/images/ma.svg";

// Components
import Button from "../components/Button";

export default function home() {
  const [home, setHome] = useState(true);
  const [form, setForm] = useState(false);
  const [exp, setExp] = useState(false);
  const [contact, setContact] = useState(false);
  const [techno, setTechno] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <main
      className={`${style.main} flex flex-col items-center h-screen bg-soft`}
    >
      <Head>
        <title>David Ruscuta - Portfolio</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Ruscuta David - Développeur Front-End"
        />
        <meta
          name="keywords"
          content="Freelence, Développeur, web, front, Next, intégrateur, react, remote, Front-End"
        />
        <meta name="author" content="David RUSCUTA" />
      </Head>
      <div className="w-full px-2 bg-soft ">
        {/* Header */}
        <header className=" flex items-center justify-between bg-medium h-20 w-full z-50 px-20 rounded-2xl mt-2 drop-shadow-2xl sm:w-full sm:px-1 sm:justify-around ">
          <h1 className="text-white text-3xl cursor-default sm:hidden">
            <span className="text-soft font-extrabold">D</span>.Ruscuta
          </h1>
          <div className="flex items-center gap-10">
            <h1
              className="text-white text-xl cursor-pointer h-full w-20 flex items-center justify-center hover:border-b-4 border-soft duration-300"
              onClick={() => {
                setHome(true);
                setForm(false);
                setExp(false);
                setContact(false);
                setTechno(false);
                setProjects(false);
              }}
            >
              Accueil
            </h1>
            <h1
              className="text-white text-xl cursor-pointer h-full w-20 flex items-center justify-center hover:border-b-4  border-soft duration-300"
              onClick={() => {
                setHome(false);
                setForm(false);
                setExp(false);
                setContact(true);
                setTechno(false);
                setProjects(false);
              }}
            >
              Contact
            </h1>
            <div className="sm:hidden flex flex-col items-center justify-center">
              <Button label="Télécharge CV" />
              <h1 className="text-sm text-red">insdisponible</h1>
            </div>
          </div>
        </header>
      </div>
      {/* Content */}
      <section className="flex items-center justify-center sm:mt-0 gap-5 w-screen mt-20 sm:flex-col">
        {/* Presentation */}
        <div className="w-1/4 flex flex-col items-center rounded-2xl sm:rounded-none gap-10 bg-white py-6 text-hard drop-shadow-2xl sm:w-full sm:mt-10">
          <div className="w-36 h-36 rounded-full truncate">
            <Image src={profile} alt="profile" />
          </div>
          <div className="gap-2 text-center">
            <h1 className="text-2xl">David RUSCUTA</h1>
            <h2>DÉVELOPPEUR FRONT</h2>
          </div>
          <div className="flex gap-5">
            <Link href="https://www.linkedin.com/in/david-ruscuta-b63908227/">
              <a target="_blank" rel="noreferrer">
                <Icon
                  icon={linkedinFill}
                  className="hover:text-soft duration-300 w-6 h-6 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/DavidRuscuta">
              <a target="_blank" rel="noreferrer">
                <Icon
                  icon={twitterFill}
                  className="hover:text-soft duration-300  w-6 h-6 cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://www.malt.fr/profile/davidruscuta">
              <a target="_blank" rel="noreferrer">
                <h1 className="font-extrabold hover:text-soft duration-300 cursor-pointer">
                  Malt
                </h1>
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-28">
              <b>
                <h1>Residence :</h1>
              </b>
              <h1>Paris 🇫🇷</h1>
            </div>
            <div className="flex gap-28">
              <b>
                <h1>Missions :</h1>
              </b>
              <h1>Remote 🧑‍💻</h1>
            </div>
            <div className="flex gap-20">
              <b>
                <h1>Spécialisation :</h1>
              </b>
              <div className="flex items-center ">
                <h1>Next.Js</h1>
                &nbsp;
                <Icon icon={nextJs} />
              </div>
            </div>
          </div>
          <Button
            label="Contacte-moi"
            onClick={() => {
              setHome(false);
              setForm(false);
              setExp(false);
              setContact(true);
              setTechno(false);
              setProjects(false);
            }}
          />
        </div>
        <Icon
          icon={arrowIosDownwardFill}
          className="sm:text-white sm:w-10 sm:h-10 lg:hidden"
        />
        {/* Home */}
        <div
          className={
            home
              ? "flex lg:w-pcw lg:h-pch flex-col justify-center text-white sm:mt-10 sm:mx-10"
              : "hidden"
          }
          id="home"
        >
          <div className="">
            <h1>BIENVENUE !</h1>
            <h1 className="text-5xl">Découvre mon Portfolio</h1>
            <br />
            <p>
              <i>
                "A good programmer is someone who always looks both ways before{" "}
                <br className="sm:hidden" />
                crossing a one-way street." ~ Doug Linder
              </i>
            </p>
            <br />
          </div>
          <div className="flex items-center justify-center gap-10 sm:gap-5 sm:flex sm:flex-col sm:items-center">
            <div
              className="flex flex-col sm:flex-row items-center justify-evenly text-center w-full sm:w-68 h-40 sm:h-20 hover:border-yellow hover:border-4 bg-white text-hard rounded-2xl py-6 px-4 drop-shadow-lg cursor-pointer duration-300"
              onClick={() => {
                setHome(false);
                setProjects(true);
              }}
            >
              <h1 className=" text-4xl">
                12<span className="text-yellow">+</span>
              </h1>
              <h1 className=" text-sm">
                PROJETS
                <br />
                <span className="sm:hidden">TERMINÉS</span>
                <span className="sm:text-sm sm:text-red lg:hidden">
                  Mode paysage requis
                </span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-evenly text-center w-full sm:w-68 h-40 sm:h-20 bg-white text-hard rounded-2xl py-6 px-4 drop-shadow-lg cursor-default duration-300">
              <h1 className=" text-4xl">
                4<span className="text-yellow">+</span>
              </h1>
              <h1 className=" text-sm flex flex-col">
                MISSIONS
                <span className="text-sm text-red">insdisponible</span>
              </h1>
            </div>
            <div
              className="flex flex-col sm:flex-row items-center justify-evenly text-center w-full sm:w-68 h-40 sm:h-20 hover:border-yellow hover:border-4 bg-white text-hard rounded-2xl py-6 px-4 drop-shadow-lg cursor-pointer duration-300"
              onClick={() => {
                setHome(false);
                setTechno(true);
              }}
            >
              <h1 className=" text-4xl">
                12<span className="text-yellow">+</span>
              </h1>
              <h1 className=" text-sm">
                TECHNOLOGIES
                <br />
                WEB
              </h1>
            </div>
          </div>
          <br />
          <div className="flex gap-10 sm:gap-5 sm:mb-10">
            <div
              className="flex items-center justify-center bg-medium px-6 py-5 rounded-2xl w-full cursor-pointer hover:bg-yellow hover:text-hard duration-300"
              onClick={() => {
                setHome(false);
                setExp(true);
              }}
            >
              <h1 className="font-extrabold">Experience professionnelle</h1>
            </div>
            <div
              className="flex items-center justify-center bg-medium px-6 py-5 rounded-2xl  w-full cursor-pointer hover:bg-yellow hover:text-hard duration-300"
              onClick={() => {
                setHome(false);
                setForm(true);
              }}
            >
              <h1 className="font-extrabold">Formation</h1>
            </div>
          </div>
          <br />
          <h1 className="text-sm text-medium">
            © Copyright 2022 - Ruscuta David
          </h1>
        </div>
        {/* Formation */}
        <div
          className={
            form
              ? " lg:w-pcw lg:h-pch  flex flex-col items-start justify-center gap-7 text-white sm:my-10 sm:px-5"
              : "hidden"
          }
        >
          <div className="flex items-center mt-10 gap-48 sm:gap-5">
            <Image src={etna} alt="etna" className="w-28 h-28" />
            <h1 className="text-2xl sm:text-lg">
              Année Préparatoire <b> 2021 - 2023</b>
            </h1>
          </div>
          <h1 className="text-2xl sm:text-lg">
            <b>
              <i>
                "Chargé de développement et de mise en oeuvre de projets SI"
              </i>
            </b>
          </h1>
          <div className="flex sm:flex-col sm:text-sm gap-9">
            <div className="">
              <b>
                <h1>Piscine - 4 semaines :</h1>
              </b>
              <li>Programmation élémentaire en langage C</li>
              <li>Base de l’administration système en Shell</li>
              <li>Base de la programmation web</li>
              <br />
              <b>
                <h1>Enseignements généraux :</h1>
              </b>
              <li>Expression et communication en anglais</li>
              <li>Expression et communication en français</li>
              <li>Découverte des nouvelles technologies</li>
              <br />
              <b>
                <h1>Développement :</h1>
              </b>
              <li>Langage C</li>
              <li>Technologies Web ( HTML, CSS, Javascript )</li>
              <li>Frameworks ( Laravel, React, Next )</li>
              <li>Base de données ( MariaDB, MySQL )</li>
              <li>Algorithmie</li>
              <br />
            </div>
            <div className="">
              <b>
                <h1>Administration système :</h1>
              </b>
              <li>Administration système UNIX</li>
              <li>Administration système Windows – Cloud</li>
              <li>Réseau de base</li>
              <br />
              <b>
                <h1>Enseignements professionnalisants :</h1>
              </b>
              <li>Intégrer une entreprise</li>
              <li>Projects libres</li>
              <li>Validation des acquis en entreprise</li>
              <br />
              <b>
                <h1>Code Camps : ( Projets à faire )</h1>
              </b>
              <li>Web Camp : comprendre les enjeux du web moderne</li>
              <li>
                Startup week : réflexion et idéation d&apos;un projet innovant
              </li>
              <li>
                AI Camp : Application intelligente utilisant le Machine learning
              </li>
              <br />
            </div>
          </div>
        </div>
        {/* Experience */}
        <div
          className={
            exp
              ? " lg:w-pcw lg:h-pch   flex flex-col items-center text-white sm:my-10 sm:px-5"
              : "hidden"
          }
        >
          <div className=" flex flex-col items-center gap-4">
            <div className="w-20 h-20 p-3 rounded-full truncate bg-white flex items-cenrter justify-center">
              <Image src={mentorgoal} alt="logo" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl">
                Développeur Front &nbsp;
                <i className="text-xl text-yellow">alternant</i>
              </h1>
              <h1 className="text-xl">chez Mentor Goal</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="">
            <p className="text-xl sm:text-sm">
              Mentor Goal c&apos;est une plateforme conçue pour faciliter
              la&nbsp;
              <br className="sm:hidden" />
              recherche et l&apos;obtention d&apos;un contrat des étudiatns.
            </p>
            <br />
            <div className="flex gap-20 sm:gap-5 sm:flex-col  sm:text-sm">
              <div className="">
                <h1 className="font-extrabold">Mes missions :</h1>
                <p>
                  Au sein de cette entreprise j&apos;ai été chargé de
                  <br className="sm:hidden" />
                  l&apos;intégration des maquettes mises au point par
                  <br className="sm:hidden" />
                  le designer
                </p>
              </div>
              <div className="">
                <h1 className="font-extrabold">Techologies utilisés :</h1>
                <li>React.Js</li>
                <li>Next.Js</li>
                <li>Tailwind</li>
              </div>
            </div>
            <br />
            <h1 className="font-extrabold sm:text-sm">
              Méthode de travail ( Agile ) :
            </h1>
            <p>
              Cette méthode consiste à se fixer des objectifs à court terme et
              diviser le projet en
              <br className="sm:hidden" />
              plusieurs sous-projets. Une fois l&apos;objectif atteint, on passe
              au suivant,
              <br className="sm:hidden" />
              et ce jusqu&apos;à l&apos;accomplissement de l&apos;objectif
              final.
              <br className="sm:hidden" />
              Cette approche est plus flexible.
            </p>
          </div>
        </div>
        {/* Contact */}
        <div
          className={
            contact
              ? " lg:w-pcw lg:h-pch   flex flex-col items-center justify-center sm:justify-center sm:h-screen"
              : "hidden"
          }
        >
          <div className="">
            <h1 className="text-white font-extrabold text-4xl ml-3 sm:text-xl">
              Ce fût un plaisir !
            </h1>
            <h1 className="text-white text-3xl sm:text-xl ml-3">
              Vous pouvez me contacter ici :
            </h1>
            <br />
            <a href="mailto:ruscuta.daavid@gmail.com">
              <div className="flex items-center gap-5 cursor-pointer hover:bg-medium hover:drop-shadow-xl duration-300 px-3 py-2 rounded-2xl">
                <div className="w-20 h-20 bg-white flex items-center justify-center drop-shadow-md rounded-2xl ">
                  <Icon icon={emailOutline} className="text-soft w-14 h-14" />
                </div>
                <h1 className="text-white text-xl">Envoyer un mail</h1>
              </div>
            </a>
            <a href="tel:+33619220908">
              <div className="flex items-center gap-5 cursor-pointer hover:bg-medium hover:drop-shadow-xl duration-300 px-3 py-2 rounded-2xl">
                <div className="w-20 h-20 bg-white flex items-center justify-center drop-shadow-md rounded-2xl ">
                  <Icon icon={phoneOutline} className="text-soft w-14 h-14" />
                </div>
                <h1 className="text-white text-xl">Appeler</h1>
              </div>
            </a>
            <br />
            <h1 className="text-white text-xl ml-3 sm:text-center sm:text-base">
              Si vous avez une question
              <br />
              Je peux vous offrir plus d&apos;informations
            </h1>
          </div>
        </div>
        {/* Technologies */}
        <div
          className={
            techno
              ? "  lg:w-pcw lg:h-pch  flex flex-col  justify-center gap-5 sm:px-5 sm:my-10 sm:justify-center sm:items-center sm:w-screen"
              : "hidden"
          }
        >
          <div className="flex flex-col text-white">
            <div className="flex items-cente gap-5 ">
              <Icon icon={codeIcon} className="w-8 h-8" />
              <h1 className=" text-3xl sm:text-2xl">Compétences Techniques</h1>
            </div>
            <h1 className=" sm:text-sm">
              Ici vous trouvez les technologies avec lesquelles j&apos;exerce
            </h1>
            <br />
          </div>
          <div className=" flex flex-col gap-5">
            <div className="flex flex-col gap-2 sm:w-full">
              <h1 className="font-extrabold text-white text-lg">
                Technos web :
              </h1>
              <div className="flex sm:flex-wrap gap-2">
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  HTML
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  CSS
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  SCSS
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Javascript
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Typescript
                </h1>
              </div>
              <div className="flex sm:flex-wrap gap-2">
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  GraphQL
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  SQL
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  PHP
                </h1>
                <h1 className="px-2  text-white text-xl sm:hidden">+</h1>
                <h1 className="px-5 py-1 bg-yellow text-hard rounded-xl">C</h1>
                <h1 className="px-5 py-1 bg-yellow text-hard rounded-xl">
                  Java
                </h1>
                <h1 className="px-5 py-1 bg-yellow text-hard rounded-xl">
                  XML
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-white text-lg">
                Frameworks :
              </h1>
              <div className="flex  sm:flex-wrap  gap-2">
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Next.Js
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  React.Js
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Vue.Js
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Laravel
                </h1>

                <h1 className="px-2  text-white text-xl">+</h1>
                <h1 className="px-5 py-1 bg-yellow text-hard rounded-xl">
                  Tailwind
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-white text-lg">
                Databases / API :
              </h1>
              <div className="flex  sm:flex-wrap  gap-2">
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  MySQL
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  MarieDB
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  FireBase
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Express.Js
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-white text-lg">Outils :</h1>
              <div className="flex sm:flex-wrap  gap-2">
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Figma
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Jira
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  GitHub
                </h1>
                <h1 className="px-5 py-1 bg-medium text-white rounded-xl">
                  Whimsical
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div
          className={
            projects
              ? " lg:w-pcw lg:h-pch  flex flex-col items-center justify-start gap-5 text-white"
              : "hidden"
          }
        >
          <h1 className="font-extrabold">My Projects</h1>
          <div className={`${style.project_container}`}>
            <div className={`${style.pro} flex flex-col text-center`}>
              <h1 className="text-3xl font-bold">Extension Mentor Goal</h1>
              <br />
              <h1 className="text-yellow font-extrabold">Projet ETNA</h1>
              <br />
              <p>
                Le but était de créer une extension Google Chrome à partir de
                maquttes Figma qui permettrait la récuperation et
                l’enregistrement d’informations de manière automatique grâce au
                Scraping.
              </p>
              <br />
              <div className={`${style.container} flex relative`}>
                <div className={style.mg1}>
                  <Image src={mg1} alt="project" />
                </div>
                <div className={`${style.mg2}  drop-shadow-xl`}>
                  <Image src={mg2} alt="project" />
                </div>
                <div className={`${style.mg3}  drop-shadow-xl`}>
                  <Image src={mg3} alt="project" className="rounded-md" />
                </div>
              </div>
            </div>
            <div
              className={`${style.pro} flex flex-col items-center justify-center`}
            >
              <h1 className="text-3xl font-bold">Live Coaching</h1>
              <br />
              <h1 className="text-yellow font-extrabold">Projet Entreprise</h1>
              <br />
              <p className="text-center">
                Site déstiné aux étudiants souhaitant s&apos;inscrire aux lives
                <br />
                de coaching proposés par l&apos;entreprise.
              </p>
              <Image src={live1} alt="live1" className="" />
            </div>
            <div className={`${style.pro} flex gap-10`}>
              <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold">Meca Auto</h1>
                <br />
                <h1 className="text-yellow font-extrabold">Projet Freelence</h1>
                <br />
                <p>
                  Site vitrine pour le garage
                  <br />
                  MecaAuto situé à Rebais.
                </p>
                <br />
                <h1 className="font-extrabold">Missions :</h1>
                <li>Design / Maquettes ( Figma )</li>
                <li>Intégration des maquettes</li>
                <li>Mise en ligne du site</li>
                <li>Responsable de la maintenance</li>
                <br />
                <div className="flex flex-col justify-center items-center">
                  <Button label="Voir le site" />
                  <h1 className="text-sm text-red">insdisponible</h1>
                </div>
              </div>
              <div className="">
                <Image src={ma} alt="meca auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
