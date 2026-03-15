export default function Problema() {
  return (
    <section className="bg-black text-white px-6 py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          El problema no es publicar poco. Es comunicar por debajo de tu nivel.
        </h2>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            Muchas marcas hacen buen trabajo y aun así proyectan poco valor. No
            porque les falte talento, sino porque su contenido no sostiene su
            posicionamiento.
          </p>

          <p>
            Cuando tu imagen no transmite autoridad:
          </p>

          <ul className="space-y-3 text-gray-400">
            <li className="flex gap-3">
              <span className="text-white flex-shrink-0">—</span>
              <span>atraes clientes más sensibles al precio,</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white flex-shrink-0">—</span>
              <span>reduces confianza antes de la conversación,</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white flex-shrink-0">—</span>
              <span>compites donde no deberías,</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white flex-shrink-0">—</span>
              <span>y obligas a vender con más esfuerzo del necesario.</span>
            </li>
          </ul>

          <p className="text-xl pt-4">
            Una marca premium no solo debe ser buena. Debe parecer inevitable.
          </p>
        </div>
      </div>
    </section>
  );
}
