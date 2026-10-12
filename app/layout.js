import './globals.css';

export const metadata = {
  title: 'ATHETEC TECHNOLOGIES | Industrial Equipment Supplier & Turnkey Engineering Solutions',
  description: 'ATHETEC TECHNOLOGIES is a leading Haridwar-based Industrial & Engineering MSME specializing in Process Piping, IBR Piping, Storage Tanks, Heavy Structural Fabrication, and Machine Commissioning.',
  keywords: 'ATHETEC TECHNOLOGIES, industrial equipment supplier, Haridwar, BHEL Ranipur, SIDCUL, process piping, IBR piping, turnkey engineering, industrial fabrication, storage tanks, machine commissioning',
  authors: [{ name: 'ATHETEC TECHNOLOGIES' }],
  openGraph: {
    title: 'ATHETEC TECHNOLOGIES - Industrial & Engineering MSME',
    description: 'B2B Corporate Website, Product Machinery Catalog & Turnkey Engineering Solutions in Haridwar, Uttarakhand.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚙️</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
