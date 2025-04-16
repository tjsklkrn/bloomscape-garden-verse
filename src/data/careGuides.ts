
export interface CareGuide {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  difficulty: 'easy' | 'moderate' | 'advanced';
  content: {
    sections: Array<{
      title: string;
      content: string;
    }>;
    tips: string[];
  };
  plantTypes: string[];
  createdAt: string;
}

export const careGuides: CareGuide[] = [
  {
    id: '1',
    title: 'Beginner's Guide to Indoor Plants',
    slug: 'beginners-guide-to-indoor-plants',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop',
    summary: 'Everything you need to know to start your indoor plant journey successfully.',
    difficulty: 'easy',
    content: {
      sections: [
        {
          title: 'Choosing Your First Plants',
          content: 'When starting your indoor plant collection, it\'s best to begin with hardy, forgiving varieties. Snake plants, pothos, and ZZ plants are excellent choices for beginners as they can withstand irregular watering and various light conditions. Look for healthy specimens with vibrant colors and no signs of pests or disease when purchasing.'
        },
        {
          title: 'Understanding Light Requirements',
          content: 'Light is the most important factor for plant growth. Most indoor plants prefer bright, indirect light. South and west-facing windows typically provide the most light, while north-facing windows offer gentle, indirect light. If your space lacks natural light, consider supplementing with grow lights specifically designed for plants.'
        },
        {
          title: 'Watering Basics',
          content: 'Overwatering is the most common cause of houseplant death. Rather than following a strict schedule, check the soil moisture before watering. Insert your finger about an inch into the soil—if it feels dry, it\'s time to water. When you do water, do so thoroughly until water drains from the bottom of the pot, then empty the drainage tray.'
        },
        {
          title: 'Potting and Soil',
          content: 'Most houseplants thrive in well-draining potting mix specifically formulated for indoor plants. Ensure your containers have drainage holes to prevent water from sitting at the roots. Choose pots that are proportional to your plant\'s size, typically 1-2 inches wider than the root ball for new plants.'
        }
      ],
      tips: [
        'Group plants with similar care needs together',
        'Rotate plants quarterly to ensure even growth',
        'Clean leaves regularly to remove dust and help plants photosynthesize',
        'Watch for early signs of pests like yellowing leaves or sticky residue',
        'Increase humidity for tropical plants by grouping them together or using a humidifier'
      ]
    },
    plantTypes: ['Indoor Plants', 'Beginner Friendly'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Mastering Succulent Care',
    slug: 'mastering-succulent-care',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop',
    summary: 'Learn the essential techniques for keeping your succulents thriving all year round.',
    difficulty: 'moderate',
    content: {
      sections: [
        {
          title: 'Light Requirements',
          content: 'Succulents thrive in bright, direct light. Most varieties need 6+ hours of sunlight daily. Without sufficient light, succulents will stretch and lose their compact shape, a condition called etiolation. South-facing windows are ideal, but supplemental grow lights can be used during darker months.'
        },
        {
          title: 'Watering Techniques',
          content: 'The "soak and dry" method works best for succulents. Water thoroughly until it drains from the pot, then wait until the soil is completely dry before watering again. This might mean watering once every 2-3 weeks, depending on your climate. During winter dormancy, reduce watering frequency even further.'
        },
        {
          title: 'Soil and Potting',
          content: 'Succulents require extremely well-draining soil to prevent rot. Use commercial cactus/succulent mix or create your own by combining regular potting soil with coarse sand and perlite. Always use containers with drainage holes, and consider terracotta pots which help wick away excess moisture.'
        },
        {
          title: 'Seasonal Care',
          content: 'Most succulents have growing and dormant seasons. Many grow actively in spring and summer, requiring more water and occasional fertilizer during these periods. In fall and winter, growth slows, and plants need less water. Pay attention to your specific varieties, as some have opposite growth cycles.'
        }
      ],
      tips: [
        'Plant succulents in containers with drainage holes to prevent root rot',
        'Rotate occasionally to prevent leaning toward light sources',
        'Remove dead or dying leaves from the base of the plant',
        'Propagate easily by letting leaf cuttings callus before planting',
        'Protect outdoor succulents from extreme heat and cold'
      ]
    },
    plantTypes: ['Succulents', 'Drought Tolerant'],
    createdAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'Seasonal Care for Outdoor Plants',
    slug: 'seasonal-care-for-outdoor-plants',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
    summary: 'A comprehensive guide to caring for your garden throughout the changing seasons.',
    difficulty: 'moderate',
    content: {
      sections: [
        {
          title: 'Spring Preparations',
          content: 'As temperatures rise, inspect plants for winter damage and prune accordingly. Apply a slow-release fertilizer as new growth emerges. Divide perennials that have outgrown their spaces. Begin regular watering as the soil dries, focusing on deep, infrequent watering to encourage strong root development.'
        },
        {
          title: 'Summer Maintenance',
          content: 'During hot months, water deeply in the early morning to minimize evaporation and fungal issues. Mulch around plants to conserve moisture and suppress weeds. Deadhead flowers regularly to encourage continued blooming. Watch for signs of heat stress and increase watering during extremely hot periods.'
        },
        {
          title: 'Fall Care',
          content: 'Fall is ideal for planting trees and shrubs as the cooler temperatures reduce transplant shock. Gradually reduce watering as temperatures drop. Apply a layer of compost to beds before winter. Consider covering sensitive plants during early frosts to extend the growing season.'
        },
        {
          title: 'Winter Protection',
          content: 'Apply a thick layer of mulch around perennials after the ground freezes to prevent heaving cycles. Protect evergreens from winter burn with burlap screens. Avoid walking on frozen lawns and minimize salt exposure near plants. Check soil moisture during thaws and water if necessary, especially for evergreens.'
        }
      ],
      tips: [
        'Keep a garden journal to track plant performance across seasons',
        'Install rain barrels to collect water for summer irrigation',
        'Group plants with similar water and light needs together',
        'Test soil pH in spring and amend accordingly',
        'Create wind breaks to protect delicate plants from harsh winter winds'
      ]
    },
    plantTypes: ['Outdoor Plants', 'Perennials', 'Seasonal Care'],
    createdAt: '2024-02-15'
  },
  {
    id: '4',
    title: 'Troubleshooting Common Plant Problems',
    slug: 'troubleshooting-common-plant-problems',
    image: 'https://images.unsplash.com/photo-1644234429781-9eb5e6dcc9ee?q=80&w=800&auto=format&fit=crop',
    summary: 'Identify and solve the most frequent issues that affect houseplants and garden plants.',
    difficulty: 'advanced',
    content: {
      sections: [
        {
          title: 'Leaf Discoloration',
          content: 'Yellow leaves often indicate overwatering, while brown, crispy edges suggest underwatering or low humidity. Pale, bleached leaves may signal too much direct sunlight. Dark or black spots could be fungal infections requiring improved air circulation and reduced leaf wetness. Purple or reddish coloration sometimes indicates phosphorus deficiency or temperature stress.'
        },
        {
          title: 'Pest Identification and Treatment',
          content: 'Spider mites create fine webbing and cause stippled discoloration. Treat with insecticidal soap or neem oil, focusing on leaf undersides. Mealybugs appear as white, cottony clusters and can be removed with alcohol-soaked cotton swabs. Scale insects form hard shells on stems and require manual removal followed by horticultural oil application. Fungus gnats indicate overly wet soil; reduce watering and apply beneficial nematodes.'
        },
        {
          title: 'Growth Problems',
          content: 'Leggy, stretched growth typically results from insufficient light. Move plants to brighter locations or supplement with grow lights. Stunted growth may indicate root binding, nutrient deficiencies, or improper pH. Regularly inspect roots and repot when necessary. Fertilize with balanced nutrients appropriate for your plant type and stage of growth.'
        },
        {
          title: 'Disease Management',
          content: 'Powdery mildew appears as white, powdery patches and thrives in humid conditions with poor air circulation. Improve spacing between plants and apply fungicides at first signs. Root rot causes wilting despite moist soil and requires immediate action—remove affected plants from wet soil, trim damaged roots, and repot in fresh, well-draining medium. Prevent disease spread by disinfecting tools between plants.'
        }
      ],
      tips: [
        'Quarantine new plants for two weeks before introducing them to your collection',
        'Maintain good air circulation around plants to prevent fungal issues',
        'Keep detailed records of fertilizer applications to prevent over or under-feeding',
        'Use sterile tools when pruning to prevent disease transmission',
        'Consider beneficial insects like ladybugs for natural pest control'
      ]
    },
    plantTypes: ['All Plants', 'Troubleshooting'],
    createdAt: '2024-03-01'
  },
  {
    id: '5',
    title: 'Complete Guide to Plant Propagation',
    slug: 'complete-guide-to-plant-propagation',
    image: 'https://images.unsplash.com/photo-1622883964858-55bc19c86a6b?q=80&w=800&auto=format&fit=crop',
    summary: 'Expand your plant collection by learning various propagation methods for different plant types.',
    difficulty: 'advanced',
    content: {
      sections: [
        {
          title: 'Stem Cutting Propagation',
          content: 'For most houseplants, take 4-6 inch cuttings just below a node (where leaves attach to stems). Remove lower leaves, dip the cut end in rooting hormone if desired, and place in water or moist propagation medium. Maintain humidity with clear covers or bags, and provide bright, indirect light. Roots typically develop within 2-8 weeks depending on the species and conditions.'
        },
        {
          title: 'Leaf Propagation',
          content: 'Succulents, begonias, and African violets can propagate from single leaves. For succulents, allow the leaf to callus for 1-3 days before placing on well-draining soil. Mist occasionally but avoid soaking. For begonias, pin the leaf flat against soil with veins down, making small incisions across major veins. Keep consistently moist until plantlets form at cut points.'
        },
        {
          title: 'Division Techniques',
          content: 'Plants that grow in clumps or have multiple crowns can be divided. Carefully remove the plant from its pot and gently separate the root ball into sections, ensuring each section has healthy roots and foliage. Replant divisions immediately in fresh soil at the same depth as before. Water thoroughly and keep out of direct sunlight for a few days while they establish.'
        },
        {
          title: 'Air Layering',
          content: 'For woody plants resistant to cutting propagation, make a small upward cut partway through a branch. Hold the cut open with a toothpick, dust with rooting hormone, and wrap moist sphagnum moss around the area. Cover with plastic and secure both ends. When roots are visible through the moss (usually in 1-3 months), cut below the roots and pot the new plant.'
        }
      ],
      tips: [
        'Use clear containers for water propagation to monitor root development',
        'Maintain higher humidity for cuttings by covering with clear plastic bags',
        'Change water weekly when propagating in water to prevent bacterial growth',
        'Take cuttings from healthy, disease-free parent plants for best results',
        'Spring and summer are generally the best seasons for taking cuttings'
      ]
    },
    plantTypes: ['Propagation', 'All Plants'],
    createdAt: '2024-03-15'
  },
  {
    id: '6',
    title: 'Caring for Air Purifying Plants',
    slug: 'caring-for-air-purifying-plants',
    image: 'https://images.unsplash.com/photo-1597055181449-61396d051ff1?q=80&w=800&auto=format&fit=crop',
    summary: 'Optimize your indoor air quality with these specialized plants and proper care techniques.',
    difficulty: 'easy',
    content: {
      sections: [
        {
          title: 'Best Air Purifying Varieties',
          content: 'NASA research has identified several exceptional air-purifying plants: Peace lilies remove benzene, formaldehyde, and trichloroethylene; Spider plants eliminate carbon monoxide and xylene; Snake plants absorb nitrogen oxides and formaldehyde, plus release oxygen at night; Boston ferns remove more formaldehyde than any other plant; and Rubber plants excel at removing airborne toxins.'
        },
        {
          title: 'Optimal Placement',
          content: 'For maximum air purification, place plants where air circulates freely. Avoid tucking them in corners with stagnant air. Distribute plants throughout your home rather than grouping them all together. For bedrooms, consider snake plants or aloe vera which release oxygen at night, unlike most plants. Keep plants away from drafts and heating/cooling vents.'
        },
        {
          title: 'Care Requirements',
          content: 'Most air-purifying plants prefer bright, indirect light, though snake plants and ZZ plants tolerate lower light. Water when the top inch of soil feels dry. These plants generally benefit from higher humidity—group them together to create a microclimate or use a pebble tray with water. Clean leaves monthly with a damp cloth to remove dust, which optimizes air filtration efficiency.'
        },
        {
          title: 'Maximizing Purification',
          content: 'Research suggests one medium-sized plant (6-8 inch pot) per 100 square feet for noticeable air quality improvements. Combine different varieties to target various toxins. Plants with larger leaf surface areas generally filter more air. Some purifying plants, like peace lilies and spider plants, are mildly toxic to pets, so place accordingly if you have curious animals.'
        }
      ],
      tips: [
        'Rotate plants quarterly to ensure even growth and air filtration',
        'Repot annually to refresh soil and provide room for growth',
        'Avoid artificial soil fresheners or leaf shine products that may introduce chemicals',
        'Most air-purifying plants prefer moderate temperatures (65-80°F)',
        'Consider an air quality monitor to track improvements from your plants'
      ]
    },
    plantTypes: ['Air Purifying Plants', 'Indoor Plants'],
    createdAt: '2024-04-01'
  }
];
