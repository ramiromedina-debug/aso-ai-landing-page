import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://asoaisolutions.com"),
  title: {
    default: "Inteligencia Artificial para Talleres en Medellín y Talleres Mecánicos | ASO AI Solutions",
    template: "%s | ASO AI Solutions Talleres",
  },
  description:
    "Especialistas en inteligencia artificial para talleres mecánicos e inteligencia artificial para talleres en Medellín. Automatiza estados de reparación en WhatsApp, presupuestos instantáneos y recordatorios de mantenimiento preventivo con agentes de IA.",
  keywords: [
    "inteligencia artificial para talleres en medellin",
    "inteligencia artificial para talleres en medellín",
    "inteligencia artificial para talleres mecánicos",
    "ia para talleres mecanicos",
    "ia para talleres mecanicos medellin",
    "chatbot whatsapp taller mecanico",
    "software para talleres mecanicos en medellin",
    "automatizacion taller mecanico whatsapp",
    "actualizacion automatica estado reparacion whatsapp",
    "aprobacion de presupuestos por whatsapp taller",
    "recordatorios cambio de aceite whatsapp",
    "ASO AI Solutions",
  ],
  authors: [{ name: "ASO AI Solutions" }],
  alternates: {
    canonical: "https://asoaisolutions.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Inteligencia Artificial para Talleres en Medellín y Talleres Mecánicos | ASO AI Solutions",
    description:
      "Automatiza actualizaciones de estado de reparación y aprobación de presupuestos en tu taller con Inteligencia Artificial conectada a WhatsApp 24/7 en Medellín y Colombia.",
    url: "https://asoaisolutions.com",
    siteName: "ASO AI Solutions Talleres",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://asoaisolutions.com/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Inteligencia Artificial para Talleres Mecánicos en Medellín - ASO AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligencia Artificial para Talleres Mecánicos en Medellín | ASO AI Solutions",
    description:
      "Agentes de IA en WhatsApp para talleres mecánicos: estados de reparación, cotizaciones y recordatorios de cambio de aceite automáticos.",
    images: ["https://asoaisolutions.com/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TEST1234";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        {/* Preconnect & DNS-Prefetch */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://primary-production-81431.up.railway.app" />
        <link rel="dns-prefetch" href="https://primary-production-81431.up.railway.app" />

        {/* Favicons conformes a las directrices de Google Search (múltiplos de 48px) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Structured Data: AutoRepair + ProfessionalService + LocalBusiness + SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": [
                    "AutoRepair",
                    "ProfessionalService",
                    "LocalBusiness",
                    "SoftwareApplication",
                  ],
                  name: "ASO AI Solutions - Inteligencia Artificial para Talleres en Medellín",
                  alternateName: "ASO AI Solutions Talleres Mecánicos",
                  image: "https://asoaisolutions.com/icon-512x512.png",
                  logo: "https://asoaisolutions.com/logo.png",
                  url: "https://asoaisolutions.com",
                  telephone: "+573332773006",
                  email: "ramedina@goasoaisolutions.com",
                  priceRange: "$$",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web, WhatsApp Business Cloud API",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Carrera 79 # 57 - 65",
                    addressLocality: "Medellín",
                    addressRegion: "Antioquia",
                    postalCode: "050034",
                    addressCountry: "CO",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 6.2710601,
                    longitude: -75.5968659,
                  },
                  hasMap:
                    "https://www.google.com/maps/place/ASO+AI+SOLUTIONS+%7C+Agencia+de+inteligencia+artificial+en+Medellin/@6.2710601,-75.5968659,17z",
                  areaServed: [
                    "Medellín",
                    "Valle de Aburrá",
                    "Barrio Colombia",
                    "Guayabal",
                    "Laureles",
                    "Belén",
                    "Envigado",
                    "Itagüí",
                    "Sabaneta",
                    "Bello",
                    "Antioquia",
                    "Colombia",
                  ],
                  parentOrganization: {
                    "@type": "ProfessionalService",
                    name: "ASO AI Solutions",
                    url: "https://asoaisolutions.com",
                  },
                  sameAs: [
                    "https://www.google.com/maps/place/ASO+AI+SOLUTIONS+%7C+Agencia+de+inteligencia+artificial+en+Medellin/@6.2710601,-75.5968659,17z",
                  ],
                  description:
                    "Especialistas en inteligencia artificial para talleres mecánicos e inteligencia artificial para talleres en Medellín. Automatizamos la recepción de autos, consulta del estado de reparación por WhatsApp, cotizaciones y recordatorios de mantenimiento preventivo.",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Servicios de Inteligencia Artificial para Talleres Mecánicos",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Consulta Autónoma de Estado de Reparación en WhatsApp",
                          description:
                            "El cliente escribe la placa del vehículo y la IA responde al instante con el avance técnico, fotos y tiempo estimado de entrega.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Aprobación Rápida de Presupuestos y Cotizaciones",
                          description:
                            "Envío automático de presupuestos detallados por WhatsApp con botones interactivos para aprobación inmediata de repuestos y mano de obra.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Recordatorios Predictivos de Mantenimiento y Cambio de Aceite",
                          description:
                            "Sistemas autónomos que notifican a los conductores cuándo les toca su próximo mantenimiento por kilometraje o fecha.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Agendamiento Inteligente y Recepción de Vehículos 24/7",
                          description:
                            "Asistente conversacional en WhatsApp que asigna bahías de servicio y agenda citas sin saturar la recepción del taller.",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />

        {/* Google Tag Manager Container Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-300">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
