import '../styles/header.css'
export default function Header() {
    return (
        <header className="header">
            <div className="logo">cinmax</div>
            <div className="dropdowns">
                <select className="dropdown">
                    <option value="">Seleccione una ciudad</option>
                    <option value="manizales">Manizales</option>
                    <option value="bogota">Bogotá</option>
                    <option value="medellin">Medellín</option>
                </select>
                <select className="dropdown">
                    <option value="">Seleccione un cine</option>
                    <option value="cine1">Cinépolis Mallplaza</option>
                    <option value="cine2">Cinépolis Unicentro</option>
                    <option value="cine3">Cinépolis Gran Estación</option>
                </select>
                <button className="btn cartelera">VER CARTELERA</button>
            </div>
        </header>
    )
}