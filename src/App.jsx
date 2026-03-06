import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cal, { getCalApi } from '@calcom/embed-react';
import {
  ArrowRight,
  MessageCircle,
  Calendar as CalendarIcon,
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  Sparkles,
  Wrench,
  Trash2,
  Car,
  Trees,
  Droplets,
  Paintbrush,
  Fence,
  Sofa,
  Box,
  Zap,
  CheckCircle,
  FileText,
  ShieldCheck,
  X
} from 'lucide-react';



const FadeIn = ({ children, delay = 0, y = 20 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y }
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const phoneNumber = '+596696675430'; // Client's actual number
  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite un devis pour un service.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: '#FFC700' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Banner */}
      {showBanner && (
        <div className="announcement-banner">
          <div className="container announcement-content">
            <span className="announcement-text">
              ⚡️ Réponse de devis en moins de 1h max après demande.
            </span>
            <div className="announcement-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-sm">
                Demander un devis
              </a>
              <button
                className="close-banner"
                onClick={() => setShowBanner(false)}
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <FadeIn>
              <h1>Tous vos services, <br /><span>une seule équipe.</span></h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="hero-subtitle">Logistique • Nettoyage • Transport • Rénovation • Jardinage</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="hero-actions">
                <button onClick={scrollToBooking} className="btn btn-primary">
                  Prendre rendez-vous <CalendarIcon size={20} />
                </button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  WhatsApp <MessageCircle size={20} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services B2B Section */}
      <section className="services-section" id="b2b">
        <div className="container">
          <FadeIn>
            <h2 className="section-title text-center">Services pour les Professionnels (B2B)</h2>
            <p className="section-subtitle text-center">Des solutions sur mesure pour les entreprises en Martinique.</p>
          </FadeIn>

          <div className="services-grid">
            <FadeIn delay={0.1}>
              <div className="service-card">
                <img src="https://images.pexels.com/photos/275037/pexels-photo-275037.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Logistique" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Truck size={24} /></div>
                  <h3>Logistique</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Dépotage de conteneurs</li>
                    <li><ArrowRight size={16} /> Manutention</li>
                    <li><ArrowRight size={16} /> Opérateur chariot</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Nettoyage" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Sparkles size={24} /></div>
                  <h3>Nettoyage Professionnel</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Bureaux et locaux</li>
                    <li><ArrowRight size={16} /> Entrepôts</li>
                    <li><ArrowRight size={16} /> Flottes véhicules</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Rénovation" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Wrench size={24} /></div>
                  <h3>Rénovation</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Peinture professionnelle</li>
                    <li><ArrowRight size={16} /> Démolition</li>
                    <li><ArrowRight size={16} /> Amélioration espaces</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80" alt="Déchets" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Trash2 size={24} /></div>
                  <h3>Collecte de Déchets</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Métal</li>
                    <li><ArrowRight size={16} /> Cuivre</li>
                    <li><ArrowRight size={16} /> Aluminium</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <button onClick={scrollToBooking} className="btn btn-primary">
                Demander un devis B2B
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services B2C Section */}
      <section className="services-section alt" id="b2c">
        <div className="container">
          <FadeIn>
            <h2 className="section-title text-center">Services pour les Particuliers (B2C)</h2>
            <p className="section-subtitle text-center">Une équipe de confiance pour l'entretien et l'aménagement de votre domicile.</p>
          </FadeIn>

          <div className="services-grid">
            <FadeIn delay={0.1}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Transport" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Car size={24} /></div>
                  <h3>Transport & Déménagement</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Courses et livraisons</li>
                    <li><ArrowRight size={16} /> Aide au déménagement</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="service-card">
                <img src="https://images.pexels.com/photos/1344011/pexels-photo-1344011.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Jardinage" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Trees size={24} /></div>
                  <h3>Jardinage</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Tonte de pelouse</li>
                    <li><ArrowRight size={16} /> Taille de haies</li>
                    <li><ArrowRight size={16} /> Élagage et coupe</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80" alt="Nettoyage" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Droplets size={24} /></div>
                  <h3>Nettoyage Extérieur</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Lavage haute pression</li>
                    <li><ArrowRight size={16} /> Nettoyage piscine</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" alt="Peinture" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Paintbrush size={24} /></div>
                  <h3>Rénovation Extérieure & Peinture</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Ravalement de façade</li>
                    <li><ArrowRight size={16} /> Peinture extérieure</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="service-card">
                <img src="https://images.pexels.com/photos/255269/pexels-photo-255269.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Clôture" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Fence size={24} /></div>
                  <h3>Aménagement</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Pose de grillage et clôtures</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="service-card">
                <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Mobilier" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Sofa size={24} /></div>
                  <h3>Montage de Meubles</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Assemblage de mobilier neuf</li>
                    <li><ArrowRight size={16} /> Installation</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="service-card">
                <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Débarras" className="service-image" />
                <div className="service-content">
                  <div className="service-icon"><Box size={24} /></div>
                  <h3>Débarras d'encombrants</h3>
                  <ul className="service-list">
                    <li><ArrowRight size={16} /> Électroménager, frigo...</li>
                    <li><ArrowRight size={16} /> Ferraille, tôle, bois</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.9}>
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Obtenir mon devis gratuit
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title text-center">Comment ça marche</h2>
            <p className="section-subtitle text-center">Un processus simple et rapide pour répondre à vos besoins sans attendre.</p>
          </FadeIn>

          <div className="process-grid">
            <FadeIn delay={0.2} y={30}>
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="gif-icon">
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="Demande de service" />
                </div>
                <h3>Demande de service</h3>
                <p>Contactez-nous via WhatsApp, appel ou prenez rendez-vous en ligne.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} y={30}>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="gif-icon">
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.gif" alt="Devis rapide" />
                </div>
                <h3>Devis en moins de 1 heure</h3>
                <p>Nous évaluons vos besoins et vous fournissons un devis gratuit et rapide.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} y={30}>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="gif-icon">
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="Intervention" />
                </div>
                <h3>Intervention rapide</h3>
                <p>Notre équipe de professionnels intervient dans les meilleurs délais.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="container trust-grid">
          <FadeIn delay={0.1}>
            <div className="trust-item">
              <div className="trust-icon"><Zap size={28} /></div>
              <h4>Réponse rapide</h4>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="trust-item">
              <div className="trust-icon"><ShieldCheck size={28} /></div>
              <h4>Services professionnels</h4>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="trust-item">
              <div className="trust-icon"><FileText size={28} /></div>
              <h4>Devis gratuits</h4>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={28} /></div>
              <h4>Intervention rapide</h4>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" id="booking">
        <div className="container text-center">
          <FadeIn>
            <h2 className="section-title">Prendre rendez-vous</h2>
            <p className="section-subtitle">Choisissez le créneau qui vous convient pour discuter de votre projet ou demander une intervention.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="cal-embed-wrapper">
              <Cal
                calLink="rick/get-meet" // Placeholder user link
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>C-NOUS 972</h2>
              <p>Votre partenaire multiservices en Martinique pour tous vos besoins personnels et professionnels.</p>
              <div className="footer-socials">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <div className="contact-item">
                <Phone size={20} />
                <span><a href={`tel:${phoneNumber}`}>+596 696 00 00 00</a></span>
              </div>
              <div className="contact-item">
                <MessageCircle size={20} />
                <span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a></span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span><a href="mailto:contact@c-nous-972.mq">contact@c-nous-972.mq</a></span>
              </div>
            </div>

            <div className="footer-col">
              <h3>Informations</h3>
              <div className="contact-item">
                <Clock size={20} />
                <span>Lun - Sam: 8h00 - 18h00</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Intervention sur toute la Martinique (972)</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} C-NOUS 972. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
