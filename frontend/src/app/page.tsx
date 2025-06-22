import ButtonPage from "./button-page/page";
import InputPage from "./input-page/page";
import ModalPage from "./modal-page/page";

export default function Home() {
  return (
    <section className="root-container">
      <ButtonPage />
      <InputPage />
      <ModalPage />
    </section>
  );
}
