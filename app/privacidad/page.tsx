"use client";

import React from "react";

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
          </h1>
          <p className="text-xs text-slate-400 mb-8 font-mono">
            Última actualización: 20 de mayo de 2026 | De conformidad con la Ley 1581 de 2012 (Colombia)
          </p>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">1. Identificación del Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales recolectados a través de este portal web es **Aso Ai Solutions** (en adelante, &quot;Aso Ai Solutions&quot; o el &quot;Responsable&quot;), con canales de contacto oficiales a través del correo electrónico de atención de datos personales: <a href="mailto:soporte@asoaisolutions.com" className="text-cyan-400 hover:underline">soporte@asoaisolutions.com</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">2. Marco Legal</h2>
              <p>
                Esta Política de Privacidad y Tratamiento de Datos Personales se rige bajo la **Ley Estatutaria 1581 de 2012** de la República de Colombia, reglamentada por el **Decreto 1377 de 2013** y compilada en el **Decreto 1074 de 2015**, relativos a la protección de datos personales (Habeas Data).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">3. Datos Personales que Recolectamos</h2>
              <p>
                Para el cumplimiento de las finalidades descritas en esta política, Aso Ai Solutions recolectará los siguientes datos a través del formulario de contacto:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>Nombre completo o del contacto comercial.</li>
                <li>Nombre comercial del taller mecánico.</li>
                <li>Número de teléfono celular (habilitado para WhatsApp).</li>
                <li>Dirección de correo electrónico.</li>
              </ul>
              <p>
                No recolectamos ni tratamos datos de carácter sensible (aquellos que afectan la intimidad del titular o cuyo uso indebido puede generar discriminación), ni datos personales de menores de edad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">4. Finalidad del Tratamiento de Datos</h2>
              <p>
                Los datos personales capturados serán tratados con las siguientes finalidades comerciales e informativas:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>Agendar, coordinar y realizar la auditoría gratuita sobre los procesos de comunicación del taller del usuario.</li>
                <li>Enviar propuestas técnicas, comerciales y cotizaciones personalizadas relativas a las automatizaciones con Inteligencia Artificial.</li>
                <li>Ponerse en contacto con el Titular mediante llamadas o chats automáticos de WhatsApp con el fin de resolver dudas sobre los servicios.</li>
                <li>Dar soporte y responder a solicitudes de Peticiones, Quejas, Reclamos y Sugerencias (PQRS).</li>
                <li>Realizar análisis estadísticos internos encaminados a la mejora de nuestros productos y servicios.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">5. Derechos de los Titulares de los Datos</h2>
              <p>
                De acuerdo con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales cuenta con los siguientes derechos frente a Aso Ai Solutions:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>**Conocer, actualizar y rectificar** sus datos personales frente a los Responsables o Encargados del tratamiento.</li>
                <li>**Solicitar prueba de la autorización** otorgada al Responsable, salvo cuando expresamente se exceptúe en la ley.</li>
                <li>**Ser informado**, previa solicitud, respecto del uso que se le ha dado a sus datos personales.</li>
                <li>**Presentar quejas** ante la Superintendencia de Industria y Comercio (SIC) por infracciones a lo dispuesto en la ley.</li>
                <li>**Revocar la autorización y/o solicitar la supresión** del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                <li>**Acceder de forma gratuita** a sus datos personales que hayan sido objeto de tratamiento.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">6. Procedimiento para el Ejercicio de los Derechos (Habeas Data)</h2>
              <p>
                Los Titulares de la información pueden ejercer sus derechos a conocer, actualizar, rectificar y suprimir sus datos o revocar su autorización, enviando una comunicación formal al correo electrónico: <a href="mailto:soporte@asoaisolutions.com" className="text-cyan-400 hover:underline">soporte@asoaisolutions.com</a>.
              </p>
              <p>
                La solicitud deberá contener la identificación del titular (nombre completo, cédula de ciudadanía o NIT), descripción de los hechos que dan lugar a la consulta o reclamo y la información de contacto para enviar la respuesta.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-450 text-xs sm:text-sm">
                <li>**Consultas:** Serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de su recibo. Si no fuere posible resolverla en dicho plazo, se informará al solicitante y se le concederá un término adicional no mayor a cinco (5) días hábiles.</li>
                <li>**Reclamos/Supresiones:** Serán atendidos en un término máximo de quince (15) días hábiles. Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días hábiles siguientes para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento sin que se presente la información requerida, se entenderá que ha desistido del reclamo.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">7. Seguridad de la Información</h2>
              <p>
                Aso Ai Solutions adopta medidas técnicas, de software y de seguridad administrativas razonables para proteger la base de datos de accesos no autorizados, pérdidas, adulteración o divulgación maliciosa. No compartimos ni vendemos bases de datos de leads a terceros ajenos a los servicios descritos.
              </p>
            </section>

            <section className="space-y-3 font-semibold text-slate-400 text-xs mt-6 pt-4 border-t border-slate-800">
              <p>
                Esta política podrá ser modificada en cualquier momento por razones comerciales o regulatorias. Todo cambio sustancial será comunicado oportunamente a través de nuestro sitio web oficial.
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
            <a href="/terminos" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a>
            <a href="/privacidad" className="hover:text-cyan-400 transition-colors text-cyan-450">Política de Privacidad</a>
            <a href="/soporte" className="hover:text-cyan-400 transition-colors">Soporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
