// Central image configuration for the site.
// Put all image files in the repository's /images folder.
// The order of GALLERY_ITEMS below is the order shown in the gallery.

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`

export const HERO_IMAGE = {
  file: 'hero.jpg',
  src: imagePath('hero.jpg'),
  fallback: 'https://images.unsplash.com/photo-1767163983955-1a9e80048d96?w=1040&h=780&fit=crop&auto=format',
}

export const ABOUT_IMAGE = {
  file: 'about.jpg',
  src: imagePath('about.jpg'),
  fallback: 'https://images.unsplash.com/photo-1764510382967-4b224cc7b056?w=900&h=700&fit=crop&auto=format',
}

export const GALLERY_ITEMS = [
  {
    file: 'gallery-01.jpg',
    url: imagePath('gallery-01.jpg'),
    fallback: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=680&h=780&fit=crop&auto=format',
    label: 'חתונה',
  },
  {
    file: 'gallery-02.jpg',
    url: imagePath('gallery-02.jpg'),
    fallback: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=680&h=780&fit=crop&auto=format',
    label: 'רחבת ריקודים',
  },
  {
    file: 'gallery-03.jpg',
    url: imagePath('gallery-03.jpg'),
    fallback: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=680&h=780&fit=crop&auto=format',
    label: 'אירוע',
  },
  {
    file: 'gallery-04.jpg',
    url: imagePath('gallery-04.jpg'),
    fallback: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=680&h=780&fit=crop&auto=format',
    label: 'מסיבה',
  },
  {
    file: 'gallery-05.jpg',
    url: imagePath('gallery-05.jpg'),
    fallback: 'https://images.unsplash.com/photo-1544785316-6e58aed68a50?w=680&h=780&fit=crop&auto=format',
    label: 'DJ Live',
  },
  {
    file: 'gallery-06.jpg',
    url: imagePath('gallery-06.jpg'),
    fallback: 'https://images.unsplash.com/photo-1574154894072-18ba0d48321b?w=680&h=780&fit=crop&auto=format',
    label: 'רגעים מהאירוע',
  },
]
