import { useState, useRef, useEffect } from 'react';
import { Star, Clock, Users, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const techTopics = [
  'Python',
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Next.js',
  'C#',
  'Java',
  'Go',
  'Rust',
  'SQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Linux',
  'GitHub Actions',
  'TensorFlow',
  'PyTorch',
  'OpenAI APIs',
  'LangChain',
  'Prompt Engineering',
  'Computer Vision',
  'MLOps',
  'Cybersecurity',
  'System Design',
  'API Development',
];

function getLocalizedTopic(topic: string, language: string) {
  const mapping: Record<string, Record<string, string>> = {
    ar: {
      Python: 'بايثون',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'Prompt Engineering',
      'Computer Vision': 'الرؤية الحاسوبية',
      'MLOps': 'MLOps',
      Cybersecurity: 'الأمن السيبراني',
      'System Design': 'تصميم الأنظمة',
      'API Development': 'تطوير الـ APIs',
    },
    fr: {
      Python: 'Python',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'Ingénierie des prompts',
      'Computer Vision': 'Vision par ordinateur',
      'MLOps': 'MLOps',
      Cybersecurity: 'Cybersécurité',
      'System Design': 'Architecture système',
      'API Development': 'Développement d’API',
    },
    es: {
      Python: 'Python',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'Ingeniería de prompts',
      'Computer Vision': 'Visión por computador',
      'MLOps': 'MLOps',
      Cybersecurity: 'Ciberseguridad',
      'System Design': 'Diseño de sistemas',
      'API Development': 'Desarrollo de APIs',
    },
    de: {
      Python: 'Python',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'Prompt-Engineering',
      'Computer Vision': 'Computer Vision',
      'MLOps': 'MLOps',
      Cybersecurity: 'Cybersecurity',
      'System Design': 'System Design',
      'API Development': 'API-Entwicklung',
    },
    pt: {
      Python: 'Python',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'Engenharia de prompts',
      'Computer Vision': 'Visão computacional',
      'MLOps': 'MLOps',
      Cybersecurity: 'Cibersegurança',
      'System Design': 'Design de sistemas',
      'API Development': 'Desenvolvimento de APIs',
    },
    hi: {
      Python: 'पायथन',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'प्रॉम्प्ट इंजीनियरिंग',
      'Computer Vision': 'कंप्यूटर विज़न',
      'MLOps': 'MLOps',
      Cybersecurity: 'साइबर सुरक्षा',
      'System Design': 'सिस्टम डिज़ाइन',
      'API Development': 'API डेवलपमेंट',
    },
    ja: {
      Python: 'Python',
      TypeScript: 'TypeScript',
      JavaScript: 'JavaScript',
      React: 'React',
      'Node.js': 'Node.js',
      'Next.js': 'Next.js',
      'C#': 'C#',
      Java: 'Java',
      Go: 'Go',
      Rust: 'Rust',
      SQL: 'SQL',
      MongoDB: 'MongoDB',
      Docker: 'Docker',
      Kubernetes: 'Kubernetes',
      AWS: 'AWS',
      Azure: 'Azure',
      Linux: 'Linux',
      'GitHub Actions': 'GitHub Actions',
      TensorFlow: 'TensorFlow',
      PyTorch: 'PyTorch',
      'OpenAI APIs': 'OpenAI APIs',
      LangChain: 'LangChain',
      'Prompt Engineering': 'プロンプトエンジニアリング',
      'Computer Vision': 'コンピュータービジョン',
      'MLOps': 'MLOps',
      Cybersecurity: 'サイバーセキュリティ',
      'System Design': 'システム設計',
      'API Development': 'API開発',
    },
  };

  return mapping[language]?.[topic] ?? topic;
}

function getCourseArtwork(topic: string, index: number, language: string) {
  const palette = ['#1f3a5f', '#2f5d8a', '#4d6b8b', '#7b4b3a', '#2c7a7b', '#5b4b8a'];
  const accent = palette[index % palette.length];
  const secondary = palette[(index + 2) % palette.length];
  const topicLabel = getLocalizedTopic(topic, language);
  const icon = topic.includes('AI') || topic.includes('OpenAI') || topic.includes('TensorFlow') || topic.includes('PyTorch') || topic.includes('Prompt') || topic.includes('Vision')
    ? '◉'
    : topic.includes('Cloud') || topic.includes('AWS') || topic.includes('Azure') || topic.includes('Docker') || topic.includes('Kubernetes')
      ? '⬢'
      : topic.includes('Security') || topic.includes('Cyber')
        ? '🛡'
        : topic.includes('Data') || topic.includes('SQL') || topic.includes('MongoDB')
          ? '▦'
          : '⌘';
  const instructorLabel = language === 'ar'
    ? 'تعلم مباشر'
    : language === 'fr'
      ? 'Encadré par un formateur'
      : language === 'es'
        ? 'Impartido por instructor'
        : language === 'de'
          ? 'Von einem Instructor geleitet'
          : language === 'pt'
            ? 'Orientado por instrutor'
            : language === 'hi'
              ? 'इन्स्ट्रक्टर-लेड'
              : language === 'ja'
                ? '講師付き'
                : 'Instructor-led';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" rx="28" fill="#07111f"/>
      <rect x="26" y="26" width="548" height="348" rx="24" fill="url(#bg)"/>
      <circle cx="470" cy="118" r="114" fill="${secondary}" opacity="0.35"/>
      <circle cx="160" cy="302" r="120" fill="${accent}" opacity="0.25"/>
      <rect x="96" y="108" width="236" height="150" rx="18" fill="#f7f3eb" opacity="0.96"/>
      <rect x="118" y="128" width="120" height="74" rx="10" fill="#14263d"/>
      <rect x="252" y="128" width="56" height="18" rx="9" fill="#7f93b2"/>
      <rect x="252" y="154" width="44" height="10" rx="5" fill="#cfd9e6"/>
      <rect x="252" y="174" width="62" height="10" rx="5" fill="#cfd9e6"/>
      <rect x="332" y="98" width="126" height="194" rx="20" fill="#0f172a" opacity="0.9"/>
      <rect x="352" y="124" width="86" height="88" rx="12" fill="#f4c96d"/>
      <circle cx="395" cy="166" r="24" fill="#0f172a"/>
      <rect x="354" y="220" width="82" height="40" rx="12" fill="#e8dfcb"/>
      <rect x="116" y="274" width="244" height="18" rx="9" fill="#f7f3eb" opacity="0.95"/>
      <rect x="116" y="300" width="184" height="14" rx="7" fill="#f7f3eb" opacity="0.9"/>
      <text x="94" y="84" fill="#f7f3eb" font-family="Segoe UI, Arial" font-size="26" font-weight="700">${topicLabel}</text>
      <text x="94" y="352" fill="#f7f3eb" font-family="Segoe UI, Arial" font-size="24" font-weight="700">${instructorLabel} • ${index + 1}</text>
      <text x="376" y="332" fill="#f4c96d" font-family="Segoe UI, Arial" font-size="44" font-weight="700">${icon}</text>
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="#0e1b2d"/>
        </linearGradient>
      </defs>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const badgeStyles: Record<string, string> = {
  gold: 'bg-gold-600/20 text-gold-300 border-gold-600/40',
  teal: 'bg-teal-600/20 text-teal-300 border-teal-600/40',
  nile: 'bg-nile-600/20 text-nile-300 border-nile-600/40',
  scarab: 'bg-scarab-600/20 text-scarab-300 border-scarab-600/40',
  sienna: 'bg-sienna-600/20 text-sienna-300 border-sienna-600/40',
};

function buildCourseCatalog(language: string) {
  const courseImages = Array.from({ length: 80 }, (_, index) => {
    const topic = techTopics[index % techTopics.length];
    return getCourseArtwork(topic, index, language);
  });

  const categoryList = language === 'ar'
    ? ['تطوير الويب', 'الذكاء الاصطناعي', 'السحابة', 'الأمان', 'الموبايل', 'البيانات', 'التصميم', 'البنية التحتية']
    : language === 'fr'
      ? ['Dév web', 'IA & ML', 'Cloud', 'Sécurité', 'Mobile', 'Data', 'Design', 'Infrastructure']
      : language === 'es'
        ? ['Desarrollo web', 'IA & ML', 'Cloud', 'Seguridad', 'Móvil', 'Datos', 'Diseño', 'Infraestructura']
        : language === 'de'
          ? ['Web-Entwicklung', 'KI & ML', 'Cloud', 'Sicherheit', 'Mobile', 'Daten', 'Design', 'Infrastruktur']
          : language === 'pt'
            ? ['Desenvolvimento web', 'IA & ML', 'Cloud', 'Segurança', 'Mobile', 'Dados', 'Design', 'Infraestrutura']
            : language === 'hi'
              ? ['वेब विकास', 'एआई & एमएल', 'क्लाउड', 'सुरक्षा', 'मोबाइल', 'डेटा', 'डिज़ाइन', 'इंफ्रास्ट्रक्चर']
              : language === 'ja'
                ? ['Web開発', 'AI & ML', 'クラウド', 'セキュリティ', 'モバイル', 'データ', 'デザイン', 'インフラ']
                : ['Web Dev', 'AI & ML', 'Cloud', 'Security', 'Mobile', 'Data', 'Design', 'Infrastructure'];

  const levels = language === 'ar'
    ? ['مبتدئ', 'متوسط', 'متقدم']
    : language === 'fr'
      ? ['Débutant', 'Intermédiaire', 'Avancé']
      : language === 'es'
        ? ['Principiante', 'Intermedio', 'Avanzado']
        : language === 'de'
          ? ['Anfänger', 'Mittelstufe', 'Fortgeschritten']
          : language === 'pt'
            ? ['Iniciante', 'Intermediário', 'Avançado']
            : language === 'hi'
              ? ['शुरुआती', 'मध्यम', 'उन्नत']
              : language === 'ja'
                ? ['初心者', '中級', '上級']
                : ['Beginner', 'Intermediate', 'Advanced'];

  const badgeOptions = language === 'ar'
    ? [{ label: 'جديد', color: 'teal' }, { label: 'شائع', color: 'sienna' }, { label: 'الأكثر مبيعًا', color: 'gold' }, { label: 'الأعلى تقييمًا', color: 'nile' }]
    : language === 'fr'
      ? [{ label: 'Nouveau', color: 'teal' }, { label: 'Tendance', color: 'sienna' }, { label: 'Best-seller', color: 'gold' }, { label: 'Les mieux notés', color: 'nile' }]
      : language === 'es'
        ? [{ label: 'Nuevo', color: 'teal' }, { label: 'Popular', color: 'sienna' }, { label: 'Más vendido', color: 'gold' }, { label: 'Mejor valorado', color: 'nile' }]
        : language === 'de'
          ? [{ label: 'Neu', color: 'teal' }, { label: 'Heiß', color: 'sienna' }, { label: 'Bestseller', color: 'gold' }, { label: 'Top bewertet', color: 'nile' }]
          : language === 'pt'
            ? [{ label: 'Novo', color: 'teal' }, { label: 'Quente', color: 'sienna' }, { label: 'Mais vendido', color: 'gold' }, { label: 'Melhor avaliado', color: 'nile' }]
            : language === 'hi'
              ? [{ label: 'नया', color: 'teal' }, { label: 'हॉट', color: 'sienna' }, { label: 'सबसे ज्यादा बिकने वाला', color: 'gold' }, { label: 'सबसे अच्छा रेटेड', color: 'nile' }]
              : language === 'ja'
                ? [{ label: '新着', color: 'teal' }, { label: '人気', color: 'sienna' }, { label: 'ベストセラー', color: 'gold' }, { label: '高評価', color: 'nile' }]
                : [{ label: 'New', color: 'teal' }, { label: 'Hot', color: 'sienna' }, { label: 'Bestseller', color: 'gold' }, { label: 'Top Rated', color: 'nile' }];

  const techFocus = language === 'ar'
    ? ['للتشغيل الآلي بالذكاء الاصطناعي', 'لتطوير الويب', 'للـ Backend Engineering', 'للـ Frontend Engineering', 'لهندسة السحابة', 'لسير العمل في DevOps', 'للبرمجة الآمنة', 'لهندسة البيانات', 'لدمج LLMs', 'لتطبيقات الموبايل', 'لـ Microservices', 'للـ Testing', 'لتحسين الأداء', 'لتعلم الآلة', 'للأنظمة في الوقت الحقيقي', 'للأنظمة الموزعة', 'للهندسة الإنتاجية', 'للتطبيقات الذكية', 'للـ APIs القابلة للتوسع', 'للبنية التحتية']
    : language === 'fr'
      ? ['pour l’automatisation IA', 'pour le développement web', 'pour l’ingénierie backend', 'pour l’ingénierie frontend', 'pour l’architecture cloud', 'pour les workflows DevOps', 'pour le coding sécurisé', 'pour l’ingénierie data', 'pour l’intégration LLM', 'pour les apps mobiles', 'pour les microservices', 'pour le testing', 'pour l’optimisation des performances', 'pour le machine learning', 'pour les systèmes temps réel', 'pour les systèmes distribués', 'pour l’ingénierie produit', 'pour les apps intelligentes', 'pour les APIs scalables', 'pour l’infrastructure']
      : language === 'es'
        ? ['para automatización con IA', 'para desarrollo web', 'para ingeniería backend', 'para ingeniería frontend', 'para arquitectura cloud', 'para workflows DevOps', 'para coding seguro', 'para ingeniería de datos', 'para integración de LLM', 'para apps móviles', 'para microservicios', 'para testing', 'para optimización de rendimiento', 'para machine learning', 'para sistemas en tiempo real', 'para sistemas distribuidos', 'para ingeniería de producto', 'para apps inteligentes', 'para APIs escalables', 'para infraestructura']
        : language === 'de'
          ? ['für KI-Automatisierung', 'für Web-Entwicklung', 'für Backend-Engineering', 'für Frontend-Engineering', 'für Cloud-Architektur', 'für DevOps-Workflows', 'für sicheres Coding', 'für Data-Engineering', 'für LLM-Integration', 'für Mobile Apps', 'für Microservices', 'für Testing', 'für Performance-Optimierung', 'für Machine Learning', 'für Echtzeitsysteme', 'für verteilte Systeme', 'für Produkt-Engineering', 'für intelligente Apps', 'für skalierbare APIs', 'für Infrastruktur']
          : language === 'pt'
            ? ['para automação com IA', 'para desenvolvimento web', 'para engenharia backend', 'para engenharia frontend', 'para arquitetura cloud', 'para workflows DevOps', 'para coding seguro', 'para engenharia de dados', 'para integração de LLM', 'para apps mobile', 'para microsserviços', 'para testes', 'para otimização de performance', 'para machine learning', 'para sistemas em tempo real', 'para sistemas distribuídos', 'para engenharia de produto', 'para apps inteligentes', 'para APIs escaláveis', 'para infraestrutura']
            : language === 'hi'
              ? ['एआई ऑटोमेशन के लिए', 'वेब डेवलपमेंट के लिए', 'बैकएंड इंजीनियरिंग के लिए', 'फ्रंटएंड इंजीनियरिंग के लिए', 'क्लाउड आर्किटेक्चर के लिए', 'DevOps वर्कफ़्लो के लिए', 'सुरक्षित कोडिंग के लिए', 'डेटा इंजीनियरिंग के लिए', 'LLM एकीकरण के लिए', 'मोबाइल ऐप्स के लिए', 'माइक्रोसेविसेज़ के लिए', 'टेस्टिंग के लिए', 'परफॉर्मेंस ऑप्टिमाइज़ेशन के लिए', 'मशीन लर्निंग के लिए', 'रियल-टाइम सिस्टम के लिए', 'डिस्ट्रिब्यूटेड सिस्टम्स के लिए', 'प्रोडक्ट इंजीनियरिंग के लिए', 'बुद्धिमान ऐप्स के लिए', 'स्केलेबल APIs के लिए', 'इंफ्रास्ट्रक्चर के लिए']
              : language === 'ja'
                ? ['AI自動化向け', 'Web開発向け', 'バックエンド開発向け', 'フロントエンド開発向け', 'クラウドアーキテクチャ向け', 'DevOpsワークフロー向け', 'セキュアコーディング向け', 'データエンジニアリング向け', 'LLM統合向け', 'モバイルアプリ向け', 'マイクロサービス向け', 'テスト向け', 'パフォーマンス最適化向け', '機械学習向け', 'リアルタイムシステム向け', '分散システム向け', 'プロダクトエンジニアリング向け', 'インテリジェントアプリ向け', 'スケーラブルAPI向け', 'インフラ向け']
                : ['for AI Automation', 'for Web Development', 'for Backend Engineering', 'for Frontend Engineering', 'for Cloud Architecture', 'for DevOps Workflows', 'for Secure Coding', 'for Data Engineering', 'for LLM Integration', 'for Mobile Apps', 'for Microservices', 'for Testing', 'for Performance Optimization', 'for Machine Learning', 'for Real-Time Systems', 'for Distributed Systems', 'for Product Engineering', 'for Intelligent Apps', 'for Scalable APIs', 'for Infrastructure'];

  const courseTitles = Array.from({ length: 80 }, (_, index) => {
    const topic = getLocalizedTopic(techTopics[index % techTopics.length], language);
    const focus = techFocus[index % techFocus.length];
    return `${topic} ${focus} ${index + 1}`;
  });

  const descriptionPattern = language === 'ar'
    ? (topic: string) => `طور مهارات ${topic} العملية من خلال مشاريع برمجية عملية، وسير عمل تقني عملي، ودروس تركز على الذكاء الاصطناعي يمكنك تطبيقها فورًا.`
    : language === 'fr'
      ? (topic: string) => `Développez des compétences concrètes en ${topic} grâce à des projets pratiques, des workflows techniques réalistes et des leçons axées IA que vous pouvez appliquer immédiatement.`
      : language === 'es'
        ? (topic: string) => `Desarrolla habilidades prácticas en ${topic} con proyectos reales, flujos de trabajo técnicos y lecciones enfocadas en IA que puedes aplicar de inmediato.`
        : language === 'de'
          ? (topic: string) => `Entwickeln Sie praktische Fähigkeiten in ${topic} mit echten Projekten, praxisnahen Workflows und KI-fokussierten Lektionen, die Sie sofort anwenden können.`
          : language === 'pt'
            ? (topic: string) => `Desenvolva habilidades práticas em ${topic} com projetos reais, fluxos de trabalho técnicos e aulas focadas em IA que você pode aplicar imediatamente.`
            : language === 'hi'
              ? (topic: string) => `${topic} में व्यावहारिक कौशल विकसित करें, जिसमें हैंड्स-ऑन प्रोजेक्ट, व्यावहारिक तकनीकी वर्कफ़्लो और ऐसे एआई-फोकस्ड लेसन जिन्हें आप तुरंत लागू कर सकते हैं।`
              : language === 'ja'
                ? (topic: string) => `${topic} の実践的なスキルを、実践的なプロジェクト、実務的な技術ワークフロー、すぐに使えるAI中心のレッスンで身につけましょう。`
                : (topic: string) => `Build real-world ${topic} skills with hands-on coding projects, practical technology workflows, and AI-focused lessons you can apply immediately.`;

  return Array.from({ length: 80 }, (_, index) => {
    const category = categoryList[index % categoryList.length];
    const level = levels[index % levels.length];
    const badge = badgeOptions[index % badgeOptions.length];
    const price = 29 + ((index % 7) * 15);
    const rating = Number((4.4 + (index % 6) * 0.1).toFixed(1));
    const reviews = 240 + index * 12;
    const students = `${4 + ((index * 3) % 10)}.${(index % 9) + 1}k`;
    const hours = 12 + ((index * 5) % 48);
    const topic = techTopics[index % techTopics.length];

    return {
      title: courseTitles[index],
      category,
      level,
      rating,
      reviews,
      students,
      hours,
      price,
      image: courseImages[index],
      badge: badge.label,
      badgeColor: badge.color,
      description: descriptionPattern(topic),
    };
  });
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
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
  const { t, language } = useLanguage();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{ if(showAllCourses){ setTimeout(()=>listRef.current?.scrollIntoView({behavior:"smooth",block:"start"}),50);} },[showAllCourses]);
  const ALL_COURSES = buildCourseCatalog(language);
  const featuredCourses = ALL_COURSES.slice(0, 6);

  const courseCopy = {
    enrollNow: language === 'ar'
      ? 'اشترك الآن'
      : language === 'fr'
        ? 'S’inscrire'
        : language === 'es'
          ? 'Inscribirse'
          : language === 'de'
            ? 'Jetzt anmelden'
            : language === 'pt'
              ? 'Inscrever-se'
              : language === 'hi'
                ? 'अब नामांकित हों'
                : language === 'ja'
                  ? '今すぐ登録'
                  : 'Enroll Now',
    expandedCatalogLabel: language === 'ar'
      ? 'كتالوج موسع'
      : language === 'fr'
        ? 'Catalogue complet'
        : language === 'es'
          ? 'Catálogo ampliado'
          : language === 'de'
            ? 'Erweiterter Katalog'
            : language === 'pt'
              ? 'Catálogo expandido'
              : language === 'hi'
                ? 'विस्तारित कैटलॉग'
                : language === 'ja'
                  ? '拡張カタログ'
                  : 'Expanded Catalog',
    expandedCatalogTitle: language === 'ar'
      ? 'كل 80 دورة تقنية في مكان واحد'
      : language === 'fr'
        ? 'Tous les 80 cours technologiques au même endroit'
        : language === 'es'
          ? 'Los 80 cursos tecnológicos en un solo lugar'
          : language === 'de'
            ? 'Alle 80 Tech-Kurse an einem Ort'
            : language === 'pt'
              ? 'Os 80 cursos de tecnologia em um só lugar'
              : language === 'hi'
                ? 'एक ही जगह पर 80 तकनीकी पाठ्यक्रम'
                : language === 'ja'
                  ? '80の技術コースをひとつに'
                  : 'All 80 technology courses in one place',
    expandedCatalogDescription: language === 'ar'
      ? 'استكشف كل دورة عبر البرمجة والذكاء الاصطناعي والسحابة والأمن والجوال والبيانات مباشرةً أسفل الاختيارات المميزة.'
      : language === 'fr'
        ? 'Explorez tous les cours de code, IA, cloud, sécurité, mobile et data directement sous les sélections mises en avant.'
        : language === 'es'
          ? 'Explora todos los cursos de código, IA, cloud, seguridad, móvil y datos justo debajo de las selecciones destacadas.'
          : language === 'de'
            ? 'Entdecken Sie jedes Programmier-, KI-, Cloud-, Security-, Mobile- und Data-Training direkt unter den hervorgehobenen Auswahlmöglichkeiten.'
            : language === 'pt'
              ? 'Explore todos os cursos de código, IA, cloud, segurança, mobile e dados logo abaixo das seleções em destaque.'
              : language === 'hi'
                ? 'समारोहित चयन के नीचे ही कोड, एआई, क्लाउड, सुरक्षा, मोबाइल और डेटा के सभी पाठ्यक्रम देखें।'
                : language === 'ja'
                  ? '注目の選択肢のすぐ下で、コード、AI、クラウド、セキュリティ、モバイル、データのあらゆるコースを探索できます。'
                  : 'Explore every course across code, AI, cloud, security, mobile, and data—directly beneath the featured selections.',
    closeList: language === 'ar'
      ? 'إغلاق القائمة'
      : language === 'fr'
        ? 'Fermer la liste'
        : language === 'es'
          ? 'Cerrar lista'
          : language === 'de'
            ? 'Liste schließen'
            : language === 'pt'
              ? 'Fechar lista'
              : language === 'hi'
                ? 'सूची बंद करें'
                : language === 'ja'
                  ? '一覧を閉じる'
                  : 'Close list',
    studentsLabel: language === 'ar'
      ? 'طلاب'
      : language === 'fr'
        ? 'étudiants'
        : language === 'es'
          ? 'estudiantes'
          : language === 'de'
            ? 'Studierende'
            : language === 'pt'
              ? 'estudantes'
              : language === 'hi'
                ? 'छात्र'
                : language === 'ja'
                  ? '学生'
                  : 'students',
  };

  return (
    <section id="courses" className="py-28 relative bg-night-900 overflow-hidden">
      <div className="orb w-96 h-96 bg-gold-700/6 top-0 right-[-10%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label">{t.courses.sectionLabel}</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
              <span className="gold-text">{t.courses.title}</span>
            </h2>
            <p className="text-ivory-500 mt-3 max-w-lg leading-relaxed">
              {t.courses.description}
            </p>
          </div>

          <button type="button" className="btn-outline shrink-0" onClick={() => setShowAllCourses(true)}>
            {t.courses.button}
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <article
              key={course.title}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-ivory-300 bg-night-900/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                  {course.category}
                </div>
                <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full border ${badgeStyles[course.badgeColor]}`}>
                  {course.badge}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-ivory-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {course.level}
                </div>
                <h3 className="text-ivory-100 font-bold text-base leading-snug mb-3 group-hover:text-gold-300 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Stars rating={course.rating} />
                  <span className="text-gold-400 text-xs font-bold">{course.rating}</span>
                  <span className="text-ivory-600 text-xs">({course.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-4 text-ivory-500 text-xs mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {course.hours}h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={11} />
                    {course.students} {courseCopy.studentsLabel}
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-gold-400 font-display font-bold text-xl">
                    ${course.price}
                  </div>
                  <button className="btn-gold text-xs py-2 px-4">
                    {courseCopy.enrollNow}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAllCourses && (
          <div ref={listRef} className="course-expanded-section glass-card glass-card-hover mt-14">
            <div className="course-expanded-header">
              <div>
                <p className="section-label">{courseCopy.expandedCatalogLabel}</p>
                <h3>{courseCopy.expandedCatalogTitle}</h3>
                <p className="text-ivory-500 max-w-3xl leading-relaxed mt-3">
                  {courseCopy.expandedCatalogDescription}
                </p>
              </div>
              <button type="button" className="btn-outline" onClick={() => setShowAllCourses(false)}>
                {courseCopy.closeList}
                <X size={16} />
              </button>
            </div>

            <div className="course-expanded-stack">
              {ALL_COURSES.map((course, index) => (
                <article key={`${course.title}-${index}`} className="course-expanded-card glass-card glass-card-hover rounded-2xl overflow-hidden group">
                  <div className="grid lg:grid-cols-[210px_1fr] gap-5">
                    <div className="relative h-44 overflow-hidden rounded-[28px]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="text-xs uppercase tracking-[0.25em] text-ivory-500 font-semibold">
                          {course.level}
                        </div>
                        <div className={`text-[0.68rem] font-bold px-3 py-1 rounded-full border ${badgeStyles[course.badgeColor]}`}>
                          {course.badge}
                        </div>
                      </div>

                      <div className="text-gold-300 text-xs font-semibold uppercase tracking-[0.22em]">
                        {course.category}
                      </div>
                      <h3 className="text-ivory-100 font-bold text-xl leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-ivory-400 leading-7 text-sm">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-ivory-500 text-xs">
                        <div className="flex items-center gap-2">
                          <Clock size={12} />
                          {course.hours}h
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={12} />
                          {course.students} {courseCopy.studentsLabel}
                        </div>
                        <div className="flex items-center gap-2">
                          <Stars rating={course.rating} />
                          <span className="text-gold-300 font-bold">{course.rating}</span>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-4">
                        <div className="text-gold-300 font-bold text-xl">
                          ${course.price}
                        </div>
                        <button className="btn-gold text-xs py-2 px-4">
                          {courseCopy.enrollNow}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
