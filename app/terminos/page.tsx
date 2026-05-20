"use client";

import React from "react";

export default function TerminosServicio() {
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

      {/* CONTENT */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 sm:px-8">
        <div className="bg-slate-900/50 border border-slate-900/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative">
          
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-t-3xl" />
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-50 via-slate-100 to-cyan-300 bg-clip-text text-transparent mb-2">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-xs text-slate-400 mb-8 font-mono">
            Última actualización: 20 de mayo de 2026 | De conformidad con la Ley 1480 de 2011 (Estatuto del Consumidor de Colombia)
          </p>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">1. Aceptación de los Términos</h2>
              <p>
                Al acceder, navegar o utilizar este sitio web y los formularios de solicitud de auditoría provistos por **Aso Ai Solutions** (en adelante, los &quot;Servicios&quot;), usted acepta expresamente quedar vinculado por los presentes Términos y Condiciones de Servicio. Si no está de acuerdo con alguna de las cláusulas aquí descritas, deberá abstenerse de usar este portal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">2. Descripción de los Servicios</h2>
              <p>
                Aso Ai Solutions es un proveedor tecnológico especializado en el desarrollo e implementación de sistemas de automatización con Inteligencia Artificial integrados con WhatsApp API, n8n y Google Sheets, optimizados para la gestión de talleres automotrices.
              </p>
              <p>
                El objeto de esta landing page es meramente informativo y de captación de leads para la prestación de auditorías gratuitas de comunicación y cotización de servicios tecnológicos de desarrollo de bots B2B.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">3. Obligaciones y Declaraciones del Usuario</h2>
              <p>
                Al enviar el formulario de solicitud, el usuario declara y garantiza:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>Que la información proporcionada (nombre, taller, teléfono, correo) es verídica, exacta y actualizada.</li>
                <li>Que actúa en representación legal o cuenta con autorización expresa del taller mecánico para solicitar propuestas comerciales.</li>
                <li>Que no utilizará el bot simulado o los servicios de Aso Ai Solutions para conductas fraudulentas, envío de spam, o infracción de las leyes colombianas.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">4. Exclusión de Responsabilidad sobre Terceros</h2>
              <p>
                Nuestras soluciones tecnológicas se integran con plataformas y APIs de terceros proveedores (específicamente **WhatsApp Inc.** / **Meta Platforms, Inc.** y **Google LLC**). 
              </p>
              <p>
                El usuario entiende y acepta que:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>El uso comercial de la API de WhatsApp está sujeto a las Políticas de Comercio y de Mensajería de Meta.</li>
                <li>Aso Ai Solutions no tiene control sobre las políticas ni las decisiones de suspensión de cuentas por parte de Meta si el usuario hace un uso inadecuado o invasivo (Spam) de los canales autorizados.</li>
                <li>La disponibilidad del servicio de automatización depende en última instancia de la infraestructura de dichos terceros.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">5. Propiedad Intelectual</h2>
              <p>
                Todos los derechos de propiedad intelectual, marcas, diseños comerciales, logos, códigos de programación (HTML, CSS, React, TypeScript), estructuras lógicas de bots desarrolladas y textos presentes en este portal pertenecen a Aso Ai Solutions. Queda prohibida la reproducción total o parcial, explotación, distribución o ingeniería inversa sin consentimiento previo y por escrito del titular.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">6. Reclamaciones, PQRS y Estatuto del Consumidor</h2>
              <p>
                De acuerdo con la **Ley 1480 de 2011 (Estatuto del Consumidor de Colombia)**, regulamos los procesos de comercio electrónico y atención directa. El usuario dispone de canales de comunicación habilitados para radicar sus Peticiones, Quejas, Reclamos y Sugerencias (PQRS).
              </p>
              <p>
                Dichas solicitudes podrán gestionarse directamente en nuestra sección dedicada de <a href="/soporte" className="text-cyan-400 hover:underline">Soporte y PQRS</a>, o escribiendo al correo electrónico <a href="mailto:soporte@asoaisolutions.com" className="text-cyan-400 hover:underline">soporte@asoaisolutions.com</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">7. Modificaciones a las Condiciones</h2>
              <p>
                Aso Ai Solutions se reserva el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento sin previo aviso. Le recomendamos consultar de forma periódica este documento para mantenerse al tanto de las reglas que rigen el servicio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">8. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos términos se regirán e interpretarán de conformidad con las leyes de la República de Colombia. Cualquier controversia derivada del uso del sitio web o de la adquisición de los desarrollos será dirimida en primera instancia amigablemente, y de persistir, ante los juzgados ordinarios competentes y/o la Superintendencia de Industria y Comercio (SIC) en el territorio colombiano.
              </p>
            </section>
          </div>

        </div>
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
            <a href="/terminos" className="hover:text-cyan-400 transition-colors text-cyan-450">Términos de Servicio</a>
            <a href="/privacidad" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
            <a href="/soporte" className="hover:text-cyan-400 transition-colors">Soporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
