import FootBar from "./components/FootBar";
import Jumbotron from "./components/Jumbotron";
import LookingGlass from "./components/LookingGlassForm";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
        <Navbar />
        <Jumbotron />
      <main>
        <div className="flex justify-center mx-auto flex-col max-w-5xl py-5">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            excepturi eum similique iste nihil aspernatur nam labore autem
            repellat cum illo sit temporibus enim quibusdam, modi illum fugiat
            numquam sed quam nemo ipsam placeat! Voluptatum molestiae ea
            suscipit dolor porro corrupti, autem accusamus omnis commodi
            dignissimos adipisci facere tempore enim.
          </h1>
        </div>
        <LookingGlass />
        <section className="flex justify-center mx-auto flex-col max-w-5xl py-5">
          <div>
            <h6>Ping</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ipsam, magni eaque, officia harum asperiores corrupti,
              quae perspiciatis quisquam suscipit temporibus adipisci deleniti
              molestiae? A fugit iusto sapiente tempora ab, voluptatem omnis nam
              optio atque adipisci nemo exercitationem id ullam harum mollitia
              nobis, voluptates, dolorem perferendis accusantium inventore modi
              sunt.
            </p>
          </div>
          <div>
            <h6>Traceroute</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore minima, dolores est atque suscipit voluptatibus expedita ad, iusto deleniti nobis id consequatur dignissimos voluptate unde iure sunt eaque corrupti eum. Magnam ratione, iusto modi distinctio nobis aliquam suscipit commodi laborum repellendus necessitatibus consequatur odio at totam ipsam excepturi aliquid.</p>
          </div>
        </section>
      </main>
      <FootBar />
    </>
  );
}
