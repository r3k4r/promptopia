// import Nav from "./components/Nav";
import "./globals.css";
import Provider from "@/app/components/Provider";
import { ThemeProvider } from '@/ThemeProvider';
import Background from "./components/Background";

export const metadata = {
  title: "Promptopia",
  description: "promptopia for discovering and sharing AI prompts",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Provider >
        <ThemeProvider>
            <Background />

            <main className='app'>
              {/* <Nav /> */}
              {children}
            </main>
            </ThemeProvider>
        </Provider>    
    </body>
    </html>
  );
}
