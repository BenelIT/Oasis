import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, X, ArrowUpRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/oasis-logo.png";
import otter from "@/assets/otter-guide.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/parque", label: "El parque" },
  { to: "/conservacion", label: "Conservación" },
  { to: "/convocatorias", label: "Convocatorias" },
  { to: "/eventos", label: "Eventos" },
  { to: "/investigacion", label: "Investigación" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <header className="site-header" data-ready={ready}>
        <div className="site-width header-inner">
          <Link to="/" className="brand" aria-label="El Oasis — Inicio">
            <img
              src={logo}
              width="68"
              height="68"
              alt="Logo del Parque Natural Ecoturístico El Oasis"
            />
            <span>
              <span className="brand-name">El Oasis</span>
              <span className="brand-caption">Parque natural ecoturístico</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="warm" className="header-donate">
            <Link to="/participa">
              <Heart size={15} /> Participa
            </Link>
          </Button>

          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
          {open && (
            <nav className="mobile-nav" aria-label="Navegación móvil">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ))}
              <Link to="/participa" onClick={() => setOpen(false)}>
                Participa
              </Link>
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-width">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <img src={logo} width="68" height="68" alt="El Oasis" />
              <span>
                <span className="brand-name">El Oasis</span>
                <span className="brand-caption">Pasión e inclusión por el planeta</span>
              </span>
            </Link>
            <p className="mt-5">
              Un encuentro con la naturaleza.
              <br />
              Una comunidad para conservarla.
            </p>
          </div>
          <div>
            <h3>Descubre El Oasis</h3>
            <div className="footer-links">
              <Link to="/nosotros">Sobre nosotros</Link>
              <Link to="/parque">El parque y sus experiencias</Link>
              <Link to="/conservacion">Conservación y ADVC</Link>
              {/*TODO: <Link to="/blog">Novedades</Link>*/}
            </div>
          </div>
          <div>
            <h3>Sé parte</h3>
            <div className="footer-links">
              <Link to="/convocatorias">Voluntariado y convocatorias</Link>
              <Link to="/eventos">Eventos y cursos</Link>
              <Link to="/investigacion">Investigación</Link>
              <Link to="/participa">Participa</Link>
            </div>
          </div>
          <div>
            <h3>Nos encontramos en Chiapas</h3>
            <address>
              Nuevo Libramiento Sur, km 22.8,
              <br />
              Predio La Ceiba, Suchiapa, Chiapas.
              <br />
              México · C.P. 29150
            </address>
            <Link to="/contacto" className="inline-flex items-center gap-2 mt-3">
              Ubicación y contacto <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Parque Natural Ecoturístico El Oasis, A.C.</span>
          <span className="flex flex-wrap gap-5">
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/terminos">Términos de uso</Link>
            <Link to="/reglamento">Reglamento</Link>
          </span>
          <span className="flex items-center gap-1">
            <Leaf size={12} /> Conservar antes de crecer
          </span>
        </div>
      </div>
    </footer>
  );
}

export function OtterGuide() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <aside className="guide-panel" aria-label="Guía nutria">
          <div className="flex justify-between items-center">
            <h3>¡Hola, soy tu guía!</h3>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cerrar guía"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>
          <p>
            La nutria de río es una de las especies prioritarias del programa de monitoreo propuesto
            para El Oasis. ¡Cuidar su hábitat es cuidar el río!
          </p>
          <Button asChild variant="outline">
            <Link to="/conservacion" onClick={() => setOpen(false)}>
              Conoce la conservación <ArrowUpRight />
            </Link>
          </Button>
        </aside>
      )}
      <Button
        className="guide-button"
        variant="default"
        aria-expanded={open}
        aria-label="Hablar con la guía nutria"
        onClick={() => setOpen(!open)}
      >
        <img src={otter} width="32" height="32" alt="" className="h-8 w-8 object-contain" /> Tu guía
        Oasis <span aria-hidden="true">{open ? "−" : "+"}</span>
      </Button>
    </>
  );
}

export function OasisNotFound() {
  return (
    <main id="contenido" className="not-found">
      <img src={otter} width="210" height="210" alt="La nutria de El Oasis saludando" />
      <span className="section-eyebrow">404 · Fuera del sendero</span>
      <h1>¡Esta nutria se perdió en el río!</h1>
      <p>La página que buscas no está aquí. Volvamos al sendero.</p>
      <Button asChild>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
