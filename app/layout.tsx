import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";
import AuthProvider from "./_providers/auth";
import { Toaster } from "./_components/ui/sonner";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUICK BARBER | Encontre, Agende e Transforme seu Estilo!",
  description:
    "Descubra as melhores barbearias no QUICK BARBER. Agende cortes de cabelo, explore estilos únicos e mergulhe na praticidade de um agendamento simplificado. Sua jornada de estilo começa aqui, no QUICK BARBER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} dark`}>
        <AuthProvider>
          <Toaster/>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
