export default function Encaje() {
  return (
    <section id="encaje" className="bg-black text-white px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          No trabajamos para todo el mundo. Y eso es buena señal.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Encaja si */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-6">Encaja si</h3>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex gap-3">
                <span className="text-white flex-shrink-0">•</span>
                <span>Tu negocio ya se toma en serio su posicionamiento.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white flex-shrink-0">•</span>
                <span>Quieres que tu imagen esté a la altura de lo que cobras.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white flex-shrink-0">•</span>
                <span>Buscas estrategia, dirección y ejecución, no solo publicaciones.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white flex-shrink-0">•</span>
                <span>Valoras criterio creativo y coherencia de marca.</span>
              </li>
            </ul>
          </div>

          {/* No encaja si */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-400 mb-6">No encaja si</h3>
            <ul className="space-y-3 text-lg text-gray-400">
              <li className="flex gap-3">
                <span className="text-gray-500 flex-shrink-0">•</span>
                <span>Buscas contenido barato.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 flex-shrink-0">•</span>
                <span>Solo quieres que alguien te lleve Instagram.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 flex-shrink-0">•</span>
                <span>Necesitas volumen sin dirección.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 flex-shrink-0">•</span>
                <span>Quieres resultados serios sin implicarte en marca, mensaje y visión.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
