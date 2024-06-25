import clsx from "clsx";
import { ASAP, SOURCE_CODE_PRO } from "@/app/lib/constants";

export default function Greeting({
  firstname,
  lastname,
  profession,
}: {
  firstname: string;
  lastname: string;
  profession: string;
}) {
  return (
    <main>
      <article className="p-16">
        <div className={clsx(SOURCE_CODE_PRO.className)}>
          <span>Hi there, my name is</span>
        </div>
        <div
          className={clsx(
            `${ASAP.className} font-bold h-full text-5xl text-primary pb-4 pt-4`,
          )}
        >
          <span>
            {firstname} {lastname}
          </span>
        </div>
        <div
          className={clsx(
            `${SOURCE_CODE_PRO.className} font-bold h-full text-5xl text-secondary`,
          )}
        >
          <span>{profession}</span>
        </div>
      </article>
    </main>
  );
}
