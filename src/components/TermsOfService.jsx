import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-dark-gold mb-8 transition-colors">
        <ArrowLeft size={20} />
        Zurück zur Startseite
      </Link>
      
      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-serif text-gold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        {/* Section 1 */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">1. Allgemeines und Geltungsbereich</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>1.1.</strong> Diese Allgemeinen Geschäftsbedingungen (nachfolgend auch: „AGB") gelten für alle zwischen Herrn <strong>Marcus Zöllmann</strong>, handelnd unter <strong>Coach Chris Beratung</strong>, Schmidenerstr. 210 b, 70374 Stuttgart, Telefon: +49 (0) 176 47393616, E-Mail: kontakt@coachchrisberatung.de (nachfolgend: „Coach") und dem Teilnehmer geschlossenen Verträge über die Durchführung von Coachings und Beratung.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>1.2.</strong> Das Leistungsangebot des Coaches richtet sich ausschließlich an Teilnehmer, die das 18. Lebensjahr vollendet haben.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>1.3.</strong> Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann.
          </p>
        </div>

        {/* Section 2 - Leistungsangebot */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">2. Leistungsangebot und Vertragsschluss</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>2.1.</strong> Der Coach bietet professionelles Trennungscoaching und Lebensberatung in folgenden Formaten an:
          </p>
          
          {/* Pricing Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold/10">
                  <th className="border border-gold/20 p-3 text-left text-gold">Leistung</th>
                  <th className="border border-gold/20 p-3 text-left text-gold">Umfang</th>
                  <th className="border border-gold/20 p-3 text-left text-gold">Preis</th>
                  <th className="border border-gold/20 p-3 text-left text-gold">Paketlaufzeit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300">Kostenloses Erstgespräch</td>
                  <td className="border border-gold/20 p-3 text-gray-300">30 Minuten</td>
                  <td className="border border-gold/20 p-3 text-gray-300">0€</td>
                  <td className="border border-gold/20 p-3 text-gray-300">-</td>
                </tr>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300">Einzelstunde</td>
                  <td className="border border-gold/20 p-3 text-gray-300">60 Minuten</td>
                  <td className="border border-gold/20 p-3 text-gray-300">149€</td>
                  <td className="border border-gold/20 p-3 text-gray-300">-</td>
                </tr>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300">Intensiv-Session</td>
                  <td className="border border-gold/20 p-3 text-gray-300">90 Minuten</td>
                  <td className="border border-gold/20 p-3 text-gray-300">199€</td>
                  <td className="border border-gold/20 p-3 text-gray-300">-</td>
                </tr>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300 font-semibold">SOS-AKUTHILFE</td>
                  <td className="border border-gold/20 p-3 text-gray-300">3 x 60 Min + WhatsApp</td>
                  <td className="border border-gold/20 p-3 text-gray-300">297€ <s className="text-gray-500">387€</s></td>
                  <td className="border border-gold/20 p-3 text-gold font-semibold">6 Wochen</td>
                </tr>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300 font-semibold">NEUSTART-PROGRAMM</td>
                  <td className="border border-gold/20 p-3 text-gray-300">8 x 60 Min + Support</td>
                  <td className="border border-gold/20 p-3 text-gray-300">897€ <s className="text-gray-500">1.192€</s></td>
                  <td className="border border-gold/20 p-3 text-gold font-semibold">8 Wochen</td>
                </tr>
                <tr>
                  <td className="border border-gold/20 p-3 text-gray-300 font-semibold">VIP-TRANSFORMATION</td>
                  <td className="border border-gold/20 p-3 text-gray-300">12 x 90 Min + Premium</td>
                  <td className="border border-gold/20 p-3 text-gray-300">2.497€ <s className="text-gray-500">3.240€</s></td>
                  <td className="border border-gold/20 p-3 text-gold font-semibold">12 Wochen</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Booking Rules Box */}
          <div className="bg-gold/10 border-2 border-gold rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gold mb-4">⚠️ Wichtige Hinweise zur Terminbuchung:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong className="text-gold">Kostenloses Erstgespräch:</strong> Mindestens 3 Tage im Voraus buchen</li>
              <li><strong className="text-gold">Einzelstunden & Intensiv-Sessions:</strong> Mindestens 24 Stunden im Voraus buchen</li>
              <li><strong className="text-gold">Coaching-Pakete:</strong> Mindestens 24 Stunden im Voraus, maximal 2 Wochen im Voraus (Ausnahmen nach Absprache)</li>
            </ul>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>2.7.</strong> <strong>Paketlaufzeiten:</strong> Die Coaching-Pakete sind innerhalb folgender Zeiträume ab Beginn der ersten Session zu absolvieren:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong className="text-gold">SOS-AKUTHILFE:</strong> innerhalb von 6 Wochen</li>
            <li><strong className="text-gold">NEUSTART-PROGRAMM:</strong> innerhalb von 8 Wochen</li>
            <li><strong className="text-gold">VIP-TRANSFORMATION:</strong> innerhalb von 12 Wochen</li>
          </ul>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>2.8.</strong> <strong>Transkript-Service:</strong> Auf Wunsch des Teilnehmers können die Coaching-Sessions aufgezeichnet und transkribiert werden. Dies bedarf der ausdrücklichen schriftlichen Einwilligung beider Parteien vor Beginn der jeweiligen Session.
          </p>
        </div>

        {/* Section 3 - Preise und Zahlungen */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">3. Preise und Zahlungsbedingungen</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>3.3.</strong> Die zur Verfügung stehenden Zahlungsarten sind:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>PayPal</li>
            <li>Klarna (inkl. Ratenzahlung)</li>
            <li>Kreditkarte (Visa, Mastercard)</li>
            <li>Überweisung</li>
          </ul>
          
          <p className="text-gray-300 leading-relaxed">
            <strong>3.6.</strong> <strong>Paket-Regelung:</strong> Bei gebuchten Coaching-Paketen ist der Gesamtpreis bei Buchung fällig. Ratenzahlung ist nach individueller Absprache möglich.
          </p>
        </div>

        {/* Section 4 - Termine und Absagen */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">4. Termine und Absagen</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>4.2.</strong> Eine kostenfreie Terminverschiebung durch den Teilnehmer ist bis spätestens <strong className="text-gold">48 Stunden</strong> vor dem Termin möglich.
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-gray-300">
              <strong className="text-red-400">Stornierungsgebühren:</strong><br />
              • 48-24 Stunden vorher: 50% des Honorars<br />
              • Weniger als 24 Stunden: 100% des Honorars
            </p>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            <strong>4.6.</strong> <strong>Support-Zeiträume bei Paketen:</strong><br />
            • SOS-AKUTHILFE: 6 Wochen ab erster Session<br />
            • NEUSTART-PROGRAMM: 8 Wochen ab erster Session<br />
            • VIP-TRANSFORMATION: 12 Wochen ab erster Session
          </p>
        </div>

        {/* Section 8 - Widerrufsrecht */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">8. Widerrufsrecht für Verbraucher</h2>
          
          <div className="bg-gold/10 border-2 border-gold rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gold mb-4">Widerrufsbelehrung</h3>
            
            <p className="text-gray-300 mb-4">
              <strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            </p>
            
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-gray-300">
                Marcus Zöllmann<br />
                handelnd unter Coach Chris Beratung<br />
                Schmidenerstr. 210 b<br />
                70374 Stuttgart<br />
                Telefon: +49 (0) 176 47393616<br />
                E-Mail: kontakt@coachchrisberatung.de
              </p>
            </div>
            
            <p className="text-gray-300 text-sm">
              <strong className="text-gold">Hinweis:</strong> Das Widerrufsrecht erlischt vorzeitig, wenn der Coach die Dienstleistung vollständig erbracht hat und mit der Ausführung erst begonnen hat, nachdem Sie Ihre ausdrückliche Zustimmung gegeben und Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung verlieren.
            </p>
          </div>
        </div>

        {/* Section 9 - Haftung */}
        <div className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-6">
          <h2 className="text-2xl text-gold mb-4">9. Haftung / Höhere Gewalt</h2>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-gray-300">
              <strong className="text-red-400">⚠️ Wichtiger Hinweis:</strong><br />
              Die Beratung durch den Coach ersetzt in keiner Form die Beratung durch ausgebildete Fachleute wie Ärzte, Psychologen oder Psychotherapeuten. Das Coaching ist keine Psychotherapie und ersetzt diese nicht.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-8">Stand: Dezember 2024</p>
          <div className="space-x-6">
            <Link to="/" className="text-gold hover:text-dark-gold transition-colors">
              Zurück zur Startseite
            </Link>
            <Link to="/datenschutz" className="text-gold hover:text-dark-gold transition-colors">
              Zur Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
