"use client";

import React, { useState } from "react";

export default function SoportePage() {
  // FAQs State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    nombreTaller: "",
    correo: "",
    tipoSolicitud: "Soporte Técnico",
    mensaje: "",
    habeasData: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const faqs = [
    {
      question: "¿Cómo se conecta el bot con mi cuenta de WhatsApp?",
      answer: "La conexión se realiza escaneando un código QR desde la opción 'Dispositivos vinculados' en tu WhatsApp Business, de la misma forma que conectas WhatsApp Web. El proceso toma menos de 2 minutos y no requiere conocimientos técnicos.",
    },
    {
      question: "¿Necesito tener mi computadora encendida todo el día?",
      answer: "No. El sistema de automatización de Aso Ai Solutions se ejecuta de manera segura en servidores en la nube de forma ininterrumpida (24/7), por lo que tus bots seguirán activos aunque apagues tus dispositivos locales.",
    },
    {
      question: "¿Cómo se actualizan los estados en Google Sheets?",
      answer: "Te proporcionamos una plantilla de Google Sheets con columnas preconfiguradas (Placa, Nombre Cliente, Teléfono, Estado de Reparación, Presupuesto). Cada vez que modificas o actualizas una fila, la Inteligencia Artificial lee la actualización en tiempo real y está lista para responder a tus clientes.",
    },
    {
      question: "¿Qué ocurre si el cliente hace una pregunta compleja o no estándar?",
      answer: "El bot cuenta con un sistema inteligente de detección. Si el cliente tiene dudas complejas, el bot pausará la automatización temporalmente para esa conversación y notificará a tu equipo humano mediante WhatsApp o correo electrónico para que tomes el control de forma manual.",
    },
    {
      question: "¿Cuáles son los tiempos legales de respuesta para una PQRS en Colombia?",
      answer: "De acuerdo con el Estatuto del Consumidor, las peticiones y soporte técnico se atienden prioritariamente en un plazo máximo de 3 a 5 días hábiles. Las quejas y reclamos formales se resuelven en un término no mayor a quince (15) días hábiles contados a partir de su radicación.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Simulación de envío del ticket de soporte/PQRS
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("PQRS Radicado exitosamente:", formData);
      setSuccess(true);
      setFormData({
        nombreCompleto: "",
        nombreTaller: "",
        correo: "",
        tipoSolicitud: "Soporte Técnico",
        mensaje: "",
        habeasData: false,
      });
    } catch (err: any) {
      setErrorMsg("Ocurrió un inconveniente al radicar la PQRS. Por favor intente más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS (Sleek technical glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[60vh] right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 select-none hover:opacity-90 transition-opacity">
            <img
              src="/logo.png"
              className="w-11 h-11 rounded-xl object-cover shadow-[0_0_15px_rgba(6,182,212,0.2)] border border-slate-800"
              alt="Aso Ai Solutions Logo"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                Aso Ai
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider text-cyan-400 font-semibold -mt-1">
                Solutions
              </span>
            </div>
          </a>

          {/* CTA VOLVER */}
          <a
            href="/"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-slate-700 text-slate-300 font-medium text-xs sm:text-sm bg-transparent hover:bg-slate-900 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Volver al Inicio
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 sm:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium">
            Centro de Ayuda y PQRS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            ¿En qué podemos ayudarte hoy?
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Resuelve tus dudas frecuentes o radica una solicitud de soporte, petición, queja o reclamo formal en nuestro canal digital de atención colombiana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: FAQS ACCORDION */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-50 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Preguntas Frecuentes (FAQs)
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-900 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-900/80 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-100 pr-4">
                      {faq.question}
                    </span>
                    <span className={`text-cyan-400 shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? "rotate-180" : ""}`}>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 pt-1 text-slate-350 text-xs sm:text-sm leading-relaxed border-t border-slate-950/60 bg-slate-950/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PQRS FORM CARD */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-t-3xl" />

              {success ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-cyan-950/60 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                    <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-50">¡Radicado Exitosamente!</h3>
                    <p className="text-slate-450 text-xs sm:text-sm leading-relaxed">
                      Tu solicitud de **{formData.tipoSolicitud}** ha sido recibida correctamente por Aso Ai Solutions. Hemos enviado una confirmación a tu correo electrónico y un asesor de soporte se comunicará contigo lo antes posible.
                    </p>
                  </div>

                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 text-xs font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  >
                    Radicar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-50">Formulario de PQRS</h2>
                    <p className="text-slate-450 text-xs">
                      Radica tu Petición, Queja, Reclamo o solicitud de Soporte Técnico conforme a la Ley 1480 de 2011.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-400">
                        {errorMsg}
                      </div>
                    )}

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-400">Nombre Completo</label>
                      <input
                        type="text"
                        name="nombreCompleto"
                        required
                        value={formData.nombreCompleto}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu nombre completo"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-650 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-2.5 text-xs sm:text-sm transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-400">Nombre del Taller (Opcional)</label>
                      <input
                        type="text"
                        name="nombreTaller"
                        value={formData.nombreTaller}
                        onChange={handleInputChange}
                        placeholder="Ej: Taller Automotriz Central"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-650 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-2.5 text-xs sm:text-sm transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-400">Correo Electrónico de Contacto</label>
                      <input
                        type="email"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-650 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-2.5 text-xs sm:text-sm transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-400">Tipo de Solicitud</label>
                      <select
                        name="tipoSolicitud"
                        value={formData.tipoSolicitud}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 text-slate-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-2.5 text-xs sm:text-sm transition-all duration-300"
                      >
                        <option value="Soporte Técnico">Soporte Técnico (Fallas/Dudas del Bot)</option>
                        <option value="Petición">Petición (Información de Planes/Características)</option>
                        <option value="Queja">Queja (Inconformidad con la Atención)</option>
                        <option value="Reclamo">Reclamo (Incumplimiento de Condiciones)</option>
                        <option value="Sugerencia">Sugerencia</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-400">Detalle de la Solicitud</label>
                      <textarea
                        name="mensaje"
                        required
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Describe detalladamente los hechos, fechas o requerimientos de tu soporte o PQRS..."
                        className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-650 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-2.5 text-xs sm:text-sm transition-all duration-300 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 px-0.5">
                      <input
                        type="checkbox"
                        id="habeasDataPQRS"
                        name="habeasData"
                        required
                        checked={formData.habeasData}
                        onChange={(e) => setFormData(prev => ({ ...prev, habeasData: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                      />
                      <label htmlFor="habeasDataPQRS" className="text-[10px] text-slate-450 leading-normal select-none cursor-pointer">
                        Autorizo el tratamiento de mis datos personales de conformidad con la <a href="/privacidad" target="_blank" className="text-cyan-400 hover:underline">Política de Privacidad</a> de Aso Ai Solutions para la tramitación de esta solicitud.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        loading ? "opacity-75 cursor-not-allowed" : "hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] active:scale-95"
                      }`}
                    >
                      {loading ? "Radicando PQRS..." : "Radicar PQRS"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CANALES DIRECTOS */}
        <section className="mt-16 pt-12 border-t border-slate-900">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-50 text-center mb-8">
            Canales Directos de Atención
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* WHATSAPP */}
            <a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-900/40 hover:bg-slate-900 border border-slate-900 rounded-2xl p-5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-950/30 border border-green-800/30 rounded-xl flex items-center justify-center text-green-400 shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.008.01C5.397.01.06 5.348.06 12.01c0 2.1.546 4.14 1.587 5.946L.057 24l6.59-1.728c1.75.955 3.72 1.456 5.72 1.457 6.612 0 11.95-5.34 11.954-12.002.002-3.203-1.24-6.216-3.506-8.484A11.89 11.89 0 0012.008.01zm6.59 17.251c-.33-.164-1.951-.964-2.251-1.074-.3-.109-.518-.164-.736.164-.218.327-.844 1.074-1.034 1.293-.19.218-.379.245-.71.082-.33-.164-1.393-.513-2.653-1.638-.98-.874-1.641-1.953-1.833-2.28-.192-.327-.02-.504.145-.668.148-.148.33-.382.495-.573.165-.19.22-.328.33-.546.11-.218.055-.41-.028-.573-.082-.164-.736-1.774-1.009-2.43-.267-.64-.538-.553-.736-.563-.19-.01-.409-.012-.627-.012-.218 0-.573.082-.872.41-.3.327-1.144 1.118-1.144 2.729 0 1.61 1.172 3.166 1.335 3.385.164.218 2.307 3.522 5.59 4.939.78.337 1.39.539 1.86.688.784.248 1.497.213 2.06.129.627-.094 1.951-.797 2.225-1.568.273-.769.273-1.428.191-1.567-.082-.14-.299-.22-.63-.383z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100">WhatsApp de Soporte</span>
                <span className="text-xs text-slate-400 leading-normal">Chatea en vivo para resolver dudas técnicas del bot.</span>
              </div>
            </a>

            {/* CORREO */}
            <a
              href="mailto:soporte@asoaisolutions.com"
              className="flex items-center gap-4 bg-slate-900/40 hover:bg-slate-900 border border-slate-900 rounded-2xl p-5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-950/30 border border-cyan-800/30 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100">Correo Electrónico</span>
                <span className="text-xs text-slate-400 leading-normal">Escríbenos directamente a soporte@asoaisolutions.com.</span>
              </div>
            </a>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/40 px-4 py-8 sm:px-8 mt-auto select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-bold tracking-tight text-slate-300">Aso Ai Solutions</span>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Aso Ai Solutions. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex gap-6 text-xs text-slate-500">
            <a href="/terminos" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a>
            <a href="/privacidad" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
            <a href="/soporte" className="hover:text-cyan-400 transition-colors text-cyan-450">Soporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
