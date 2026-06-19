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
    members: [{ name: "M. Clement Fernando", role: "General Manager", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842807/GM_o4pa4x.png" }],
  },
  {
    id: "Asst General Manager",
    label: "Senior Management",
    variant: "named",
    members: [{ name: "M. Shahjhan Samsudren", role: "Asst. General Manager", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842778/AGM.jpg_lhw8x5.png" }],
  },
  {
    id: "Gemmologist",
    label: "Senior Management",
    variant: "named",
    members: [{ name: "Saman Andra Hannadi", role: "Gemmologist", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842782/Gemlogist.jpg_jqsot1.png" }],
  },
  {
    id: "Provincial Head",
    label: "Provincial Head",
    variant: "named",
    members: [
      { name: "Thurai Athithan", role: "Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/PH.jpg_yiuksc.png"},
      { name: "K. Mathikumar", role: "Provincial Head",img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/PH4.jpg_sybzst.png" },
      { name: "Deeptha Leelaratne", role: "Provincial Head",img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781846142/PH2_tcrtrv.png" },
      { name: "D S Solamon", role: "Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842814/PH3.jpg_vca1r5.png"},
    ],
  },
  {
    id: "Deputy Provincial Head",
    label: "Deputy Provincial Head",
    variant: "named",
    members: [
      { name: "B V A D Chandan", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/DPH6.jpg_w9x9sv.png"},
      { name: "R M S A K Kumara", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842787/DPH5.jpg_xscnb6.png"},
      { name: "S Mathimaran", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842794/DPH4.jpg_qsc2xl.png"},
      { name: "MR.Balenthiran Vithushan", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842789/DPH3.jpg_uxjo9c.png"},
      { name: "S C R Thisera", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842780/DPH2.jpg_cruybe.png"},
      { name: "P P janaka Prasad", role: "Deputy Provincial Head" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/DPH.jpg_ecdb5n.png"},
    ],
  },
  {
    id: "Regeonal Manager",
    label: "Regional Manager",
    variant: "team",
    members: [
      { name: "K.p. sampath kumara", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/RM14.jpg_nvwb5f.png"},
      { name: "Dammika Gunasekara", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842803/RM4.jpg_yi5dwm.png"},
      { name: "Kingsly.G.R", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842794/RM.jpg_nl9q1w.png"},
      { name: "Sumith", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842802/RM2.jpg_jmurzr.png"},
      { name: "Senarath Gamage", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM3.jpg_rfibzu.png"},
      { name: "Suzuthaharan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM5.jpg_n4cam6.png"},
      { name: "Ms Suzanna Stephanie Mahesan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842800/RM16_twppom.png"},
      { name: "Mohammed Aslam", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM6.jpg_aztleo.png"},
      { name: "Indika Kalyani Naotunna", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/RM20_sjvdwl.png"},
      { name: "Karmegam Sadeskumar", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842812/RM7.jpg_sn8frj.png"},
      { name: "V. Jude Abishek", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842782/RM8.jpg_s1oev4.png"},
      { name: "S. Kajana", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/RM19_iqms4e.png"},
      { name: "Mrs. Preetha", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842802/RM18_nopdkq.png"},
      { name: "Arumugam Gunalan", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842784/RM9.jpg_acz8sm.png"},
      { name: "Mohamed Mureed Cassim", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM10.jpg_jmblax.png"},
      { name: "Kumudu Senanayaka", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM17_yuz2xp.png"},
      { name: "A D K N Dasanayaka", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842809/RM11.jpg_jkzhfm.png"},
      { name: "Baskaran", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842811/RM12.jpg_ycgz0t.png"},
      { name: "Pathuma", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM13.jpg_a3klzf.png"},
      { name: "Balasundram Chandreswaran", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842785/RM15.jpg_fx99tf.png"},
      { name: "Tariq Bongso", role: "Regeonal Manager" ,img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781875828/IMG_20260619_165915_czrvjq.png"},


    ],
  },
];
