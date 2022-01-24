import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "../src/User/signin_and_up/Login";
import Base from "../src/Base/Base";
import Blob from "../public/blob.svg";
import { GiFluffyWing } from "react-icons/gi";

import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";

export default function Home({ pet }) {
  console.log(pets);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Head>
        <title>OnlyMyFans</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {isLoggedIn ? (
        <Base />
      ) : (
        <>
          {" "}
          <main className="container mx-auto flex flex-row max-w-full h-[80vh]">
            <div className="w-1/2 h-[80vh] bg-primary flex justify-center items-center">
              <div className="h-3/6 flex-col justify-between  ">
                <h1
                  style={{
                    boxShadow: "6px 12px rgba(0,0,0)",
                  }}
                  className="text-7xl font-bold tracking-wide border-4 border-black p-9 "
                >
                  OnlyMyFans
                </h1>
                <p
                  style={{
                    margin: "4rem 0",
                    fontSize: "2rem",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontStyle: "italic",
                  }}
                >
                  <GiFluffyWing size={25} style={{ margin: "0 1rem" }} />
                  Give wiiings to your content..
                  {/* <GiFluffyWing size={25} /> */}
                </p>
              </div>
              {/* <div classname="border-x-2">
                <Image
                  src={Blob}
                  height={500}
                  width={1000}
                  layout="responsive"
                />
              </div> */}
            </div>
            <div className="w-1/2 h-[70rem]">
              <Login />
            </div>
            <div></div>
          </main>
          <footer className="footer-container">
            <div>
              <Link href="/">@2022 OnlyMyFans</Link>
              <Link href="/">Contact</Link>
              <Link href="/">How it works</Link>
              <Link href="/">Complaints Policy</Link>
            </div>
            <div>
              <Link href="/">About</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Referrals</Link>
              <Link href="/">Cookie Notice</Link>
            </div>

            <div>
              <Link href="/">Help</Link>
              <Link href="/">Store</Link>
              <Link href="/">How it works</Link>
              <Link href="/">Complaints Policy</Link>
            </div>

            <div>
              <Link href="/">Blog</Link>
              <Link href="/">DMCA</Link>
              <Link href="/">USC 2257</Link>
              <Link href="/">Standard Contract Between Fan and Creator</Link>
            </div>

            <div>
              <Link href="/">Branding</Link>
              <Link href="/">Privacy</Link>
              <Link href="/">Acceptable Use Policy</Link>
              <Link href="/">Statement</Link>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}
