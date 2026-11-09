import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Talleres en Medellín y Talleres Mecánicos | ASO AI Solutions",
  description:
    "Especialistas en inteligencia artificial para talleres mecánicos e inteligencia artificial para talleres en Medellín. Automatiza estados de reparación en WhatsApp, presupuestos instantáneos y recordatorios de mantenimiento preventivo.",
  keywords: [
    "inteligencia artificial para talleres en medellin",
    "inteligencia artificial para talleres en medellín",
    "inteligencia artificial para talleres mecánicos",
    "ia para talleres mecanicos",
    "chatbot whatsapp taller mecanico",
    "software para talleres mecanicos en medellin",
    "automatizacion taller mecanico",
    "actualizacion automatica estado reparacion whatsapp",
    "aprobacion de cotizaciones taller mecanico",
    "ASO AI Solutions",
  ],
  alternates: {
    canonical: "https://asoaisolutions.com/inteligencia-artificial-para-talleres-mecanicos-medellin",
  },
  openGraph: {
    title: "Inteligencia Artificial para Talleres en Medellín y Talleres Mecánicos | ASO AI Solutions",
    description:
      "Moderniza tu taller automotriz en Medellín con agentes inteligentes de WhatsApp. Reduce llamadas por estados de reparación y aprueba presupuestos en minutos.",
    url: "https://asoaisolutions.com/inteligencia-artificial-para-talleres-mecanicos-medellin",
    siteName: "ASO AI Solutions Talleres",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://asoaisolutions.com/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Inteligencia Artificial para Talleres en Medellín - ASO AI Solutions",
      },
    ],
  },
};

export default function InteligenciaArtificialTalleresMedellinPage() {
  const faqs = [
    {
      q: "¿Cómo consultan los clientes el estado de reparación de su auto por WhatsApp?",
      a: "El cliente escribe el número de placa o su documento en el chat de WhatsApp de tu taller. El agente de IA consulta en tiempo real tu base de datos o sistema operativo (n8n, Supabase o Google Sheets) y responde en segundos con la fase actual del vehículo (diagnóstico, espera de repuestos, en reparación, listo para entrega), adjuntando fotografías del avance técnico sin que el mecánico tenga que suspender su trabajo.",
    },
    {
      q: "¿Necesito cambiar el número de WhatsApp actual de mi taller mecánico?",
      a: "No. Integramos la solución sobre tu línea de WhatsApp actual utilizando la API Oficial de WhatsApp Cloud (Meta). Tu número conserva todos tus contactos históricos y tus asesores humanos pueden intervenir en el chat en cualquier momento si un cliente requiere atención personalizada.",
    },
    {
      q: "¿Cómo acelera la IA la aprobación de presupuestos y repuestos?",
      a: "Cuando el mecánico elabora el diagnóstico, el sistema genera una proforma digital interactiva y la envía por WhatsApp al propietario con el desglose de piezas y mano de obra. El cliente puede aprobar o rechazar con un solo clic ('Aprobar reparación completa' o 'Cotizar repuestos genéricos'), reduciendo los tiempos muertos de carros ocupando elevadores.",
    },
    {
      q: "¿Por qué implementar inteligencia artificial para talleres en Medellín con ASO AI Solutions?",
      a: "Medellín cuenta con zonas neurálgicas de alto flujo automotriz como Barrio Colombia, Guayabal, La 33, Laureles, Belén e Itagüí. Contar con un aliado tecnológico con presencia local verificada (Carrera 79 # 57 - 65) garantiza soporte presencial, parametrización de flujos adaptados al mercado antioqueño y acompañamiento técnico directo.",
    },
    {
      q: "¿Cuánto tiempo toma poner a funcionar el sistema en mi taller automotriz?",
      a: "Nuestra arquitectura modular basada en n8n y microservicios nos permite desplegar el asistente de WhatsApp para estados de reparación y citas en un plazo de 3 a 5 días hábiles, sin interrumpir la operación cotidiana ni exigir complejas capacitaciones al equipo del taller.",
    },
  ];

  const soluciones = [
    {
      title: "Consulta Autónoma de Reparaciones por Placa",
      desc: "Los clientes consultan en WhatsApp: '¿Cómo va mi carro?' ingresando la placa. La IA devuelve el estado actual, reporte de repuestos y tiempo estimado de entrega.",
      badge: "-90% Llamadas al Taller",
    },
    {
      title: "Aprobación de Cotizaciones en 1 Clic",
      desc: "Envío automatizado de presupuestos detallados por WhatsApp con botones interactivos para autorizar mano de obra y repuestos de inmediato.",
      badge: "Cero Autos Varados",
    },
    {
      title: "Recordatorios de Cambio de Aceite y Mantenimiento",
      desc: "El sistema calcula el kilometraje promedio o fecha límite y envía recordatorios preventivos automatizados para cambio de aceite, frenos o revisión técnico-mecánica.",
      badge: "+35% Retención",
    },
    {
      title: "Recepción y Agendamiento 24/7 en WhatsApp",
      desc: "Atención continua que califica síntomas de averías, solicita fotos/audios del fallo y agenda la cita en las bahías disponibles del taller según el tipo de servicio.",
      badge: "Agenda Llena",
    },
    {
      title: "Cobro Automatizado de Anticipos y Saldos",
      desc: "Generación de enlaces de pago seguros (Wompi, PSE, transferencias) enviados por WhatsApp cuando el vehículo está listo para entrega, agilizando el flujo de caja.",
      badge: "Liquidez Inmediata",
    },
    {
      title: "Historial de Vehículos y Auditoría con n8n",
      desc: "Todos los datos de servicios, kilometrajes y clientes quedan sincronizados automáticamente en Supabase y hojas de control para análisis de rentabilidad.",
      badge: "Control Total",
    },
  ];

  const sectoresMedellin = [
    "Barrio Colombia (Zona de Talleres y Concesionarios)",
    "Guayabal y Calle 30",
    "Avenida La 33 y Laureles",
    "Belén y Rosales",
    "Itagüí y Centro de la Moda Automotriz",
    "Envigado y El Poblado",
    "Bello y Autopista Norte",
    "Sabaneta y Rionegro",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[800px] right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 select-none">
            <img
              src="/logo.png"
              className="w-10 h-10 rounded-xl object-cover shadow-[0_0_15px_rgba(6,182,212,0.2)] border border-slate-800"
              alt="ASO AI Solutions Logo"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                Aso Ai
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider text-cyan-400 font-semibold -mt-1">
                Solutions Talleres
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs sm:text-sm text-slate-300 hover:text-cyan-400 transition-colors hidden sm:block"
            >
              Inicio
            </Link>
            <a
              href="https://wa.me/573332773006?text=Hola,%20quiero%20conocer%20la%20solución%20de%20IA%20para%20talleres%20mecánicos%20en%20Medellín"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
            >
              Probar Demo WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 sm:px-8 sm:py-16">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-cyan-400">Inteligencia Artificial para Talleres en Medellín</span>
        </nav>

        {/* HERO HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            Especialistas en IA para el Sector Automotriz y Talleres en Medellín
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.15] mb-6">
            Inteligencia Artificial para <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Talleres en Medellín</span> y Talleres Mecánicos
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Elimina hasta el 90% de las llamadas y mensajes preguntando por el estado del auto. Automatiza presupuestos de repuestos, recepción de vehículos y recordatorios de cambio de aceite con un asistente inteligente en WhatsApp oficial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573332773006?text=Hola,%20quiero%20probar%20la%20demo%20automática%20del%20estado%20de%20reparación%20para%20mi%20taller"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-base hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Solicitar Demostración en Vivo</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.068 1.957 12 1.957c-5.437 0-9.862 4.372-9.866 9.802-.001 1.765.485 3.49 1.408 5.011l-.955 3.49 3.57-.936zm11.367-7.251c-.33-.164-1.951-.964-2.251-1.074-.3-.109-.518-.164-.736.164-.218.327-.844 1.074-1.034 1.293-.19.218-.379.245-.71.082-.33-.164-1.393-.513-2.653-1.638-.98-.874-1.641-1.953-1.833-2.28-.192-.327-.02-.504.145-.668.148-.148.33-.382.495-.573.165-.19.22-.328.33-.546.11-.218.055-.41-.028-.573-.082-.164-.736-1.774-1.009-2.43-.267-.64-.538-.553-.736-.563-.19-.01-.409-.012-.627-.012-.218 0-.573.082-.872.41-.3.327-1.144 1.118-1.144 2.729 0 1.61 1.172 3.166 1.335 3.385.164.218 2.307 3.522 5.59 4.939.78.337 1.39.539 1.86.688.784.248 1.497.213 2.06.129.627-.094 1.951-.797 2.225-1.568.273-.769.273-1.428.191-1.567-.082-.14-.299-.22-.63-.383z" />
              </svg>
            </a>
            <Link
              href="/#lead-form-section"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:bg-slate-900 hover:border-slate-600 transition-all text-center"
            >
              Cotizar para mi Taller
            </Link>
          </div>
        </div>

        {/* METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-16">
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">-90%</div>
            <div className="text-xs text-slate-400 mt-1">Llamadas de consulta de estado</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">3x</div>
            <div className="text-xs text-slate-400 mt-1">Velocidad en aprobar cotizaciones</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">+35%</div>
            <div className="text-xs text-slate-400 mt-1">Retención con recordatorios de aceite</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">24/7</div>
            <div className="text-xs text-slate-400 mt-1">Recepción autónoma de clientes</div>
          </div>
        </div>

        {/* SOLUTIONS GRID */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
              Módulos de Automatización con IA para Talleres Mecánicos
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Diseñados específicamente para resolver los cuellos de botella de la posventa automotriz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soluciones.map((sol, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
                    {sol.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{sol.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SEO MEDELLIN SECTION */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs text-cyan-400 font-medium mb-3">
              Cobertura Presencial y Soporte Local
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
              Inteligencia Artificial para Talleres en Medellín y Valle de Aburrá
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Acompañamos a talleres mecánicos, centros de servicio multimarcas y servitecas en los principales corredores automotrices de Medellín y municipios aledaños. Nuestra sede física en la ciudad nos permite brindar diagnósticos presenciales y optimizar la operativa de tu equipo técnico.
            </p>

            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
              Principales Zonas de Cobertura en Medellín:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 mb-8">
              {sectoresMedellin.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
              <strong className="text-slate-200">Sede Principal ASO AI Solutions:</strong> Carrera 79 # 57 - 65 / CL 77 C C CR 91 75 IN 301, Medellín, Antioquia. Contacto directo: +57 333 277 3006 | ramedina@goasoaisolutions.com.
            </div>
          </div>
        </section>

        {/* FAQS SECTION WITH SCHEMA */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
              Preguntas Frecuentes sobre IA para Talleres Mecánicos
            </h2>
            <p className="text-sm text-slate-400">
              Respuestas directas sobre la implementación de inteligencia artificial para talleres en Medellín.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-start gap-3">
                  <span className="text-cyan-400 font-mono text-sm shrink-0">0{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ Schema Script */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </section>

        {/* FINAL BANNER CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-50 mb-4">
            Empieza a Automatizar tu Taller Mecánico Hoy Mismo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
            Únete a los talleres que ya no pierden tiempo respondiendo '¿cómo va mi carro?' por WhatsApp. Agenda una demostración personalizada y descubre cuántas horas operativas puedes ahorrar cada mes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573332773006?text=Hola,%20quiero%20agendar%20una%20demostración%20para%20mi%20taller%20mecánico%20en%20Medellín"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-base hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Agendar Demostración (15 min)</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
              </svg>
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:bg-slate-900 transition-all text-center"
            >
              Volver a la Página Principal
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 px-4 py-8 sm:px-8 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ASO AI Solutions. Especialistas en Inteligencia Artificial para Talleres Mecánicos en Medellín.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-cyan-400 transition-colors">Términos</Link>
            <Link href="/soporte" className="hover:text-cyan-400 transition-colors">Soporte</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
