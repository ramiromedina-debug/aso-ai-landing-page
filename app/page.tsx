"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  // Environment variables with fallback defaults
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "573332773006";
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://primary-production-81431.up.railway.app/webhook/leads";

  // Form State
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    nombreTaller: "",
    telefono: "",
    correo: "",
    habeasData: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  // Track page view or initial setups
  useEffect(() => {
    // Check if dataLayer exists, initialize it if not
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
    }
  }, []);
// Motor de Scroll Optimizado: Solo maneja la rueda del ratón en computadoras
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Si el usuario está en un celular o tablet, el CSS se encarga de todo de forma nativa
      if (window.innerWidth < 768) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollHeight <= clientHeight + 1) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown && scrollTop + clientHeight >= scrollHeight - 1) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      } else if (isScrollingUp && scrollTop <= 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
  // WhatsApp Demo CTA Action
  const handleWhatsAppDemoClick = () => {
    // GTM Event Tracking
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "demo_whatsapp_click",
        timestamp: new Date().toISOString(),
      });
      console.log("GTM Event pushed: demo_whatsapp_click");
    }

    // Dynamic WA API wa.me redirect
    const waText = encodeURIComponent(
      "Hola, quiero probar la demo automática del estado de reparación para mi taller"
    );
    window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank", "noopener,noreferrer");
  };

  // Form Field Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Lead Generation Submit Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const isDemoMode = !webhookUrl || webhookUrl.trim() === "" || webhookUrl.includes("primary-production.up.railway.app");

      if (isDemoMode) {
        // Simulate a minor network delay for high fidelity UX feel
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("Simulación de envío de datos activa (Webhook URL de n8n pendiente o vacía).");
      } else {
        // Real production request to n8n webhook
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            source: "Landing Page B2B",
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Ocurrió un error al enviar los datos a n8n. Por favor, intenta de nuevo.");
        }
      }

      // Success logic
      setSuccess(true);

      // GTM Event Tracking (Meta Ads Trigger)
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_form_submitted",
          leadData: {
            nombreTaller: formData.nombreTaller,
            correo: formData.correo,
            telefono: formData.telefono,
            nombreCompleto: formData.nombreCompleto,
          },
          timestamp: new Date().toISOString(),
        });
        console.log("GTM Event pushed: lead_form_submitted");
      }

      // Clear Form
      setFormData({
        nombreCompleto: "",
        nombreTaller: "",
        telefono: "",
        correo: "",
        habeasData: false,
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Error al conectar con el servidor de automatización.");
    } finally {
      setLoading(false);
    }
  };

  // Scroll to Form helper
  const scrollToForm = () => {
    const element = document.getElementById("lead-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS (Sleek technical glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute top-[60vh] right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 select-none">
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
          </div>

          {/* CTA AGENDAR */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-slate-700 text-slate-300 font-medium text-xs sm:text-sm bg-transparent hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Agendar Auditoría
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6 sm:px-8 sm:py-10 lg:py-12">
        
        {/* HERO CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT: TEXT AND DEMO CALL */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              Especializado para Talleres Mecánicos
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 leading-[1.15] mb-4">
            La plataforma de IA que <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">automatiza las cotizaciones</span>, el inventario y la asistencia técnica de tu taller automotriz
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
              Automatiza las actualizaciones y presupuestos de tu taller con inteligencia artificial conectada a tu WhatsApp. Una solución de <span className="text-cyan-400 font-semibold">Aso Ai Solutions</span>.
            </p>

            {/* DEMO BLOCK */}
            <div className="relative flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
              {/* Neon Button */}
              <button
                onClick={handleWhatsAppDemoClick}
                className="group relative w-full sm:w-auto px-8 py-4 sm:py-5 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-base sm:text-lg tracking-wide hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                {/* Custom glowing border pulse effect */}
                <span className="absolute inset-0 rounded-2xl border-2 border-cyan-300 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                
                {/* WhatsApp Dynamic Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.068 1.957 12 1.957c-5.437 0-9.862 4.372-9.866 9.802-.001 1.765.485 3.49 1.408 5.011l-.955 3.49 3.57-.936zm11.367-7.251c-.33-.164-1.951-.964-2.251-1.074-.3-.109-.518-.164-.736.164-.218.327-.844 1.074-1.034 1.293-.19.218-.379.245-.71.082-.33-.164-1.393-.513-2.653-1.638-.98-.874-1.641-1.953-1.833-2.28-.192-.327-.02-.504.145-.668.148-.148.33-.382.495-.573.165-.19.22-.328.33-.546.11-.218.055-.41-.028-.573-.082-.164-.736-1.774-1.009-2.43-.267-.64-.538-.553-.736-.563-.19-.01-.409-.012-.627-.012-.218 0-.573.082-.872.41-.3.327-1.144 1.118-1.144 2.729 0 1.61 1.172 3.166 1.335 3.385.164.218 2.307 3.522 5.59 4.939.78.337 1.39.539 1.86.688.784.248 1.497.213 2.06.129.627-.094 1.951-.797 2.225-1.568.273-.769.273-1.428.191-1.567-.082-.14-.299-.22-.63-.383z" />
                </svg>
                Prueba el Bot Ahora
              </button>

              {/* Hand-drawn styled straight arrow pointing to the button */}
              <div className="absolute left-[102%] top-[20%] w-36 h-12 hidden lg:block text-cyan-500 select-none pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Straight line with a natural hand-drawn slight slant */}
                  <path
                    d="M120 15 L 20 25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Arrowhead pointing down-left at (20, 25) */}
                  <path
                    d="M36 17 L 18 25 L 34 33"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="absolute -bottom-4 left-3 text-xs font-mono font-medium text-cyan-400 tracking-wider rotate-[-2deg]">
                  ¡Haz la prueba!
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: SMARTPHONE WHATSAPP SIMULATION MOCKUP */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none">
            
            {/* Ambient Background Glow behind Phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px]" />
            
            {/* Phone Case Frame */}
            <div className="relative w-[320px] h-[640px] bg-slate-950 border-[6px] border-slate-800 rounded-[45px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col ring-1 ring-slate-800">
              
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/50" />
                <div className="w-10 h-1 bg-slate-950 rounded-full" />
              </div>

              {/* Dynamic Sim Carrier & Battery Header Bar */}
              <div className="bg-slate-900 text-[10px] font-semibold text-slate-400 px-8 pt-6 pb-2 flex justify-between items-center select-none">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  {/* Network Node Indicator */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                  </svg>
                  <span>5G</span>
                  {/* Battery */}
                  <div className="w-5 h-2.5 border border-slate-500 rounded px-0.5 py-[1px] flex items-center">
                    <div className="w-full h-full bg-cyan-400 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* WhatsApp App Header */}
              <div className="bg-slate-900 border-b border-slate-800/80 px-4 py-3 flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm">
                    AI
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-slate-900" />
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-sm font-bold text-slate-100 leading-tight">Aso Ai Solutions</span>
                  <span className="text-[10px] text-green-400 font-medium">Bot Activo • En Línea</span>
                </div>
                {/* Audio/Video Icons */}
                <div className="flex items-center gap-3 text-cyan-400">
                  <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
              </div>

              {/* Chat Messages Body */}
<div
  ref={chatContainerRef}
  className="flex-grow md:flex-1 bg-slate-950 p-4 overflow-y-auto space-y-4 text-xs pointer-events-none md:pointer-events-auto"
>
                
                {/* SYSTEM MESSAGE TIMESTAMP */}
                <div className="flex justify-center">
                  <span className="bg-slate-900/60 text-slate-400 px-3 py-1 rounded-lg text-[9px] font-semibold tracking-wider">
                    HOY
                  </span>
                </div>

                {/* WORKSHOP MESSAGE 1 */}
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-3 shadow-md space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-cyan-400 font-semibold">Taller Premium</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-[9px] text-slate-500">Reparación en curso 🚗</span>
                    </div>
                    <p className="leading-relaxed font-medium">
                      ¿Pierdes 3 horas al día respondiendo WhatsApp sobre el estado de los vehículos?
                    </p>
                    <span className="text-[8px] text-slate-500 float-right mt-1">9:42 AM</span>
                  </div>
                </div>

                {/* WORKSHOP MESSAGE 2 */}
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-3 shadow-md space-y-1">
                    <p className="leading-relaxed">
                      Automatiza las actualizaciones del taller con una Inteligencia Artificial conectada a tu WhatsApp.
                    </p>
                    <span className="text-[8px] text-slate-500 float-right mt-1">9:42 AM</span>
                  </div>
                </div>

                {/* CLIENT RESPONSE MESSAGE */}
                <div className="flex items-start justify-end gap-2 max-w-[85%] ml-auto">
                  <div className="bg-cyan-950 border border-cyan-800/40 text-cyan-100 rounded-2xl rounded-tr-none p-3 shadow-md space-y-1">
                    <p className="leading-relaxed font-medium">
                      Excelente, ¡ahorramos muchísimo tiempo y los clientes están encantados! 🙌✨
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[8px] text-cyan-500">9:43 AM</span>
                      <svg className="w-3.5 h-3.5 fill-cyan-400" viewBox="0 0 24 24">
                        <path d="M18 7l-1.41-1.41-6.34 6.34 3.53 3.53L18 7zm4.24-1.41L11.66 16.17l-3.53-3.53-1.41 1.41 4.94 4.94 12-12-1.42-1.41z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* WORKSHOP MESSAGE 3 (Interactive prompt simulation) */}
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-3 shadow-md space-y-1.5">
                    <p className="leading-relaxed">
                      Escribe el número de matrícula (ej: <span className="font-bold text-cyan-400">ABC-1234</span>) o haz clic abajo para iniciar la demo.
                    </p>
                    <div className="pt-2">
                     <button
  onClick={handleWhatsAppDemoClick}
  className="w-full py-1.5 px-3 rounded-lg bg-cyan-500 text-slate-950 text-[10px] font-bold text-center hover:bg-cyan-400 transition-colors shadow-sm cursor-pointer pointer-events-auto"
>
  🚀 Iniciar Demo Automática
</button>
                    </div>
                    <span className="text-[8px] text-slate-500 float-right mt-1">9:44 AM</span>
                  </div>
                </div>

              </div>

              {/* Chat Keyboard Input Footer */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-t border-slate-800/80">
                <svg className="w-5 h-5 fill-slate-400" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <div className="flex-1 bg-slate-950 border border-slate-850 rounded-full px-4 py-1.5 text-[11px] text-slate-400">
                  Escribe un mensaje...
                </div>
                <svg className="w-5 h-5 fill-cyan-400" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                </svg>
              </div>

            </div>

            {/* Accent Sparkle Grid elements */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 text-cyan-500/20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="3" fill="#06b6d4" />
              </svg>
            </div>
            
          </div>

        </div>

        {/* BENEFICIOS GRID (Adds hyper-professionalism) */}
        <section className="py-20 border-t border-slate-900 mt-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 mb-4">
              ¿Por qué los talleres eligen a Aso Ai Solutions?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Implementamos sistemas de automatización robustos diseñados específicamente para resolver los mayores dolores de cabeza de los dueños de talleres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-950/40 rounded-xl border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-5">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.79L11 13.5V7h1.5v5.78l3.7 2.22-.91 1.79z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Respuestas 24/7 sin esfuerzo</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Tus clientes pueden consultar el estado de reparación de sus autos a cualquier hora del día o de la noche, de forma instantánea.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-950/40 rounded-xl border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-5">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Presupuestos y Aprobación</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Envía cotizaciones digitales profesionales directamente a sus chats de WhatsApp y permite que aprueben los servicios con un solo toque.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-950/40 rounded-xl border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-5">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Control por Google Sheets</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Toda la información se sincroniza automáticamente con hojas de cálculo para que no tengas que lidiar con sistemas complejos ni software costoso.
              </p>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE FORM SECTION */}
        <section id="lead-form-section" className="py-12 sm:py-16 scroll-mt-24">
          <div className="max-w-2xl mx-auto">
            
            {/* FORM CARD */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {/* Symmetrical cyan top border accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-t-3xl" />

              {/* Success State */}
              {success ? (
                <div className="text-center py-10 space-y-6">
                  {/* High Tech Animated Checkmark */}
                  <div className="w-16 h-16 bg-cyan-950/60 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto text-cyan-400 animate-bounce">
                    <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-50">¡Solicitud Enviada con Éxito!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Hemos recibido tu información. Un especialista de <span className="text-cyan-400 font-semibold">Aso Ai Solutions</span> se pondrá en contacto contigo por WhatsApp en menos de 24 horas laborables para agendar tu auditoría.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 text-xs sm:text-sm font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      Volver a ver el formulario
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8 space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight">
                      Obtén una Auditoría Gratuita
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                      Analizamos los dolores de comunicación de tu taller y diseñamos una solución a medida conectada a tu WhatsApp.
                    </p>
                  </div>

                  {/* Native React Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error message panel */}
                    {errorMsg && (
                      <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-400 flex items-center gap-2">
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* FIELDS ROW 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          name="nombreCompleto"
                          required
                          value={formData.nombreCompleto}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu nombre"
                          className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-3 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">
                          Nombre del Taller
                        </label>
                        <input
                          type="text"
                          name="nombreTaller"
                          required
                          value={formData.nombreTaller}
                          onChange={handleInputChange}
                          placeholder="Ej: Auto Servicio Premium"
                          className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-3 text-sm transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* FIELDS ROW 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">
                          Teléfono (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="Ej: +34 600 000 000"
                          className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-3 text-sm transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          name="correo"
                          required
                          value={formData.correo}
                          onChange={handleInputChange}
                          placeholder="ejemplo@correo.com"
                          className="w-full bg-slate-950 border border-slate-800 text-slate-50 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-3 text-sm transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* HABEAS DATA CHECKBOX */}
                    <div className="flex items-start gap-2.5 px-1 py-1">
                      <input
                        type="checkbox"
                        id="habeasData"
                        name="habeasData"
                        required
                        checked={formData.habeasData}
                        onChange={(e) => setFormData(prev => ({ ...prev, habeasData: e.target.checked }))}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950 cursor-pointer"
                      />
                      <label htmlFor="habeasData" className="text-xs text-slate-400 leading-normal select-none cursor-pointer">
                        Autorizo el tratamiento de mis datos personales de acuerdo con la{" "}
                        <a href="/privacidad" target="_blank" className="text-cyan-400 hover:underline">
                          Política de Privacidad
                        </a>{" "}
                        y acepto los{" "}
                        <a href="/terminos" target="_blank" className="text-cyan-400 hover:underline">
                          Términos de Servicio
                        </a>.
                      </label>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                          loading ? "opacity-75 cursor-not-allowed" : "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-[0.98]"
                        }`}
                      >
                        {loading ? (
                          <>
                            {/* Loading Spinner */}
                            <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Procesando Solicitud...
                          </>
                        ) : (
                          "Solicitar Auditoría y Precios a Aso Ai Solutions"
                        )}
                      </button>
                    </div>

                    {/* Security note */}
                    <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                      * Tus datos de contacto están 100% seguros con nosotros. Solo los utilizaremos para comunicarnos directamente contigo en relación a la automatización de tu taller.
                    </p>
                  </form>
                </>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/40 px-4 py-8 sm:px-8 mt-auto select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-slate-300">Aso Ai Solutions</span>
            </div>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Aso Ai Solutions. Todos los derechos reservados.
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="/terminos" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a>
            <a href="/privacidad" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
            <a href="/soporte" className="hover:text-cyan-400 transition-colors">Soporte</a>
          </div>

          {/* GTM Tag Indicator (Looks hyper professional and technical) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            GTM Tracking Active
            <span className="text-cyan-500 font-semibold">&lt;/&gt;</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
