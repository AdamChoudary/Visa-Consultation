export const siteConfig = {
  name: "The Visa Consultancy",
  description: "Expert immigration services for individuals and families seeking long-term settlement abroad.",
  url: "https://thevisaconsultancy.com",
  contact: {
    address: "Office# 104, Mezzanine Floor, Embassy Gardens, Sector C1, Bahria Enclave, Islamabad",
    phone: "+92 333 5965199",
    email: "info@thevisaconsultancy.com",
    hours: "Mon – Sat | 11:00 AM – 7:00 PM",
  },
  socials: {
    whatsapp: "https://wa.me/923335965199",
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
