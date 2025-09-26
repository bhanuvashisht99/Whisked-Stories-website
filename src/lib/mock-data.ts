import { Product, BlogPost, Event, Testimonial } from '@/types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Chocolate Fudge Cake',
    description: 'Rich, moist chocolate cake layered with creamy chocolate fudge frosting. A timeless favorite that melts in your mouth.',
    price: 1200,
    category: 'Chocolate',
    season: 'all-year',
    is_archived: false,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Cream'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 380,
      protein: 5.2,
      carbohydrates: 45,
      fat: 18,
      sugar: 32
    },
    is_available: true,
    created_at: '2024-01-15',
    updated_at: '2024-01-15'
  },
  {
    id: '2',
    name: 'Seasonal Mango Passion Cake',
    description: 'Light sponge cake infused with fresh mango puree and passion fruit, topped with mango buttercream.',
    price: 1500,
    category: 'Fruit',
    season: 'summer',
    is_archived: false,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Fresh mango', 'Passion fruit', 'Butter', 'Eggs', 'Sugar', 'Flour'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 320,
      protein: 4.8,
      carbohydrates: 42,
      fat: 15,
      sugar: 28
    },
    is_available: true,
    created_at: '2024-03-20',
    updated_at: '2024-03-20'
  },
  {
    id: '3',
    name: 'Winter Spiced Carrot Cake',
    description: 'Warm spices blend with fresh carrots in this moist cake, topped with cinnamon cream cheese frosting.',
    price: 1300,
    category: 'Spiced',
    season: 'winter',
    is_archived: true,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Carrots', 'Cinnamon', 'Nutmeg', 'Walnuts', 'Cream cheese', 'Eggs'],
    allergens: ['Eggs', 'Dairy', 'Gluten', 'Nuts'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 350,
      protein: 6.2,
      carbohydrates: 40,
      fat: 16,
      sugar: 25
    },
    is_available: false,
    created_at: '2023-12-10',
    updated_at: '2023-12-10'
  },
  {
    id: '4',
    name: 'Red Velvet Classic',
    description: 'Velvety smooth red velvet cake with layers of tangy cream cheese frosting. A perfect balance of sweet and tart.',
    price: 1400,
    category: 'Classic',
    season: 'all-year',
    is_archived: false,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Cocoa powder', 'Red food coloring', 'Buttermilk', 'Cream cheese', 'Butter'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 360,
      protein: 4.5,
      carbohydrates: 48,
      fat: 17,
      sugar: 35
    },
    is_available: true,
    created_at: '2024-02-05',
    updated_at: '2024-02-05'
  },
  {
    id: '5',
    name: 'Lemon Lavender Delight',
    description: 'Delicate lemon sponge infused with culinary lavender, topped with lemon curd and lavender buttercream.',
    price: 1600,
    category: 'Floral',
    season: 'spring',
    is_archived: false,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Fresh lemons', 'Culinary lavender', 'Butter', 'Eggs', 'Sugar', 'Flour'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 340,
      protein: 4.2,
      carbohydrates: 44,
      fat: 16,
      sugar: 30
    },
    is_available: true,
    created_at: '2024-03-15',
    updated_at: '2024-03-15'
  },
  {
    id: '6',
    name: 'Autumn Pumpkin Spice Cake',
    description: 'Seasonal pumpkin cake with warm fall spices, topped with maple cream cheese frosting and candied pecans.',
    price: 1350,
    category: 'Seasonal',
    season: 'autumn',
    is_archived: true,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    ingredients: ['Pumpkin puree', 'Cinnamon', 'Nutmeg', 'Maple syrup', 'Pecans', 'Cream cheese'],
    allergens: ['Eggs', 'Dairy', 'Gluten', 'Nuts'],
    serving_size: '8-10 people',
    nutritional_info: {
      calories: 365,
      protein: 5.8,
      carbohydrates: 42,
      fat: 18,
      sugar: 28
    },
    is_available: false,
    created_at: '2023-10-20',
    updated_at: '2023-10-20'
  }
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Seasonal Baking: Why We Change Our Menu',
    slug: 'art-of-seasonal-baking',
    content: 'At Whisked Stories, we believe that baking should celebrate the seasons. Each season brings its own unique flavors, ingredients, and emotions...',
    excerpt: 'Discover why we embrace seasonal baking and how it creates unique flavors throughout the year.',
    featured_image: '/api/placeholder/600/400',
    author_id: 'ayushi',
    is_published: true,
    tags: ['Seasonal', 'Philosophy', 'Ingredients'],
    created_at: '2024-03-10',
    updated_at: '2024-03-10'
  },
  {
    id: '2',
    title: 'Behind the Scenes: Creating Our Signature Chocolate Fudge',
    slug: 'signature-chocolate-fudge',
    content: 'Today I want to share the story behind our most popular cake - the Classic Chocolate Fudge. It all started with my grandmother\'s recipe...',
    excerpt: 'The heartwarming story and technique behind our bestselling chocolate fudge cake.',
    featured_image: '/api/placeholder/600/400',
    author_id: 'ayushi',
    is_published: true,
    tags: ['Recipe', 'Chocolate', 'Family'],
    created_at: '2024-02-28',
    updated_at: '2024-02-28'
  },
  {
    id: '3',
    title: 'Sourcing Local: Our Partnership with Indian Mango Farmers',
    slug: 'sourcing-local-mango-farmers',
    content: 'This summer, we\'re excited to introduce our partnership with local mango farmers from Maharashtra...',
    excerpt: 'How we source the best local ingredients to create authentic flavors in our seasonal cakes.',
    featured_image: '/api/placeholder/600/400',
    author_id: 'ayushi',
    is_published: true,
    tags: ['Local Sourcing', 'Mango', 'Sustainability'],
    created_at: '2024-03-15',
    updated_at: '2024-03-15'
  }
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Baking Workshop: Learn to Make Floral Cakes',
    description: 'Join us for a hands-on workshop where you\'ll learn to create beautiful floral-themed cakes perfect for spring celebrations.',
    date: '2024-04-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Whisked Stories Kitchen, Mumbai',
    images: ['/api/placeholder/500/300', '/api/placeholder/500/300'],
    is_featured: true,
    max_attendees: 12,
    current_attendees: 8,
    price: 2500,
    created_at: '2024-03-01'
  },
  {
    id: '2',
    title: 'Mother\'s Day Cake Decorating Class',
    description: 'Create a special cake for your mother with our expert guidance. All materials included.',
    date: '2024-05-12',
    time: '2:00 PM - 5:00 PM',
    location: 'Whisked Stories Kitchen, Mumbai',
    images: ['/api/placeholder/500/300'],
    is_featured: false,
    max_attendees: 15,
    current_attendees: 3,
    price: 1800,
    created_at: '2024-03-20'
  }
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    customer_name: 'Priya Sharma',
    customer_image: '/api/placeholder/100/100',
    rating: 5,
    review: 'The chocolate fudge cake was absolutely divine! Perfect for my daughter\'s birthday. The texture was so moist and the flavor was rich without being overwhelming.',
    product_id: '1',
    is_featured: true,
    created_at: '2024-03-18'
  },
  {
    id: '2',
    customer_name: 'Rajesh Kumar',
    customer_image: '/api/placeholder/100/100',
    rating: 5,
    review: 'Whisked Stories made our anniversary extra special. The red velvet cake was not just beautiful but tasted amazing. Highly recommend!',
    product_id: '4',
    is_featured: true,
    created_at: '2024-03-10'
  },
  {
    id: '3',
    customer_name: 'Anita Desai',
    rating: 4,
    review: 'Great quality cakes with unique flavors. The seasonal mango cake was a hit at our summer party. Will definitely order again!',
    product_id: '2',
    is_featured: false,
    created_at: '2024-03-05'
  }
]