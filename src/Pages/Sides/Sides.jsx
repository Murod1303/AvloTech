import { LeftSide } from "../../Components/LeftSide/LeftSide";
import { Right } from "../Right/Right";

export const Sides = () => {
  return (
    <section className="sides flex items-start justify-center">
      <div className="container px-5">
        <div className="sides__wrapper flex w-full items-start justify-start  relative h-screen overflow-hidden">
          <LeftSide />
          <Right />
        </div>
      </div>
    </section>
  );
};
