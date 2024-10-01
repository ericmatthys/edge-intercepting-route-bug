export const runtime = 'edge';
 
export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log('### RootLayout');
  console.log('### params.locale:', params.locale);
  console.log('##################');
 
  return (
    <html lang={params.locale}>
      <body>
        <strong>Locale: {params.locale}</strong>
        {children}
      </body>
    </html>
  );
}