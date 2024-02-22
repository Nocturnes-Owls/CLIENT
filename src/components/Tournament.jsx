import { useEffect, useState } from "react";
import { observer } from "../utils/animationScroll";
import Button from "./Button";
import Modal from "./Modal";
import Winner from "./Winner";

const Tournament = ({ title }) => {
  const [openModal, setOpenModal] = useState(false);

  const isOpen = () => {
    setOpenModal(true);
  };
  const isClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const tournament = document.getElementById("tournament");
    observer.observe(tournament);
  }, []);

  return (
    <>
      <section id="tournament" className="section tournament">
        <div className="container">
          <div className="hackaton-video">
            <video
              src="/hackaton.mp4"
              type="video/mp4"
              controls={true}
              poster="hackatonPoster.webp"
            ></video>
          </div>
          <div className="hackaton-description">
            <div className="hackaton-title">
              <h1 className="title">{title}</h1>
            </div>
            <div className="hackaton-btn">
              <Button label="Ganadores" open={isOpen} />
              {/* <a href="https://drive.google.com/file/d/1Pv-H23PLGxppZlXqaYwJZA4V_FSBOyhY/view?usp=drivesdk" download="Torneo-Nocturne-Owl" className="btn btnPrimary" target="_blank" rel="noopener noreferrer"><span className="btn-text">Información</span></a> */}
            </div>
            <div className="hackaton-sponsor">
              <a href="https://napoleon.chat/" target="_blank">
                <img src="/sponsors/napoleon-chat.png" alt="Napoleon chat" />
              </a>
              <a href="https://goldenelf.io/" target="_blank">
                <img src="/sponsors/golden_elf.webp" alt="Golden elf" />
              </a>
              <a href="https://www.theempire.tech/" target="_blank">
                <img src="/sponsors/the-empire.webp" alt="The Empire" />
              </a>
              <a href="#">
                <img src="/sponsors/fulgol.webp" alt="Fulgol" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Modal title="Ganadores Hackaton" open={openModal} isClose={isClose} setOpenModal={setOpenModal}>
        <Winner
          top="1"
          team="The flooppers"
          git="https://github.com/NFTGoldenElf"
          web="https://nft-dapp-golden-elf-front-qhks.vercel.app/"
        />
        <Winner
          top="2"
          team="The Impostor"
          git="https://github.com/galu7777/ngold_goldenelf/tree/feature/connect-smart-contract"
        />
        <Winner
          top="3"
          team="Weback01"
          git="https://github.com/Armegas/Hackthon-WEB3/tree/main"
        />
        <Winner
          top="3"
          team="La triada"
          git="https://github.com/corolima3/la-triada-hackathon"
          web="https://la-triada-hackathon-eight.vercel.app/"
        />
      </Modal>
    </>
  );
};

export default Tournament;
