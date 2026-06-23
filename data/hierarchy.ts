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
  /** Region / area this person covers — shown for Regional Managers & Micro Finance Head. */
  region?: string;
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
        role: "Managing Director / Head of Marketing",
        img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781332267/amunugama_sir_derector_profile_ykhpb8.png",
      },
      {
        name: "L. Manisha Amaratunga",
        role: "Director / HR & Finance",
        img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781330025/maneesha_madam_director_profile_fis1p7.png",
      },
      {
        name: "Y. M. D. T. Yatawara",
        role: "Director / Foreign Affairs",
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
    members: [{ name: "M Shahjhan Samsudern", role: "Asst. General Manager", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842778/AGM.jpg_lhw8x5.png" }],
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
      { name: "Thurai Athithan", role: "Provincial Head" , region: "North East Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/PH.jpg_yiuksc.png"},
      { name: "K. Mathikumar", role: "Provincial Head", region: "North East Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/PH4.jpg_sybzst.png" },
      { name: "Deeptha Leelaratne", role: "Provincial Head", region: "North West Province & North Central Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781846142/PH2_tcrtrv.png" },
      { name: "D S Solamon", role: "Provincial Head" , region: "North East Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842814/PH3.jpg_vca1r5.png"},
    ],
  },
  {
    id: "Micro Finance Head",
    label: "Micro Finance Head",
    variant: "named",
    members: [{ name: "K.p. sampath kumara", role: "Micro Finance Head" , region: "Kalutara", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/RM14.jpg_nvwb5f.png"}],
  },
  {
    id: "Deputy Provincial Head",
    label: "Deputy Provincial Head",
    variant: "named",
    members: [
      { name: "B V A D Chandana", role: "Deputy Provincial Head" , region: "North Western Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/DPH6.jpg_w9x9sv.png"},
      { name: "R M S A K Kumara", role: "Deputy Provincial Head" , region: "North West Province & North Central Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842787/DPH5.jpg_xscnb6.png"},
      { name: "S Mathimaran", role: "Deputy Provincial Head" , region: "North Province & East Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842794/DPH4.jpg_qsc2xl.png"},
      { name: "MR.Balenthiran Vithushan", role: "Deputy Provincial Head" , region: "North Province & East Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842789/DPH3.jpg_uxjo9c.png"},
      { name: "P P Janaka Prasad", role: "Deputy Provincial Head" , region: "Southern Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842779/DPH.jpg_ecdb5n.png"},
      { name: "Priyan de silva", role: "Deputy Provincial Head" , region: "Panadura", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/v1782224380/DPH_kena_kek3qw.png"},
    ],
  },
  {
    id: "Micro Finance Unit Head",
    label: "Micro Finance Unit Head",
    variant: "named",
    members: [
        { name: "S C R Thisera", role: "Micro Finance Unit Head" , region: "Kuliyapitiya", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842780/DPH2.jpg_cruybe.png"},
        { name: "A G Miuru Pujitha", role: "Micro Finance Unit Head" , region: "Southern Province", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/v1782224380/micro_Finance_unit_head_kenek_riqpzb.png"},
    ],
  },
  {
    id: "Regeonal Manager",
    label: "Regional Manager",
    variant: "team",
    members: [
      { name: "D D  S A Gunasekara", role: "Regeonal Manager" , region: "Kurunegala", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842803/RM4.jpg_yi5dwm.png"},
      { name: "K G Rajasingham", role: "Regeonal Manager" , region: "Batticoloa", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842794/RM.jpg_nl9q1w.png"},
      { name: "W S P Kumara", role: "Regeonal Manager" , region: "Kuliyapitiya", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842802/RM2.jpg_jmurzr.png"},
      { name: "M M G A S Gamage", role: "Regeonal Manager" , region: "Galewela", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM3.jpg_rfibzu.png"},
      { name: "M Szuthskaran", role: "Regeonal Manager" , region: "Batticaloa", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM5.jpg_n4cam6.png"},
      { name: "S S Mahesan", role: "Regeonal Manager" , region: "Batticoloa", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842800/RM16_twppom.png"},
      { name: " M J M Aslam", role: "Regeonal Manager" , region: "Valachenai", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM6.jpg_aztleo.png"},
      { name: "N B Kalyani", role: "Regeonal Manager" , region: "Kurunegala", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/RM20_sjvdwl.png"},
      { name: "K Sadeskumar", role: "Regeonal Manager" , region: "Kandy", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842812/RM7.jpg_sn8frj.png"},
      { name: "V.Jude Abishek", role: "Regeonal Manager" , region: "Jaffna", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842782/RM8.jpg_s1oev4.png"},
      { name: "Kajana Sathiyanshsn", role: "Regeonal Manager" , region: "Jaffna", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842806/RM19_iqms4e.png"},
      { name: "S Pireetha", role: "Regeonal Manager" , region: "Jaffna", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842802/RM18_nopdkq.png"},
      { name: "A Gunalan", role: "Regeonal Manager" , region: "Batticaloa", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842784/RM9.jpg_acz8sm.png"},
      { name: " M M Cassim", role: "Regeonal Manager" , region: "Kandana", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM10.jpg_jmblax.png"},
      { name: "Kumudu Senanayaka", role: "Regeonal Manager" , region: "Mathara", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842798/RM17_yuz2xp.png"},
      { name: "A D K N Dasanayaka", role: "Regeonal Manager" , region: "Kuliyapitiya", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842809/RM11.jpg_jkzhfm.png"},
      { name: "P. Basakaran", role: "Regeonal Manager" , region: "Batticoloa", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842811/RM12.jpg_ycgz0t.png"},
      { name: "Balaiya Vinayagamoorthy", role: "Regeonal Manager" , region: "Ampara", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842790/RM13.jpg_a3klzf.png"},
      { name: "Balasundram Chandreswaran", role: "Regeonal Manager" , region: "Kalmunai", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781842785/RM15.jpg_fx99tf.png"},
      { name: "Tariq Bongso", role: "Regeonal Manager" , region: "Kandana", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781875828/IMG_20260619_165915_czrvjq.png"},
      { name: "C M Wijesinghe", role: "Regeonal Manager" , region: "Horana", img: "https://res.cloudinary.com/ddxvnb0nk/image/upload/v1782224381/RM_kena_qwk273.png"},
    ],
  },
];
