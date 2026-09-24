import { useState, useEffect } from "react";
import "./App.css";
import heroImage from "./assets/utama.png";

const reviews = [
  {
    id: 1,
    text: `"Tempatnya bersih banget, indoor jadi nggak kepanasan. Jacuzzi-nya enak banget buat rileks bareng keluarga."`,
    initials: "PB",
    name: "Patrick Budi",
    role: "Pengunjung",
  },
  {
    id: 2,
    text: `"Sering juga anak-anak ke sini tiap weekend. Airnya jernih dan lifeguard-nya ramah."`,
    initials: "KL",
    name: "Katherine Laras",
    role: "Local Guide",
  },
  {
    id: 3,
    text: `"Lokasi strategis, parkir luas, dan fasilitas lengkap. Cocok buat rombongan sekolah juga."`,
    initials: "FD",
    name: "Fiona Dauri",
    role: "Tamu Sekolah",
  },
];

function App() {
  const [activeReview, setActiveReview] = useState(0);

  // Carousel bergerak otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToReview = (index) => setActiveReview(index);

  const nextReview = () =>
    setActiveReview((prev) => (prev + 1) % reviews.length);

  const prevReview = () =>
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="navbar-container">

          <div className="logo">
            BALE ULIN LYRA
          </div>

          <nav className="nav-menu">

            <a href="#fasilitas">
              Fasilitas
            </a>

            <a href="#lokasi">
              Lokasi
            </a>

            <a href="#keamanan">
              Keamanan
            </a>

          </nav>

          <a
            href="#kontak"
            className="login-button"
          >
            Masuk
          </a>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(8, 24, 38, 0.78),
              rgba(8, 24, 38, 0.35)
            ),
            url(${heroImage})
          `
        }}
      >

        <div className="hero-container">


          {/* ================= HERO CONTENT ================= */}

          <div className="hero-content">

            <h1>

              Berenang Seru Tanpa

              <span>
                Takut Panas
              </span>

              & Hujan!

            </h1>


            <p>
              Destinasi pilihan untuk bersantai,
              mengadakan acara, dan menikmati momen
              kebersamaan dengan suasana yang nyaman.
            </p>


            {/* ================= BUTTON ================= */}

            <div className="hero-buttons">

              <a
                href="#kontak"
                className="btn-primary"
              >
                Reservasi sekarang
              </a>


              <a
                href="#fasilitas"
                className="btn-secondary"
              >
                ♡ &nbsp; Lihat Fasilitas
              </a>

            </div>


            {/* =================================================
                STATISTIK

                SEKARANG BENAR-BENAR DI BAWAH BUTTON
            ================================================= */}

            <div className="statistics">

              <div className="stat-item">

                <strong>
                  50K+
                </strong>

                <span>
                  Total Pengunjung
                </span>

              </div>


              <div className="stat-item">

                <strong>
                  Indoor
                </strong>

                <span>
                  Kolam Renang
                </span>

              </div>


              <div className="stat-item">

                <strong>
                  4.9
                </strong>

                <span>
                  Rating Google
                </span>

              </div>


              <div className="stat-item">

                <strong>
                  2018
                </strong>

                <span>
                  Berdiri Sejak
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              JAM OPERASIONAL
          ================================================= */}

          <div className="operational-card">

            <div className="operational-title">

              <span className="status-dot"></span>

              JAM OPERASIONAL

            </div>


            <div className="operational-row">

              <span>
                Buka Setiap Hari
              </span>

              <strong>
                08:00 - 15:00
              </strong>

            </div>


            <div className="operational-row">

              <span>
                Family Room
              </span>

              <strong>
                By Reservation
              </strong>

            </div>


            <div className="operational-row active">

              <span>
                Buka Sekarang
              </span>

              <strong>
                Fun Berenang
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRANSISI BLUR HERO -> FASILITAS ================= */}

      <div className="hero-fasilitas-blur"></div>


      {/* =====================================================
          FASILITAS
      ===================================================== */}

      <section
        className="section"
        id="fasilitas"
      >

        <div className="section-heading">

          <h2>
            Pusat Rekreasi{" "}
            <span>
              Keluarga
            </span>
          </h2>

          <p>
            Nikmati berbagai fasilitas olahraga dan
            rekreasi yang kami sediakan untuk
            kenyamanan Anda.
          </p>

        </div>


        <div className="facility-grid">


          <div className="facility-card">

            <div className="facility-image facility-image-1"></div>

            <div className="facility-name">
              Jacuzzi
            </div>

            <div className="facility-info">

              <div className="facility-price">
                <strong>Rp 200.000</strong>
                <span>/orang</span>
              </div>

              <p className="facility-desc">
                Belum termasuk tiket masuk
              </p>

            </div>

          </div>


          <div className="facility-card">

            <div className="facility-image facility-image-2"></div>

            <div className="facility-name">
              Pemandangan
            </div>

            <div className="facility-info">

              <div className="facility-price">
                <strong>Termasuk</strong>
                <span>tiket masuk</span>
              </div>

              <p className="facility-desc">
                Suasana asri di sekitar kolam
              </p>

            </div>

          </div>


          <div className="facility-card">

            <div className="facility-image facility-image-3"></div>

            <div className="facility-name">
              Kantin
            </div>

            <div className="facility-info">

              <div className="facility-price">
                <strong>Harga Menu</strong>
                <span>bervariasi</span>
              </div>

              <p className="facility-desc">
                Aneka makanan & minuman tersedia
              </p>

            </div>

          </div>


          <div className="facility-card">

            <div className="facility-image facility-image-4"></div>

            <div className="facility-name">
              Kolam Renang
            </div>

            <div className="facility-info">

              <div className="facility-price">
                <strong>Rp 20.000</strong>
                <span>/orang</span>
              </div>

              <p className="facility-desc">
                Akses kolam renang sepuasnya seharian
              </p>

            </div>

          </div>


        </div>

      </section>


      {/* =====================================================
          FASILITAS PENDUKUNG
      ===================================================== */}

      <section
        className="supporting-section"
        id="keamanan"
      >

        <div className="supporting-container">

          <h3>
            FASILITAS PENDUKUNG
          </h3>


          <div className="supporting-grid">


            <div className="support-item">

              <div className="support-icon">
                🕌
              </div>

              <span>
                Mosque
              </span>

            </div>


            <div className="support-item">

              <div className="support-icon">
                P
              </div>

              <span>
                Parking
              </span>

            </div>


            <div className="support-item">

              <div className="support-icon">
                🚿
              </div>

              <span>
                Shower
              </span>

            </div>


            <div className="support-item">

              <div className="support-icon">
                🔒
              </div>

              <span>
                Locker
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          LOKASI
      ===================================================== */}

      <section
        className="location-section"
        id="lokasi"
      >

        <div className="location-container">


          <div className="location-heading">

            <h2>
              📍 Lokasi{" "}
              <span>
                Bale Ulin Lyra
              </span>
            </h2>

          </div>


          <div className="location-content">


            {/* ================= MAP ================= */}

            <div className="map-container">

              <iframe
                title="Lokasi Bale Ulin Lyra"
                src="https://www.google.com/maps?q=Bale%20Ulin%20Lyra&output=embed"
                loading="lazy"
              ></iframe>

            </div>


            {/* ================= LOCATION INFO ================= */}

            <div className="location-info">


              <div className="info-card">

                <div className="info-icon">
                  📍
                </div>

                <div>

                  <h4>
                    Alamat Lengkap
                  </h4>

                  <p>
                    Jl. Pasir Salam No. 18,
                    Padalarang, Kabupaten Bandung Barat,
                    Jawa Barat
                  </p>

                </div>

              </div>


              <div className="info-card">

                <div className="info-icon">
                  🚗
                </div>

                <div>

                  <h4>
                    Akses dan Parkir
                  </h4>

                  <p>
                    Lokasi dapat diakses dengan kendaraan
                    pribadi maupun rombongan.
                  </p>

                </div>

              </div>


              <div className="info-card">

                <div className="info-icon">
                  ☎
                </div>

                <div>

                  <h4>
                    Kontak Admin
                  </h4>

                  <p>
                    Hubungi admin untuk informasi
                    reservasi dan fasilitas.
                  </p>

                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daftar Sekarang →
                  </a>

                </div>

              </div>


            </div>

          </div>


          {/* ================= GOOGLE MAPS BUTTON ================= */}

          <div className="maps-button-wrapper">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bale+Ulin+Lyra"
              target="_blank"
              rel="noreferrer"
              className="maps-button"
            >
              Buka di Google Maps
            </a>

          </div>


        </div>

      </section>


      {/* =====================================================
          REVIEW
      ===================================================== */}

      <section className="reviews-section">

        <div className="section-heading">

          <h2>
            REVIEW PENGUNJUNG
          </h2>


          <div className="rating-summary">

            <span className="stars">
              ★★★★★
            </span>

            <strong>
              4.9 / 5.0
            </strong>

          </div>

        </div>


        <div className="review-carousel">

          <button
            type="button"
            className="review-arrow prev"
            onClick={prevReview}
            aria-label="Review sebelumnya"
          >
            ‹
          </button>

          <div
            className="review-track"
            style={{ transform: `translateX(-${activeReview * 100}%)` }}
          >

            {reviews.map((review, index) => (

              <div
                className="review-slide"
                key={review.id}
                onClick={() => goToReview(index)}
              >

                <div className="review-card">

                  <p>
                    {review.text}
                  </p>


                  <div className="review-user">

                    <div className="avatar">
                      {review.initials}
                    </div>

                    <div>

                      <strong>
                        {review.name}
                      </strong>

                      <span>
                        {review.role}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <button
            type="button"
            className="review-arrow next"
            onClick={nextReview}
            aria-label="Review berikutnya"
          >
            ›
          </button>

          <div className="review-dots">

            {reviews.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`review-dot ${index === activeReview ? "active" : ""}`}
                onClick={() => goToReview(index)}
                aria-label={`Ke review ${index + 1}`}
              ></button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALERI
      ===================================================== */}

      <section
        className="gallery-section"
        id="gallery"
      >

        <div className="gallery-header">


          <div>

            <h2>
              GALERI MOMEN SERU
            </h2>

            <p>
              @bale_ulin_lyra di Instagram
            </p>

          </div>


          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lihat di Instagram →
          </a>


        </div>


        <div className="gallery-grid">


          <div className="gallery-item gallery-big">

            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80"
              alt="Pengunjung berenang"
            />

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=500&q=80"
              alt="Kolam"
            />

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1560090995-01632a7d3f44?auto=format&fit=crop&w=600&q=80"
              alt="Fasilitas"
            />

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=500&q=80"
              alt="Kolam renang"
            />

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=500&q=80"
              alt="Pengunjung"
            />

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&q=80"
              alt="Kolam indoor"
            />

          </div>


        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="cta-section"
        id="kontak"
      >

        <div className="cta-content">

          <h2>
            SUDAH SIAP BERENANG HARI INI?
          </h2>

          <p>
            Bebas cuaca, bebas panas, dan pasti seru!
            Hubungi admin untuk booking fasilitas.
          </p>


          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="cta-button"
          >
            ◉ &nbsp; CHAT ADMIN SEKARANG
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-container">


          {/* ================= BRAND ================= */}

          <div className="footer-brand">

            <h3>
              ● BALEULINLYRA
            </h3>

            <p>
              Pusat rekreasi dan kolam renang indoor
              keluarga yang nyaman, aman, dan
              menyenangkan.
            </p>

            <div className="social-icons">
              ◎ &nbsp; ♪
            </div>

          </div>


          {/* ================= NAVIGASI ================= */}

          <div className="footer-column">

            <h4>
              NAVIGASI
            </h4>

            <a href="#home">
              HOME
            </a>

            <a href="#fasilitas">
              FASILITAS
            </a>

            <a href="#lokasi">
              LOKASI
            </a>

            <a href="#gallery">
              GALERI
            </a>

          </div>


          {/* ================= KONTAK ================= */}

          <div className="footer-column">

            <h4>
              KONTAK KAMI
            </h4>

            <span>
              ☎ 0812-3456-7890
            </span>

            <span>
              ✉ info@baleulinlyra.com
            </span>

            <span>
              📍 Bandung, Jawa Barat
            </span>

          </div>


          {/* ================= JAM BUKA ================= */}

          <div className="footer-column">

            <h4>
              JAM BUKA
            </h4>

            <span>
              Setiap Hari
            </span>

            <span>
              08:00 - 15:00
            </span>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Bale+Ulin+Lyra"
              target="_blank"
              rel="noreferrer"
              className="footer-maps"
            >
              BUKA DI GOOGLE MAPS
            </a>

          </div>


        </div>


        <div className="footer-bottom">

          © 2026 Bale Ulin Lyra. All Rights Reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;