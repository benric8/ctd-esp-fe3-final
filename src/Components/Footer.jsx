import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">

        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-sm font-light">Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" className="w-20 object-contain" />
        </div>


        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt="Facebook" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt="TikTok" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt="Instagram" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://web.app.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
          </a>
        </div>
      </div>
    </footer>

  )
}

export default Footer
