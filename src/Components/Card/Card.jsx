import "./card.scss";

export const Card = () => {
  return (
    <ul className="card__list flex items-center justify-center gap-6 flex-wrap" >
      <li className="card__item max-w-[350px] bg-[#2a2a2acc] w-full p-5 text-[#fff]  rounded-xl">
      <span className="icon__span webspan"></span>
        <h3 className="text-[24px] font-semibold mb-5">Web design</h3>
        <p className="card__decs opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nobis nesciunt adipisci obcaecati ullam dignissimos, a aut magni quam
          asperiores.
        </p>
      </li>
      <li className="card__item max-w-[350px] w-full p-5 text-[#fff]  rounded-xl bg-[#2a2a2acc]">
        <span className="icon__span graficspan"></span>
        <h3 className="text-[24px] font-semibold mb-5">Grafic design</h3>
        <p className="card__decs opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nobis nesciunt adipisci obcaecati ullam dignissimos, a aut magni quam
          asperiores.
        </p>
      </li>
      <li className="card__item max-w-[350px] w-full p-5 text-[#fff]  rounded-xl bg-[#2a2a2acc]">
        <span className="icon__span devspan"></span>
        <h3 className="text-[24px] font-semibold mb-5">Developer</h3>
        <p className="card__decs opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nobis nesciunt adipisci obcaecati ullam dignissimos, a aut magni quam
          asperiores.
        </p>
      </li>      
    </ul>
  );
};
