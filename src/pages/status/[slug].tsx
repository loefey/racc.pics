import StatusDescription from "@/components/StatusDescription";
import { getStatusInfo } from "@/utilities/status";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import Navbar from "@/components/Navbar";

export default function Page() {
  const router = useRouter();
  const slug = router.query.slug;
  const [statusInfoHTML, setStatusInfoHTML] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      getStatusInfo(slug as string).then((res) => {
        setStatusInfoHTML(res);
      });
    }
  }, [slug]);

  if (!slug) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col gap-10 items-center px-12 xl:px-40 mt-4"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <section className="flex flex-row bg-bg-secondary rounded-lg w-full p-3 text-text-secondary">
          <p>https://errors.racc.lol/{slug}.png</p>

          <button
            type="button"
            className="ml-auto"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://errors.racc.lol/${slug}.png`
              );
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            {copied ? (
              <IoIosCheckmark className="text-text-primary text-[1.5rem]" />
            ) : (
              <FaCopy className="text-text-primary hover:text-text-secondary transition-all duration-200" />
            )}
          </button>
        </section>

        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:items-start">
            <img src={`/images/${slug}.png`} alt="image" />
          </div>
          <div className="flex flex-col xl:items-start">
            <StatusDescription>
              <div dangerouslySetInnerHTML={{ __html: statusInfoHTML }} />
            </StatusDescription>
          </div>
        </div>
      </main>
    </>
  );
}
