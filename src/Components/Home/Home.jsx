import { Card } from "../Card/Card";
import "./home.scss";
import anime from "animejs/lib/anime.es.js";

export const Home = () => {
  const roundLogEl = document.querySelector(".num");
  anime({
    targets: roundLogEl,
    innerHTML: [0, 10000],
    easing: "linear",
    round: 1,
  });

  return (
    <section className="home rightContact w-[55%] pl-8 pr-4 pb-16 h-screen relative right-0 overflow-y-scroll pt-[140px]">
      <div className="home__wrapper pt-4">
        <h2 className="home__title home__gradient text-[42px] font-bold text-center mb-10">How can we help you ?</h2>
        <Card/>
      </div>
    </section>
  );
};
