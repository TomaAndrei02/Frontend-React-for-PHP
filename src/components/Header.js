import imgHeader from "./images/kids_rock.png"

export default function Header() {
    return (
        <header className="header">
            <h1 className="header_title">CLASS LIST</h1>
            <img src={imgHeader} className="img_header" alt="kids-rocker"/>
            <a className="link" href="http://localhost:8080/register">LOGIN</a>
        </header>
    )
}