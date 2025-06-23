import ButtonPage from "./button-page/page";
import CardPage from "./card-page/page";
import InputPage from "./input-page/page";
import ModalPage from "./modal-page/page";

export default function Home() {
  return (
    <section className="root-container">
      <h2 className="font-bold text-lg">About this Project</h2>
      <p className="py-6">
        This project is a component library with a Next.js frontend and an
        Express backend. Its primary goal is to provide a collection of reusable
        UI components that can be previewed, tested, and integrated into other
        applications. The frontend is built in Next.js, serving the pages that
        showcase each component, while the backend (Express) handles any data or
        configuration endpoints needed for demos or dynamic behavior.
      </p>
      <ButtonPage />
      <InputPage />
      <ModalPage />
      <CardPage />
    </section>
  );
}
