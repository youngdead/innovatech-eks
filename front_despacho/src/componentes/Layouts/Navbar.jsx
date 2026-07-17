function Navbar() {
  return (
    <nav className="rounded-xl w-[250px] min-h-[880px] bg-teal-600 text-white sticky top-0 p-4 m-4">
      {/* Logo o título con Badge de Versión e Indicador en Vivo */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">Despacho Dashboard</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-block text-[11px] bg-teal-900/50 text-emerald-300 border border-emerald-400/30 py-1 px-2.5 rounded-md font-semibold tracking-wide uppercase">
            v2.0 • CI/CD Activo
          </span>
          {/* Punto pulsante de estado Live */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* Menú de navegación */}
      <ul className="space-y-3">
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Usuarios
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block font-bold py-2 px-3 hover:bg-teal-700 rounded"
          >
            Configuración
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
