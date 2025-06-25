export type Category = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  color: string;
  hoverColor: string;
  className: string;
};

export const categories: Category[] = [
  {
    id: 'womens',
    title: 'Her',
    image: {
      src: '/HER_escape.jpg',
      alt: 'Image of a woman laying down in the sun with her eyes closed, wearing an orange hoodie and orange eyeshadow.',
    },
    color: 'bg-ember',
    hoverColor: 'bg-aura/50',
    className: 'rounded-t-xl md:rounded-xl md:rounded-r-none',
  },
  {
    id: 'mens',
    title: 'Him',
    image: {
      src: '/HIM_buckethat.jpg',
      alt: 'Image of a man wearing a beige bucket hat.',
    },
    color: 'bg-aura',
    hoverColor: 'bg-ember/50',
    className: '',
  },
  {
    id: 'unisex',
    title: 'Uni',
    image: {
      src: '/UNI_monochrome.jpg',
      alt: 'Image of a man and a woman wearing sunglasses.',
    },
    color: 'bg-zest',
    hoverColor: 'bg-moss/50',
    className: 'object-[60%_30%]',
  },
  {
    id: 'new',
    title: 'New',
    image: {
      src: '/HER_bikini.jpg',
      alt: 'Image of a woman wearing a bikini.',
    },
    color: 'bg-pearl',
    hoverColor: 'bg-zest/50',
    className: 'rounded-b-xl md:rounded-xl md:rounded-l-none',
  },
];
