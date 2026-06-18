export const siteConfig = {
  name: "The Visa Consultancy",
  description: "The Visa Consultancy — Pakistan's trusted visa consultancy in Islamabad. We provide expert visa services for student visas, work visas, visit visas, family reunion visas, and permanent residency (PR) immigration to the UK, USA, Canada, Australia, Schengen Europe, and UAE. Professional visa consultancy with high approval rates and transparent guidance.",
  url: "https://thevisaconsultancy.com",
  contact: {
    address: "Office# 104, Mezzanine Floor, Embassy Gardens, Sector C1, Bahria Enclave, Islamabad",
    phone: "+92-3268450001",
    phone2: "+92-3268450002",
    email: "info@thevisaconsultancy.com",
    hours: "Mon – Sat | 11:00 AM – 7:00 PM",
  },
  socials: {
    whatsapp: "https://wa.me/923268450001",
    facebook: "https://www.facebook.com/share/1AVzHjEm71/",
    tiktok: "https://www.tiktok.com/@the.visa.consulta6",
    instagram: "https://www.instagram.com/the_visaconsultancy/",
    linkedin: "https://www.linkedin.com/company/the-visa-consultancy",
    youtube: "https://www.youtube.com/@TheVisaConsultancy1",
  },
  navigation: [
    { name: 'Student Visa', href: '/studentvisa' },
    { name: 'Visit Visas', href: '/visitvisas' },
    { name: 'Immigration', href: '/immigration' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Work Visas', href: '/workvisas' },
    { name: 'Family Reunion', href: '/familyreunion' },
    { 
      name: 'Language Test', 
      subItems: [
        { name: 'TOEFL Test', href: '/toefl-test' },
        { name: 'PTE Test', href: '/pte-test' },
        { name: 'IELTS Test', href: '/ielts' },
        { name: 'Duolingo Test', href: '/duolingo' }
      ]
    },
  ]
};
