export const metadata = {
  title: 'AI Pickleball Coach',
  description: 'Personalized coaching via video analysis and chat.'
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: '#10B981',
                  'background-light': '#F9F9F9',
                  'background-dark': '#0a0a0a',
                  'text-primary': '#2D2D2D',
                  'text-secondary': '#6B7280',
                  'border-light': '#E5E5E5'
                },
                fontFamily: { display: ['Lexend', 'sans-serif'] },
                borderRadius: { DEFAULT: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px' }
              }
            }
          }
        ` }} />
        
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-primary dark:text-white min-h-screen">{children}</body>
    </html>
  )
}
