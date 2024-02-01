import "./leftSide.scss";
export const LeftSide = () => {
  return (
    <section className="hero w-[45%] h-screen overflow-hidden  relative  ">
      <div className="hero__wrapper flex justify-start flex-col ">
        <div className="hero__content">
          <h2 className="hero__title">
            Создаем <span className="hero__gradient">lorem</span> цифровые
            продукты <span className="hero__gradient">lorem</span> с чистого
            листа
          </h2>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            incidunt! Odio beatae enim porro at corrupti, esse eligendi
            laudantium est!
          </p>
        </div>
      </div>
    </section>
  );
};
