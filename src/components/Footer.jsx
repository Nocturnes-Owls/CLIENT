import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-social container">
            <SocialNetworks 
                gmail ="#"
                discord="https://discord.gg/EBAcH6N9"
                facebook = "#"
                instagram = "https://www.instagram.com/buhos__nocturnos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                youtube = "#"
            />
            <nav className="nav">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Nosotros</a>
                <a href="#" className="nav-link">Comunidad</a>
                <a href="#" className="nav-link">Torneos</a>
                <a href="#" className="nav-link">Contacto</a>
            </nav>
        </div>
        <div className="copyright">
            <p>©2024 Designed By Nocturne Owls</p>
        </div>
    </footer>
  )
}

export default Footer