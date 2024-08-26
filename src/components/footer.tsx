import '../styles/footer.css'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className='footer'>
            <div className='iconos'>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://facebook.com"><FaFacebook /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://github.com"><FaGithub /></a>
            </div>
        </footer>
    )
}