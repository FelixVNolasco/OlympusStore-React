import Category from './components/Category';
export interface category {
  id: number,
  img: string,
  title: string,
  category: string
}

export interface simpleProduct {
  id: number,
  img: string
}

export const categories: category[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641617968/Olympus/pexels-chrofit-the-man-to-call-5756239_nhemmr.jpg ",
    title: "BASKETBALL",
    category: "basketball"
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641617319/Olympus/pexels-kafeel-ahmed-4785491_t1yrrl.jpg",
    title: "SOCCER",
    category: "soccer"
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642201369/Olympus/pexels-run-ffwpu-2982100_onvf1u.jpg",
    title: "RUNNING",
    category: "running"
  },
];


export const popularProducts: simpleProduct[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618679/Olympus/510lT8MU9kL._AC_SL1000__tkqgss.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618681/Olympus/D_NQ_NP_2X_608367-MLM47093569639_082021-F_rkmqdf.webp",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618716/Olympus/adidas-balon-futbol-finale-21-20th-anniversay-ucl-competition_ewbotw.jpg",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618734/Olympus/00068934437939L_ceht8f.jpg",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618754/Olympus/91lCyybzfZL._AC_SL1500__d2cfea.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618797/Olympus/balon-nike-baller-is-N.KI.32.855.07-1_nvsbgq.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618831/Olympus/00088381358614L_ndrbmd.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618890/Olympus/74942-03_620x_omvbio.jpg",
  }
] 