import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-social container">
            <SocialNetworks 
                gmail ="thenocturneowls@gmail.com"
                discord="https://discord.gg/EBAcH6N9"
                github = "https://github.com/Nocturnes-Owls"
                instagram = "https://www.instagram.com/buhos__nocturnos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                youtube = "https://www.youtube.com/channel/UCXeKWXmLaSLvLjPdctfoQyA"
            />
            <nav className="nav">
                <a href="#" className="nav-link">Inicio</a>
                <a href="#about" className="nav-link">Nosotros</a>
                <a href="#community" className="nav-link">Comunidad</a>
                <a href="#tournament" className="nav-link">Torneos</a>
                <a href="#contact" className="nav-link">Contacto</a>
                <a href="#team" className="nav-link">Equipo</a>
            </nav>
        </div>
        <div className="copyright">
            <p>©2024 Designed By Nocturne Owls</p>
        </div>
    </footer>
  )
}

export default Footer