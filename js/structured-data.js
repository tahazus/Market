const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "TAWS",
  "url": "https://tahazus.ir",
  "logo": "https://tahazus.ir/Images/taha.png",
  "description": "TAWS بهترین فروشگاه خدمات دیجیتال شامل خرید استیم پوینت، دوتا پلاس، تلگرام پریمیوم و سایر اشتراک‌ها با قیمت مناسب.",
  "image": "https://tahazus.ir/Images/taha.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IR"
  },
  "sameAs": [
    "https://t.me/TahazuS",
    "https://discord.gg/a7PrkNjXWk",
    "https://twitter.com/TahaHadian",
    "https://steamcommunity.com/id/TahazuS"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);
