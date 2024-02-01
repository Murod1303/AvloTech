import { Route, Routes } from "react-router-dom";
import { RightSide } from "../../Components/RightSide/RightSide";
import { Contact } from "../../Components/RightSide/Contact";
import { Home } from "../../Components/Home/Home";

export const Right = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<RightSide />} />
        <Route path="/contacttel" element={<Contact />} />
      </Routes>
    </>
  );
};
