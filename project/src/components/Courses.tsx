import { Star, Clock, Users, ArrowRight } from 'lucide-react';

const COURSES = [
  {
    title: 'Full-Stack React Mastery',
    category: 'Web Dev',
    level: 'Intermediate',
    rating: 4.9,
    reviews: 2841,
    students: '8.4k',
    hours: 42,
    price: 89,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=600&h=400&fit=crop',
    badge: 'Bestseller',
    badgeColor: 'gold',
  },
  {
    title: 'AI Engineering with Python',
    category: 'AI & ML',
    level: 'Advanced',
    rating: 4.8,
    reviews: 1930,
    students: '5.2k',
    hours: 58,
    price: 119,
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?w=600&h=400&fit=crop',
    badge: 'New',
    badgeColor: 'teal',
  },
  {
    title: 'Cloud Architecture on AWS',
    category: 'Cloud',
    level: 'Intermediate',
    rating: 4.9,
    reviews: 3210,
    students: '11k',
    hours: 36,
    price: 99,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=600&h=400&fit=crop',
    badge: 'Top Rated',
    badgeColor: 'nile',
  },
  {
    title: 'Data Science Foundations',
    category: 'Data Science',
    level: 'Beginner',
    rating: 4.7,
    reviews: 4560,
    students: '14k',
    hours: 28,
    price: 69,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?w=600&h=400&fit=crop',
    badge: 'Popular',
    badgeColor: 'scarab',
  },
  {
    title: 'Next.js 14 & App Router',
    category: 'Web Dev',
    level: 'Advanced',
    rating: 4.9,
    reviews: 1280,
    students: '3.8k',
    hours: 24,
    price: 79,
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?w=600&h=400&fit=crop',
    badge: 'New',
    badgeColor: 'teal',
  },
  {
    title: 'LLMs & Prompt Engineering',
    category: 'AI & ML',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 960,
    students: '2.9k',
    hours: 20,
    price: 89,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?w=600&h=400&fit=crop',
    badge: 'Hot',
    badgeColor: 'sienna',
  },
];

const badgeStyles: Record<string, string> = {
  gold: 'bg-gold-600/20 text-gold-300 border-gold-600/40',
  teal: 'bg-teal-600/20 text-teal-300 border-teal-600/40',
  nile: 'bg-nile-600/20 text-nile-300 border-nile-600/40',
  scarab: 'bg-scarab-600/20 text-scarab-300 border-scarab-600/40',
  sienna: 'bg-sienna-600/20 text-sienna-300 border-sienna-600/40',
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          size={11}
          className={n <= Math.round(rating) ? 'star-filled fill-current' : 'star-empty'}
        />
      ))}
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="py-28 relative bg-night-900 overflow-hidden">
      <div className="orb w-96 h-96 bg-gold-700/6 top-0 right-[-10%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label">Sacred Knowledge</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
              Featured <span className="gold-text">Courses</span>
            </h2>
            <p className="text-ivory-500 mt-3 max-w-lg leading-relaxed">
              Every course is crafted by world-class instructors and updated quarterly to stay ahead of the industry.
            </p>
          </div>
          <a href="#" className="btn-outline shrink-0">
            View All 80+ Courses
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map(course => (
            <article
              key={course.title}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 to-transparent" />
                {/* Category */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-ivory-300 bg-night-900/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                  {course.category}
                </div>
                {/* Badge */}
                <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full border ${badgeStyles[course.badgeColor]}`}>
                  {course.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="text-ivory-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {course.level}
                </div>
                <h3 className="text-ivory-100 font-bold text-base leading-snug mb-3 group-hover:text-gold-300 transition-colors">
                  {course.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <Stars rating={course.rating} />
                  <span className="text-gold-400 text-xs font-bold">{course.rating}</span>
                  <span className="text-ivory-600 text-xs">({course.reviews.toLocaleString()})</span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-ivory-500 text-xs mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {course.hours}h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={11} />
                    {course.students} students
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="text-gold-400 font-display font-bold text-xl">
                    ${course.price}
                  </div>
                  <button className="btn-gold text-xs py-2 px-4">
                    Enroll Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
