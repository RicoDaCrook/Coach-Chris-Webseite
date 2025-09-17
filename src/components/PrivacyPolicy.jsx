import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-dark-gold mb-8 transition-colors">
        <ArrowLeft size={20} />
        Zurück zur Startseite
      </Link>
      
      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-serif text-gold mb-8">Datenschutzerklärung</h1>
        
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl text-gold mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-300 leading-relaxed">
            Der Verantwortliche im Sinne der Datenschutzgrundverordnung (im Folgenden: „DSGVO") und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <div className="bg-black/50 p-4 rounded-lg my-4">
            <p className="text-gray-300">
              Marcus Zöllmann<br />
              handelnd unter Coach Chris Beratung<br />
              Schmidenerstr. 210 b<br />
              70374 Stuttgart<br />
              <br />
              Telefon: +49 (0) 176 47393616<br />
              E-Mail: kontakt@coachchrisberatung.de<br />
              Website: https://coachchrisberatung.de
            </p>
          </div>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">2. Allgemeines zur Datenverarbeitung</h2>
          <p className="text-gray-300 leading-relaxed">
            Datenschutz hat für uns einen besonderen Stellenwert. Aus diesem Grund erheben und verwenden wir personenbezogene Daten der Nutzer und Besucher unserer Webseite grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden: „betroffene Person") beziehen.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt stets im Einklang mit der DSGVO und den geltenden landesspezifischen Datenschutzregeln. Ist die Verarbeitung personenbezogener Daten erforderlich und ist eine solche Verarbeitung nicht durch gesetzliche Vorschriften gestattet, holen wir immer eine Einwilligung der betroffenen Person ein.
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Webseite</h2>
          <p className="text-gray-300 leading-relaxed">
            Bei jedem Aufruf der Webseite https://coachchrisberatung.de werden durch den von Ihnen genutzten Browser automatisiert Informationen an den Server unserer Website übermittelt. Folgende Informationen werden dabei erfasst und bis zur automatischen Löschung gespeichert:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Die Referrer-URL (die Website, von der aus der Zugriff erfolgte)</li>
            <li>Informationen über den verwendeten Browsertyp</li>
            <li>Das Betriebssystem Ihres Rechners</li>
            <li>Der Name des Internet-Service-Providers</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bereitstellung einer funktionsfähigen Webseite mit korrekt ausgelieferten Inhalten.
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">4. Cookies</h2>
          <p className="text-gray-300 leading-relaxed">
            Auf unserer Webseite setzen wir Cookies ein. Bei Cookies handelt es sich um kleine Textdateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden können. Der Einsatz von notwendigen Cookies dient dazu, unsere Webseite technisch einwandfrei darstellen zu können.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Rechtsgrundlage für die Datenverarbeitung durch Cookies für statistische Zwecke und Auswertung unseres Angebots ist Ihre Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a DSGVO.
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">5. Google Analytics</h2>
          <p className="text-gray-300 leading-relaxed">
            Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden Optimierung unserer Webseite nutzen wir Google Analytics, ein Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (im Folgenden: „Google").
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a DSGVO. Sie können die Installation der Cookies durch eine entsprechende Einstellung der Browser-Software verhindern oder ein Browser-Add-on zur Deaktivierung von Google Analytics herunterladen und installieren: 
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-dark-gold ml-1">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">6. Terminbuchungen über SimplyBook.me</h2>
          <p className="text-gray-300 leading-relaxed">
            Für die Terminbuchung nutzen wir den externen Dienstleister SimplyBook.me. Bei der Buchung werden folgende Daten an SimplyBook.me übermittelt und dort verarbeitet:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (optional)</li>
            <li>Gebuchte Dienstleistung</li>
            <li>Gewählter Termin</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            SimplyBook.me ist als Auftragsverarbeiter für uns tätig. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">7. WhatsApp Business</h2>
          <p className="text-gray-300 leading-relaxed">
            Wir bieten Ihnen die Möglichkeit, über WhatsApp Business mit uns in Kontakt zu treten. WhatsApp ist ein Dienst der WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a DSGVO.
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">8. Zahlungsdienstleister</h2>
          <p className="text-gray-300 leading-relaxed">
            Zur Abwicklung von Zahlungen nutzen wir externe Zahlungsdienstleister:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li><strong>PayPal:</strong> PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg</li>
            <li><strong>Klarna:</strong> Klarna Bank AB, Sveavägen 46, 111 34 Stockholm, Schweden</li>
            <li><strong>Stripe:</strong> Stripe Payments Europe Ltd., Block 4, Harcourt Centre, Harcourt Road, Dublin 2, Irland</li>
          </ul>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">9. Kontaktformular</h2>
          <p className="text-gray-300 leading-relaxed">
            Nutzer unserer Webseite haben die Möglichkeit, uns über ein Kontaktformular zu kontaktieren. Dabei werden folgende Daten erhoben:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (optional)</li>
            <li>Ihre Nachricht</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. a DSGVO (Einwilligung).
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">10. Betroffenenrechte</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Als betroffene Person stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO)</li>
            <li><strong>Recht auf Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
            <li><strong>Beschwerderecht bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO)</li>
          </ul>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">11. Datensicherheit</h2>
          <p className="text-gray-300 leading-relaxed">
            Um Ihre Daten bestmöglich zu schützen, verwenden wir auf unserer Webseite das SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
          </p>
        </div>

        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mt-6">
          <h2 className="text-2xl text-gold mb-4">12. Aufsichtsbehörde</h2>
          <p className="text-gray-300 leading-relaxed">
            Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <div className="bg-black/50 p-4 rounded-lg my-4">
            <p className="text-gray-300">
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
              Postfach 10 29 32<br />
              70025 Stuttgart<br />
              <br />
              Telefon: 0711/61 55 41 – 0<br />
              E-Mail: poststelle@lfdi.bwl.de
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">Stand: Dezember 2024</p>
          <div className="mt-8 space-x-6">
            <Link to="/" className="text-gold hover:text-dark-gold transition-colors">
              Zurück zur Startseite
            </Link>
            <Link to="/agb" className="text-gold hover:text-dark-gold transition-colors">
              Zu den AGB
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
