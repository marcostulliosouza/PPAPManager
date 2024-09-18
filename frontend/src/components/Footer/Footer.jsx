import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} PPAP Manager. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;