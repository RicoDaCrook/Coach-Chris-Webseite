import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Shield, CreditCard } from 'lucide-react';

const BookingWidget = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//widget.simplybook.it/v2/widget/widget.js";
    script.onload = () => {
      new SimplybookWidget({
        "widget_type":"iframe",
        "url":"https://coachchrisberatung.simplybook.it",
        "theme":"concise",
        "theme_settings":{
          "timeline_hide_unavailable":"1",
          "hide_past_days":"0",
          "timeline_show_end_time":"0",
          "timeline_modern_display":"as_slots",
          "light_font_color":"#ffffff",
          "sb_secondary_base":"#1a1a1a",
          "sb_base_color":"#b8860b",
          "display_item_mode":"list",
          "booking_nav_bg_color":"#b8860b",
          "sb_review_image":"",
          "dark_font_color":"#ffffff",
          "btn_color_1":"#b8860b",
          "sb_company_label_color":"#b8860b",
          "hide_img_mode":"1",
          "show_sidebar":"1",
          "sb_busy":"#2f4f2f",
          "sb_available":"#1a1a1a"
        },
        "timeline":"modern",
        "datepicker":"top_calendar",
        "is_rtl":false,
        "app_config":{
          "clear_session":0,
          "allow_switch_to_ada":0,
          "predefined":[]
        },
        "container_id":"sbw_5nb7uz"
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Sichere dir deinen <span className="text-gold">Termin</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Wähle dein Paket und deinen Wunschtermin. Nach der Zahlung erhältst du innerhalb von 24h eine Bestätigung.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Calendar className="text-gold" size={20} />
            <span className="text-sm">Flexible Termine</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Clock className="text-gold" size={20} />
            <span className="text-sm">24h Bestätigung</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Shield className="text-gold" size={20} />
            <span className="text-sm">SSL-Verschlüsselt</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <CreditCard className="text-gold" size={20} />
            <span className="text-sm">Sichere Zahlung</span>
          </div>
        </motion.div>

        {/* SimplyBook Widget Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-dark-gray/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gold/20"
        >
          <div id="sbw_5nb7uz" ref={widgetContainerRef} className="min-h-[600px]"></div>
        </motion.div>

        {/* Payment Methods Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Verfügbare Zahlungsmethoden</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <span>PayPal</span>
            <span>•</span>
            <span>Klarna</span>
            <span>•</span>
            <span>Kreditkarte</span>
            <span>•</span>
            <span>Überweisung</span>
            <span>•</span>
            <span>Ratenzahlung möglich</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Hinweis: Termine werden erst nach Zahlungseingang final bestätigt
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingWidget;
