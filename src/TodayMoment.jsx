import { useState } from 'react';
import { Camera, User, Clock, Instagram, ChevronRight, ChevronLeft } from 'lucide-react';
import Ugm1 from './images/Ugm-5.jpg';
import Upn1 from './images/Sindy-1.jpg';
import Upn2 from './images/Syahrul-1.jpg';

export default function TodaysMoment() {
  const [activeNav, setActiveNav] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const photos = [
    { id: 1, src: Ugm1, title: "Wisuda UGM", description: "Paket Gold"},
    { id: 2, src: Upn1, title: "Wisuda UPN", description: "Paket Platinum" },
    { id: 3, src: Upn2, title: "Wisuda UPN", description: "Paket Silver" }
  ];
  
  const packages = [
    {
      id: 1,
      name: "Paket Silver",
      price: "Rp 375.000",
      features: ["1 jam sesi foto", "Foto bersama keluarga dan teman", "Bebas jumlah foto", "20 foto edit", "Soft file di Google drive"]
    },
    {
      id: 2,
      name: "Paket Gold",
      originalPrice: "Rp 600.000", // Harga sebelum promo
    price: "Rp 400.000",   
      features: ["2 jam sesi foto", "Foto bersama keluarga dan teman", "Bebas jumlah foto", "50 foto edit", "Soft file di Google drive"]
    },
    {
      id: 3,
      name: "Paket Platinum",
      price: "Rp 800.000",
      features: ["2 jam sesi foto", "Foto bersama keluarga dan teman", "Bebas jumlah foto", "60 foto edit", "Soft file di Google drive", "Video 1 menit"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  // Navigation components
  // Navigation components
const Navigation = () => (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Camera size={28} className="text-blue-500 mr-2" />
          <span className="font-bold text-xl">Today's Moment</span>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => setActiveNav('home')} 
            className={`font-medium ${activeNav === 'home' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            Beranda
          </button>
          <button 
            onClick={() => setActiveNav('about')} 
            className={`font-medium ${activeNav === 'about' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            Tentang
          </button>
          <button 
            onClick={() => setActiveNav('portfolio')} 
            className={`font-medium ${activeNav === 'portfolio' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveNav('pricelist')} 
            className={`font-medium ${activeNav === 'pricelist' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            Pricelist
          </button>
          <button 
            onClick={() => setActiveNav('contact')} 
            className={`font-medium ${activeNav === 'contact' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            Kontak
          </button>
        </div>
      </div>
    </nav>
  );
  

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Today's Moment</h3>
            <p className="text-gray-300">Jasa fotografi profesional untuk momen wisuda terbaik Anda.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            {/* <p className="text-gray-300 mb-2">Email: diasgsputra@gmail.com</p> */}
            {/* <p className="text-gray-300 mb-2">Phone: +62 813-2973-2838</p> */}
            <a 
            href="https://wa.me/6281329732838?text=Halo%20Tim%20Today's%20Moment!%20Saya%20tertarik%20dengan%20layanan%20fotografi%20Anda.%20Bolehkah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition">
            Hubungi via WhatsApp
            </button>
        </a>
            {/* <p className="text-gray-300">Instagram: @todaysmoment</p> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
            <p className="text-gray-300 mb-2">Senin - Jumat: 09:00 - 17:00</p>
            <p className="text-gray-300">Sabtu: 09:00 - 15:00</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">© 2025 Today's Moment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Content rendering based on active nav
  const renderContent = () => {
    switch(activeNav) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="relative h-96 bg-gray-900 rounded-xl overflow-hidden">
              <img src="/api/placeholder/1200/500" alt="Today's Moment Cover" className="absolute w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h1 className="text-5xl font-bold text-white mb-4">Today's Moment</h1>
                <p className="text-xl text-white mb-8">Abadikan momen wisuda terbaikmu bersama kami</p>
                <button 
                  onClick={() => setActiveNav('portfolio')} 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Lihat Portfolio
                </button>
              </div>
            </div>

            {/* Featured Portfolio */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Portfolio Terbaik</h2>
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={photos[currentSlide].src} 
                    alt={photos[currentSlide].title} 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                    <h3 className="text-xl font-semibold">{photos[currentSlide].title}</h3>
                    <p>{photos[currentSlide].description}</p>
                  </div>
                </div>
                <button 
                  onClick={prevSlide} 
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center mt-4">
              {photos.map((_, index) => (
  <button 
    key={index} 
    onClick={() => setCurrentSlide(index)}
    className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
  />
))}

              </div>
            </div>

            {/* Packages Preview */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Paket Layanan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map(pkg => (
                  <div key={pkg.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="bg-blue-500 text-white p-4 text-center">
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      {/* <p className="text-2xl font-bold mt-2">{pkg.price}</p> */}
                      {pkg.originalPrice ? (
                        <div>
                        <p className="text-white-400 font-bold mt-3 line-through">{pkg.originalPrice}</p>
                        <p className="text-3xl font-bold mt-3">{pkg.price}</p>
                        </div>
                    ) : (
                        <p className="text-3xl font-bold mt-3">{pkg.price}</p>
                    )}
                    </div>
                    {/* Harga promo dan harga asli */}
    
                    <div className="p-6">
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-green-500 mr-2 mt-1">✓</div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setActiveNav('pricelist')} 
                        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors duration-300"
                      >
                        Detail Paket
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
        case 'about':
            const team = [
              { name: "Yusuf", role: "Photographer" },
              { name: "Fathur", role: "Editor" },
              { name: "Silky", role: "Photographer" },
              { name: "Mumtaz", role: "Marketing" }
            ];
          
            return (
              <div className="space-y-10">
                <div className="bg-blue-50 rounded-xl p-8">
                  <h1 className="text-3xl font-bold mb-6">Tentang Today's Moment</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-600 mb-4">
                        Today's Moment didirikan pada tahun 2022 oleh sekelompok fotografer muda yang memiliki passion dalam dunia fotografi. Berawal dari hobi memotret acara wisuda teman-teman, kami kemudian berkembang menjadi jasa profesional yang kini telah melayani berbagai universitas di Yogyakarta.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Kami menyadari bahwa momen wisuda adalah salah satu pencapaian terbesar dalam hidup seseorang. Itulah mengapa kami berkomitmen untuk mengabadikannya dengan kualitas terbaik dan pendekatan yang personal.
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/tentang/team.jpg" alt="Tim Today's Moment" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
          
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tim Kami</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map(({ name, role }) => (
                      <div key={name} className="bg-white rounded-xl overflow-hidden shadow-md">
                        <img src={`/tentang/${name}.jpg`} alt={name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg">{name}</h3>
                          <p className="text-gray-500 text-sm">{role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          
      
      case 'portfolio':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Portfolio Kami</h1>
            <p className="text-gray-600 mb-8">
              Berikut adalah hasil karya terbaik dari tim fotografer Today's Moment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9).fill().map((_, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img 
                    src={`/portofolio/Img-${index + 1}.jpg`} 
                    alt={`Portfolio ${index + 1}`} 
                    className="w-full h-64 object-cover" 
                    />
                    <div className="p-4">
                    <h3 className="font-semibold text-lg">Wisuda {index + 1}</h3>
                    <p className="text-gray-500">
                        Paket {index % 3 === 0 ? 'Silver' : index % 3 === 1 ? 'Gold' : 'Platinum'}
                    </p>
                    </div>
                </div>
                ))}

            </div>
          </div>
        );
      
      case 'pricelist':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Paket Layanan</h1>
            <p className="text-gray-600 mb-8">
              Kami menawarkan berbagai paket fotografi wisuda yang dapat disesuaikan dengan kebutuhan Anda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map(pkg => (
                <div key={pkg.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-500 text-white p-6 text-center">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    {/* <p className="text-3xl font-bold mt-3">{pkg.price}</p> */}
                    {pkg.originalPrice ? (
                        <div>
                        <p className="text-white-400 font-bold mt-3 line-through">{pkg.originalPrice}</p>
                        <p className="text-3xl font-bold mt-3">{pkg.price}</p>
                        </div>
                    ) : (
                        <p className="text-3xl font-bold mt-3">{pkg.price}</p>
                    )}
                  </div>
                  {/* <div className="mb-4">
      {pkg.originalPrice ? (
        <div>
          <p className="text-gray-400 line-through">{pkg.originalPrice}</p>
          <p className="text-red-500 font-semibold text-lg">{pkg.price}</p>
        </div>
      ) : (
        <p className="text-gray-800 font-semibold text-lg">{pkg.price}</p>
      )}
    </div> */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-green-500 mr-2">✓</div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                      Pilih Paket
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Paket Custom</h2>
              <p className="text-gray-600 mb-6">
                Selain paket standar di atas, kami juga menawarkan paket custom. Hubungi kami untuk diskusi lebih lanjut.
              </p>
              <button 
                onClick={() => setActiveNav('contact')} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-gray-600 mb-8">
              Tertarik dengan layanan kami? Jangan ragu untuk menghubungi kami.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Kontak</h2>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <a 
                        href="https://wa.me/6281329732838?text=Halo%20Tim%20Today's%20Moment!%20Saya%20tertarik%20dengan%20layanan%20fotografi%20Anda.%20Bolehkah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition">
                        Hubungi via WhatsApp
                        </button>
                    </a>
                    {/* <div>
                      <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Masukkan nama lengkap" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@example.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Pesan</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        placeholder="Tulis pesan Anda di sini..." 
                      ></textarea>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                      Kirim Pesan
                    </button> */}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <User size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Alamat</p>
                        <p className="text-gray-600">Condongcatur, Sleman, Yogyakarta</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Clock size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Jam Operasional</p>
                        <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
                        <p className="text-gray-600">Sabtu: 09:00 - 15:00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Instagram size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Social Media</p>
                        <p className="text-gray-600">Instagram: @today.moment.official</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Halaman tidak ditemukan</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto py-8 px-4">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}