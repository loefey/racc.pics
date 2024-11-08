import { statuses } from "@/utilities/status";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [video, setVideo] = useState<string>("https://api.racc.lol/v1/video/1");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photosSectionRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    fetch("https://api.racc.lol/v1/video?json=true", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          setVideo("https://api.racc.lol/v1/video/1");
        } else {
          setVideo(res.data.url);
        }
      });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, [video]);

  useEffect(() => {
    if (window.location.hash === "#photos" && photosSectionRef.current) {
      const photosSection = photosSectionRef.current;
      window.scrollTo({
        top: photosSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col xl:flex-row gap-96 items-center px-12 xl:px-48 relative"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <div className="flex flex-col items-center xl:items-start">
          <h1 className="text-7xl font-bold text-text-primary items-center">
            the mother
          </h1>
          <h1 className="text-7xl font-bold text-text-primary">
            of all http errors
          </h1>
        </div>

        <div className="flex flex-col items-center xl:items-start">
          <video
            ref={videoRef}
            src={video}
            autoPlay
            controls
            loop
            className="w-72"
          />
        </div>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#d8c2ba]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <ul
        ref={photosSectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none px-12 xl:px-24 mt-36"
        id="photos"
      >
        {Object.values(statuses).map((status) => (
          <li
            key={status.code}
            className="group flex flex-col text-white overflow-hidden rounded-lg shadow bg-[--interactive] border-2 border-text-primary"
          >
            <Link href={`status/${status.code}`}>
              <div className="pt-[56.25%] relative overflow-hidden">
                <Image
                  src={`/images/${status.code}.png`}
                  alt=""
                  loading="lazy"
                  fill
                  className="contrast-[70%] hover:contrast-100 transition duration-500 object-cover scale-[144%]"
                />
              </div>
              <div className="flex flex-col px-4 pb-2">
                <div className="text-[1.5rem] tracking-[2px] font-semibold uppercase">
                  {status.code}
                </div>
                <p className="font-semibold">{status.message}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
