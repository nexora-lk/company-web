// ============================================================================
//  FULL IMAGE GALLERY — paste your own Cloudinary links here.
// ============================================================================
//
//  HOW TO ADD YOUR IMAGES:
//  1. Upload your photos to your Cloudinary account.
//  2. Copy each image's delivery URL (looks like:
//       https://res.cloudinary.com/<your-cloud>/image/upload/v123456/folder/photo.jpg )
//  3. Paste them into MY_IMAGES below — one entry per photo.
//     You can write either:
//        - just the URL as a string:            'https://res.cloudinary.com/.../photo.jpg'
//        - or an object with a caption/alt:      { src: 'https://...', caption: 'Branch opening', alt: 'Ribbon cutting' }
//
//  As long as MY_IMAGES has at least one entry, ONLY your images are shown.
//  While it's empty, the demo placeholder set below is shown so the page works.
// ============================================================================

type ImageInput = string | { src: string; alt?: string; caption?: string };

const MY_IMAGES: ImageInput[] = [
    // 👇 PASTE YOUR CLOUDINARY IMAGE LINKS HERE, e.g.
    // 'https://res.cloudinary.com/ddxvnb0nk/image/upload/v1720000000/gallery/opening-1.jpg',
    // { src: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/v1720000000/gallery/tea-estate.jpg', caption: 'The highland tea, at sunrise' },
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491479/WhatsApp_Image_2026-06-15_at_05.51.49_qpdewi.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491407/WhatsApp_Image_2026-06-15_at_05.51.48_uzze5x.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491400/WhatsApp_Image_2026-06-15_at_05.51.48_1_jtfzft.jpg",

    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491479/WhatsApp_Image_2026-06-15_at_05.59.53_ieyhr0.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491477/WhatsApp_Image_2026-06-15_at_05.59.55_yjcw9t.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491418/WhatsApp_Image_2026-06-15_at_05.59.53_1_bkhuxv.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491463/WhatsApp_Image_2026-06-15_at_05.59.54_jdaklv.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491478/WhatsApp_Image_2026-06-15_at_05.59.57_uudxyw.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491464/WhatsApp_Image_2026-06-15_at_05.59.57_1_zefqwa.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491466/WhatsApp_Image_2026-06-15_at_05.59.58_momqoc.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491439/WhatsApp_Image_2026-06-15_at_06.00.29_biczlr.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491386/WhatsApp_Image_2026-06-15_at_06.00.29_1_vb8hln.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491476/WhatsApp_Image_2026-06-15_at_06.00.31_alo0ml.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491474/WhatsApp_Image_2026-06-15_at_06.00.32_ilelnb.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491474/WhatsApp_Image_2026-06-15_at_06.00.33_izidty.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491460/WhatsApp_Image_2026-06-15_at_06.00.33_1_etnbzx.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491463/WhatsApp_Image_2026-06-15_at_06.00.35_kgnfcj.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491444/WhatsApp_Image_2026-06-15_at_06.00.34_1_kjnyww.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491420/WhatsApp_Image_2026-06-15_at_06.00.39_xujpzu.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491450/WhatsApp_Image_2026-06-15_at_06.00.37_x49ffv.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491451/WhatsApp_Image_2026-06-15_at_06.00.38_c340vn.jpg",

    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491393/WhatsApp_Image_2026-06-15_at_06.02.28_moy2zw.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491395/WhatsApp_Image_2026-06-15_at_06.02.27_1_hoh4ej.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491393/WhatsApp_Image_2026-06-15_at_06.02.28_1_hxhw4p.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491393/WhatsApp_Image_2026-06-15_at_06.02.25_e3jebh.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491425/WhatsApp_Image_2026-06-15_at_06.02.27_vexnq4.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491411/WhatsApp_Image_2026-06-15_at_06.02.25_1_djqaqb.jpg",

    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491462/WhatsApp_Image_2026-06-15_at_05.50.59_n6butw.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491462/WhatsApp_Image_2026-06-15_at_05.50.59_n6butw.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491476/WhatsApp_Image_2026-06-15_at_05.51.00_1_kfctgf.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491461/WhatsApp_Image_2026-06-15_at_05.51.00_aqe1rd.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491461/WhatsApp_Image_2026-06-15_at_05.51.01_1_k1da5k.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491460/WhatsApp_Image_2026-06-15_at_05.51.00_2_s2zpso.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491460/WhatsApp_Image_2026-06-15_at_05.51.00_2_s2zpso.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491459/WhatsApp_Image_2026-06-15_at_05.51.01_eev1ye.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491455/WhatsApp_Image_2026-06-15_at_05.51.02_1_srescc.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491455/WhatsApp_Image_2026-06-15_at_05.51.02_2_ij10sg.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491451/WhatsApp_Image_2026-06-15_at_05.51.02_anzlcz.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491444/WhatsApp_Image_2026-06-15_at_05.51.04_zatrrt.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491439/WhatsApp_Image_2026-06-15_at_05.51.03_1_z0snji.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491438/WhatsApp_Image_2026-06-15_at_05.51.03_wv6pqi.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491431/WhatsApp_Image_2026-06-15_at_05.51.03_2_wnt8ph.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491422/WhatsApp_Image_2026-06-15_at_05.51.04_1_rqhe8s.jpg",
    "https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1781491427/WhatsApp_Image_2026-06-15_at_05.51.04_2_u7lazy.jpg"
];

export type GalleryImage = {
    /** Full Cloudinary delivery URL (transforms are applied automatically by the loader). */
    src: string;
    alt: string;
    caption: string;
};

// ── Demo placeholder set (Cloudinary public `demo` cloud — verified live) ────
// Shown only while MY_IMAGES above is empty. Safe to delete once you add yours.
const DEMO_CLOUD = 'demo';
const demoUrl = (publicId: string) =>
    `https://res.cloudinary.com/${DEMO_CLOUD}/image/upload/${publicId}.jpg`;

const demoIds: { id: string; alt: string; caption: string }[] = [
    { id: 'samples/landscapes/beach-boat', alt: 'Coastline at dawn', caption: 'Southern coast · first light' },
    { id: 'samples/landscapes/nature-mountains', alt: 'Highland range', caption: 'Central highlands' },
    { id: 'samples/landscapes/girl-urban-view', alt: 'City overlook', caption: 'Colombo skyline' },
    { id: 'samples/landscapes/architecture-signs', alt: 'Street architecture', caption: 'Fort district' },
    { id: 'samples/landscapes/landscape-panorama', alt: 'Wide valley panorama', caption: 'Estate valley · panorama' },
    { id: 'samples/people/boy-snow-hoodie', alt: 'Portrait, outdoors', caption: 'Community portrait' },
    { id: 'samples/people/jazz', alt: 'Musician portrait', caption: 'Opening night, live music' },
    { id: 'samples/people/kitchen-bar', alt: 'At the counter', caption: 'Hospitality · the bar' },
    { id: 'samples/people/smiling-man', alt: 'Smiling staff member', caption: 'A team member at the door' },
    { id: 'samples/people/bicycle', alt: 'Rider on a bicycle', caption: 'Field day · the ride out' },
    { id: 'samples/man-portrait', alt: 'Studio portrait', caption: "Director's portrait" },
    { id: 'samples/woman-on-a-football-field', alt: 'On the field', caption: 'Staff sports day' },
    { id: 'samples/outdoor-woman', alt: 'Portrait outdoors', caption: 'Branch welcome' },
    { id: 'samples/two-ladies', alt: 'Two colleagues', caption: 'The loan desk team' },
    { id: 'samples/smile', alt: 'A smile', caption: 'First customer of the day' },
    { id: 'samples/look-up', alt: 'Looking up', caption: 'Inside the new floor' },
    { id: 'samples/upscale-face-1', alt: 'Close portrait', caption: 'Community partner' },
    { id: 'couple', alt: 'A couple', caption: 'At the reception' },
    { id: 'woman', alt: 'Portrait of a woman', caption: 'Microfinance member' },
    { id: 'lady', alt: 'Portrait', caption: 'A borrower, day one' },
    { id: 'happy_people', alt: 'A group of people', caption: 'Family of staff' },
    { id: 'samples/imagecon-group', alt: 'Group gathering', caption: 'Provincial heads, all in one room' },
    { id: 'samples/cloudinary-group', alt: 'Team group photo', caption: 'The branch team' },
    { id: 'samples/food/spices', alt: 'Spices', caption: 'Plantation produce · spices' },
    { id: 'samples/food/pot-mussels', alt: 'A served dish', caption: 'Hospitality · the kitchen' },
    { id: 'samples/food/dessert', alt: 'Dessert', caption: 'Welcome cake, marked PGGOC' },
    { id: 'samples/food/fish-vegetables', alt: 'Fresh produce', caption: 'Estate table' },
    { id: 'samples/breakfast', alt: 'Breakfast spread', caption: 'Morning, before the ribbon' },
    { id: 'samples/dessert-on-a-plate', alt: 'Plated dessert', caption: 'Tasting tent' },
    { id: 'samples/coffee', alt: 'A cup of coffee', caption: 'Plantation · the cup' },
    { id: 'samples/cup-on-a-table', alt: 'Cup on a table', caption: 'Reception, late afternoon' },
    { id: 'pasta', alt: 'A plate of pasta', caption: 'Hospitality service' },
    { id: 'samples/animals/three-dogs', alt: 'Three dogs', caption: 'Estate companions' },
    { id: 'samples/animals/kitten-playing', alt: 'A kitten', caption: 'At the gate' },
    { id: 'samples/animals/reindeer', alt: 'Wildlife', caption: 'Field day · wildlife' },
    { id: 'samples/animals/cat', alt: 'A cat', caption: 'Around the grounds' },
    { id: 'samples/sheep', alt: 'Sheep grazing', caption: 'Lowland field' },
    { id: 'dog', alt: 'A dog', caption: 'Estate gatekeeper' },
    { id: 'kitten', alt: 'A small kitten', caption: 'Garden, side entrance' },
    { id: 'samples/ecommerce/accessories-bag', alt: 'A bag', caption: 'Retail · accessories' },
    { id: 'samples/ecommerce/leather-bag-gray', alt: 'Leather bag', caption: 'Retail · leather goods' },
    { id: 'samples/ecommerce/analog-classic', alt: 'A classic watch', caption: 'Gems & timepieces' },
    { id: 'samples/ecommerce/shoes', alt: 'A pair of shoes', caption: 'Retail · footwear' },
    { id: 'shoes', alt: 'Shoes on display', caption: 'Storefront detail' },
    { id: 'samples/bike', alt: 'A bicycle', caption: 'Outside the branch' },
    { id: 'bike', alt: 'A parked bike', caption: 'Field day · arrivals' },
    { id: 'samples/balloons', alt: 'Balloons', caption: 'Opening celebration' },
    { id: 'balloons', alt: 'Colourful balloons', caption: 'Ribbon day, 9:00am sharp' },
    { id: 'flowers', alt: 'Flowers', caption: 'Floral garland' },
    { id: 'yellow_tulip', alt: 'A yellow tulip', caption: 'Garden detail' },
    { id: 'samples/chair-and-coffee-table', alt: 'A lounge setting', caption: 'Hospitality · the lounge' },
    { id: 'samples/man-on-a-escalator', alt: 'On an escalator', caption: 'Real estate · the lobby' },
    { id: 'samples/man-on-a-street', alt: 'On the street', caption: 'A working day downtown' },
    { id: 'mountain', alt: 'A mountain', caption: 'Highland estate' },
    { id: 'beach', alt: 'A beach', caption: 'Coastal property' },
    { id: 'face_top', alt: 'Portrait study', caption: 'Community, at the door' },
    { id: 'face_left', alt: 'Portrait study', caption: 'A neighbour stops by' },
    { id: 'sample', alt: 'Mountain landscape', caption: 'The highland tea, at sunrise' },
    { id: 'cld-sample', alt: 'Product still life', caption: 'Detail · craftsmanship' },
    { id: 'cld-sample-2', alt: 'Product still life', caption: 'Detail · finish' },
    { id: 'cld-sample-3', alt: 'Product still life', caption: 'Detail · materials' },
    { id: 'cld-sample-4', alt: 'Product still life', caption: 'Detail · close study' },
    { id: 'cld-sample-5', alt: 'Product still life', caption: 'Detail · the line' },
    { id: 'samples/food/dessert', alt: 'A plated dessert', caption: 'Easter charity drive' },
];

const demoImages: GalleryImage[] = demoIds.map(({ id, alt, caption }) => ({
    src: demoUrl(id),
    alt,
    caption,
}));

// ── Normalise MY_IMAGES into the GalleryImage shape ─────────────────────────
const normalise = (item: ImageInput, i: number): GalleryImage => {
    if (typeof item === 'string') {
        return { src: item, alt: `Gallery photograph ${i + 1}`, caption: '' };
    }
    return {
        src: item.src,
        alt: item.alt ?? item.caption ?? `Gallery photograph ${i + 1}`,
        caption: item.caption ?? '',
    };
};

// Drop any accidentally-repeated URLs so the wall never shows the same photo twice.
const dedupe = (arr: GalleryImage[]): GalleryImage[] => {
    const seen = new Set<string>();
    return arr.filter((img) => (seen.has(img.src) ? false : seen.add(img.src)));
};

export const galleryImages: GalleryImage[] = dedupe(
    MY_IMAGES.length > 0 ? MY_IMAGES.map(normalise) : demoImages,
);
