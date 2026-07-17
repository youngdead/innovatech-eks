function Navbar() {
  return (
    <nav className="rounded-xl w-[250px] min-h-[880px] bg-teal-600 text-white sticky top-0 p-4 m-4 flex flex-col justify-between">
      
      {/* SECCIÓN SUPERIOR */}
      <div>
        {/* Banner de Entorno de Producción */}
        <div className="mb-8 p-3.5 bg-teal-900/40 rounded-lg border border-teal-500/30">
          <span className="block text-[9px] bg-emerald-400 text-teal-950 px-2 py-0.5 rounded font-black tracking-widest uppercase w-max mb-2">
            PROD ENVIRONMENT
          </span>
          <h2 className="text-xl font-black tracking-tight">Despacho App</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs text-emerald-300 font-medium">v2.0 • Pipeline Activo</span>
          </div>
        </div>

        {/* Menú de navegación */}
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="block font-bold py-2 px-3 hover:bg-teal-700 rounded transition-colors"
            >
              Usuarios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-bold py-2 px-3 hover:bg-teal-700 rounded transition-colors"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-bold py-2 px-3 hover:bg-teal-700 rounded transition-colors"
            >
              Configuración
            </a>
          </li>
        </ul>
      </div>

      {/* SECCIÓN INFERIOR: TARJETA DE ESTADO DE AWS (SÚPER NOTORIA) */}
      <div className="bg-teal-950/60 p-4 rounded-lg border border-teal-500/20 text-xs">
        <div className="flex justify-between items-center mb-2.5">
          <span className="font-bold uppercase tracking-wider text-teal-300 text-[10px]">Infraestructura</span>
          <span className="text-[9px] bg-teal-800 text-teal-200 px-1.5 py-0.5 rounded font-mono">AWS EKS</span>
        </div>
        
        <div className="space-y-2 font-medium text-teal-100">
          <div className="flex justify-between">
            <span>Estado Clúster:</span>
            <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span>Nodos Activos:</span>
            <span className="font-mono">3 / 3</span>
          </div>
          <div className="flex justify-between">
            <span>Namespace:</span>
            <span className="font-mono text-teal-300">tienda</span>
          </div>
        </div>

        <div className="mt-3.5 pt-2.5 border-t border-teal-800/60 flex items-center justify-between text-[10px] text-teal-300">
          <span>Desplegado con Git</span>
          <span className="text-emerald-400 font-bold">✔ OK</span>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;