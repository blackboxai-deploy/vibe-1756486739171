import './globals.css';

export const metadata = {
  title: 'WestRide Bénin - Covoiturage & ecomoto',
  description: 'Votre solution de covoiturage au Bénin. Services voiture et ecomoto disponibles.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F97316'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}