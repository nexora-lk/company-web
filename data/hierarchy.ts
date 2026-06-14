/**
 * Organisation hierarchy — drives the "Organisation Structure" section on /about.
 *
 * ▸ To show a real portrait for a person, just paste their Cloudinary URL into `img`.
 *   While `img` is empty the node renders an on-brand gold placeholder (initials, or a
 *   plain marker for un-named field staff) — so the chart is complete from day one and
 *   fills in as photos arrive.
 */

export type OrgMember = {
  name?: string;
  role?: string;
  /** Cloudinary URL — leave undefined to render the gold placeholder. */
  img?: string;
};

export type OrgLevel = {
  id: string;
  /** Short level label shown above the row, e.g. "Managing Director". */
  label: string;
  /** Visual treatment: feature = largest (apex), named = labelled portraits, team = compact grid. */
  variant: "feature" | "named" | "team";
  members: OrgMember[];
};

export const orgHierarchy: OrgLevel[] = [
  {
    id: "directors",
    label: "Board of Directors",
    variant: "named",
    members: [
      {
        name: "Nilanga Amunugama",
        role: "Managing Director / Head of Finance",
        img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781332267/amunugama_sir_derector_profile_ykhpb8.png",
      },
      {
        name: "L. Manisha Amaratunga",
        role: "Director / HR",
        img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781330025/maneesha_madam_director_profile_fis1p7.png",
      },
      {
        name: "Y. M. D. T. Yatawara",
        role: "Director",
        img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781330035/yatawara_sir_director_profile_e4hvgg.png",
      },
    ],
  },
  {
    id: "General Manager",
    label: "Senior Management",
    variant: "named",
    members: [{ name: "M. Clement Fernando", role: "General Manager", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451691/WhatsApp_Image_2026-06-13_at_08.39.19_qmdkke.jpg" }],
  },
  {
    id: "Asst General Manager",
    label: "Senior Management",
    variant: "named",
    members: [{ name: "M. Shahjhan Samsudren", role: "Asst. General Manager", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451675/WhatsApp_Image_2026-06-13_at_08.44.46_ivyqcn.jpg" }],
  },
  {
    id: "Gemmologist",
    label: "Senior Management",
    variant: "named",
    members: [{ name: "Saman Andra Hannadi", role: "Gemmologist", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781318536/4r_97_ojbff6.jpg" }],
  },
  {
    id: "Provincial Head",
    label: "Provincial Head",
    variant: "named",
    members: [
      { name: "Thurai Athithan", role: "Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451675/WhatsApp_Image_2026-06-13_at_19.47.40_f7nz74.jpg"},
      { name: "K. Mathikumar", role: "Provincial Head",img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451675/WhatsApp_Image_2026-06-13_at_19.49.32_zsepkf.jpg" },
      { name: "Deeptha Leelaratne", role: "Provincial Head",img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451669/WhatsApp_Image_2026-06-13_at_19.49.01_jpklsu.jpg" },
      { name: "D S Solamon", role: "Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451675/WhatsApp_Image_2026-06-13_at_09.42.00_qhh9un.jpg"},
    ],
  },
  {
    id: "Deputy Provincial Head",
    label: "Deputy Provincial Head",
    variant: "named",
    members: [
      { name: "B V A D Chandan", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451678/WhatsApp_Image_2026-06-13_at_09.46.05_qdt390.jpg"},
      { name: "R M S A K Kumara", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451678/WhatsApp_Image_2026-06-13_at_09.53.11_isrclc.jpg"},
      { name: "S Mathimaran", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451681/WhatsApp_Image_2026-06-13_at_10.19.45_xv8sx8.jpg"},
      { name: "MR.Balenthiran Vithushan", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451686/WhatsApp_Image_2026-06-13_at_10.21.55_kx3rfg.jpg"},
      { name: "S C R Thisera", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451673/WhatsApp_Image_2026-06-13_at_10.40.57_en23nl.jpg"},
      { name: "P P janaka Prasad", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451681/WhatsApp_Image_2026-06-13_at_10.49.50_xl4tay.jpg"},
    ],
  },
  {
    id: "Regeonal Manager",
    label: "Regional Manager",
    variant: "team",
    members: [
      { name: "Kingsly.G.R", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451674/WhatsApp_Image_2026-06-13_at_20.14.59_renlqp.jpg"},
      { name: "Sumith", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451687/WhatsApp_Image_2026-06-13_at_20.16.26_kwzadu.jpg"},
      { name: "Senarath Gamage", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451694/WhatsApp_Image_2026-06-13_at_20.17.41_egd2aj.jpg"},
      { name: "Dammika Gunasekara", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451687/WhatsApp_Image_2026-06-13_at_20.19.41_o4ibeu.jpg"},
      { name: "Suzuthaharan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451692/WhatsApp_Image_2026-06-13_at_20.19.42_n9cbjw.jpg"},
      { name: "Ms Suzanna Stephanie Mahesan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451691/WhatsApp_Image_2026-06-13_at_20.19.42_1_mfqnos.jpg"},
      { name: "K.p. sampath kumara", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451695/WhatsApp_Image_2026-06-13_at_20.23.34_orxjf8.jpg"},
      { name: "Mohammed Aslam", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451704/WhatsApp_Image_2026-06-13_at_20.23.34_1_t5tkx3.jpg"},
      { name: "Indika Kalyani Naotunna", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451714/WhatsApp_Image_2026-06-13_at_20.23.35_rfrlxt.jpg"},
      { name: "Karmegam Sadeskumar", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451700/WhatsApp_Image_2026-06-13_at_20.27.25_mkocwu.jpg"},
      { name: "V. Jude Abishek", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451700/WhatsApp_Image_2026-06-13_at_20.27.26_op30i3.jpg"},
      { name: "S. Kajana", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451700/WhatsApp_Image_2026-06-13_at_20.27.26_op30i3.jpg"},
      { name: "Mrs. Preetha", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451704/WhatsApp_Image_2026-06-13_at_20.27.27_yyobz9.jpg"},
      { name: "Arumugam Gunalan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451699/WhatsApp_Image_2026-06-13_at_20.30.41_rf125c.jpg"},
      { name: "Mohamed Mureed Cassim", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451707/WhatsApp_Image_2026-06-13_at_20.30.42_fl8u1k.jpg"},
      { name: "Kumudu Senanayaka", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451716/WhatsApp_Image_2026-06-13_at_20.30.42_1_usppqz.jpg"},
      { name: "A D K N Dasanayaka", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451717/WhatsApp_Image_2026-06-13_at_20.34.04_r1b7ed.jpg"},
      { name: "Baskaran", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451713/WhatsApp_Image_2026-06-13_at_20.34.05_gmtigr.jpg"},
      { name: "Pathuma", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781451716/WhatsApp_Image_2026-06-13_at_20.34.06_lu4kwj.jpg"},
    ],
  },
];
