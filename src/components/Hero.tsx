export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-32">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Si tu marca factura como premium pero se ve como una más, estás
          perdiendo autoridad antes de vender.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          En Pulso construimos sistemas de contenido audiovisual para marcas,
          expertos y agencias que necesitan una presencia visual sólida,
          coherente y claramente superior. No hacemos piezas sueltas. Diseñamos
          percepción, posicionamiento y confianza.
        </p>
        <p className="text-sm text-gray-500 mb-12 uppercase tracking-wide">
          Pocos clientes al mes. Alta implicación. Criterio creativo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#aplicar"
            className="px-8 py-4 bg-white text-black font-semibold rounded transition hover:bg-gray-100"
          >
            Aplicar para trabajar con Pulso
          </a>
          <a
            href="#encaje"
            className="px-8 py-4 border border-white text-white font-semibold rounded transition hover:bg-gray-900"
          >
            Ver si encajamos
          </a>
        </div>
      </div>
    </section>
  );
}
