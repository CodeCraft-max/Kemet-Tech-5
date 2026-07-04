import { useLanguage } from '../LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'ar'
        ? 'عربة حورس الذكية'
        : language === 'fr'
          ? 'Char smart d’Horus'
          : language === 'es'
            ? 'Carro inteligente de Horus'
            : language === 'de'
              ? 'Horus Smart Chariot'
              : language === 'pt'
                ? 'Carrinho inteligente de Hórus'
                : language === 'hi'
                  ? 'होरस स्मार्ट रथ'
                  : language === 'ja'
                    ? 'ホルスのスマート戦車'
                    : 'Horus Smart Chariot',
      image: '/horus.jpg',
      description: language === 'ar'
        ? 'عربة ذكية تعمل بالـ Arduino مستوحاة من مصر القديمة، مع استشعار العوائق والتحكم في المحركات وتصميم أنظمة مدمجة مصقول.'
        : language === 'fr'
          ? 'Un char intelligent alimenté par Arduino, inspiré de l’Égypte ancienne, avec détection d’obstacles, contrôle moteur et design soigné d’électronique embarquée.'
          : language === 'es'
            ? 'Carro inteligente impulsado por Arduino inspirado en el Antiguo Egipto, con detección de obstáculos, control de motores y un diseño pulido de sistemas embebidos.'
            : language === 'de'
              ? 'Arduino-betriebenes Smart-Chariot, inspiriert von Altägypten, mit Hinderniserkennung, Motorsteuerung und hochwertigem Embedded-Design.'
              : language === 'pt'
                ? 'Carrinho inteligente movido por Arduino inspirado no Antigo Egito, com detecção de obstáculos, controle de motores e design refinado de sistemas embarcados.'
                : language === 'hi'
                  ? 'प्राचीन मिस्र से प्रेरित, Arduino-आधारित स्मार्ट रथ, जिसमें रुकावट पहचान, मोटर नियंत्रण और परिष्कृत एम्बेडेड सिस्टम डिज़ाइन है।'
                  : language === 'ja'
                    ? '古代エジプトに着想を得たArduino駆動のスマートチャリオットで、障害物検知、モーター制御、洗練された組み込みシステム設計を備えています。'
                    : 'Arduino-powered smart chariot inspired by Ancient Egypt, with obstacle sensing, motor control, and polished embedded systems design.',
      tags: ['Arduino', 'Sensors', 'Robotics'],
      tech: language === 'ar'
        ? 'استشعار المسافة بالموجات فوق الصوتية · المحركات'
        : language === 'fr'
          ? 'Détection par ultrasons · Moteurs'
          : language === 'es'
            ? 'Detección ultrasónica · Motores'
            : language === 'de'
              ? 'Ultraschall-Entfernungsmessung · Motoren'
              : language === 'pt'
                ? 'Detecção ultrassônica · Motores'
                : language === 'hi'
                  ? 'अल्ट्रासोनिक दूरी का पता · मोटर'
                  : language === 'ja'
                    ? '超音波距離センサー · モーター'
                    : 'Ultrasonic distance sensing · Motors',
      role: language === 'ar'
        ? 'النموذج الأولي والتحكم المدمج'
        : language === 'fr'
          ? 'Prototype et contrôle embarqué'
          : language === 'es'
            ? 'Prototipo y control embebido'
            : language === 'de'
              ? 'Prototyp & Embedded Control'
              : language === 'pt'
                ? 'Protótipo e controle embarcado'
                : language === 'hi'
                  ? 'प्रोटोटाइप और एम्बेडेड नियंत्रण'
                  : language === 'ja'
                    ? 'プロトタイプと組み込み制御'
                    : 'Prototype & Embedded Control',
    },
    {
      title: language === 'ar'
        ? 'نموذج أبو سمبل التفاعلي'
        : language === 'fr'
          ? 'Modèle interactif d’Abu Simbel'
          : language === 'es'
            ? 'Modelo interactivo de Abu Simbel'
            : language === 'de'
              ? 'Interaktives Modell von Abu Simbel'
              : language === 'pt'
                ? 'Modelo interativo de Abu Simbel'
                : language === 'hi'
                  ? 'अबू सिमबेल इंटरएक्टिव मॉडल'
                  : language === 'ja'
                    ? 'アブ・シンベル インタラクティブモデル'
                    : 'Abu Simbel Interactive Model',
      image: '/abusimbel.jpg',
      description: language === 'ar'
        ? 'نموذج متجاوب لمتحف مع مصابيح LED وأبواب تعمل بخوادم و أتمتة تفاعلية لسرد التراث.'
        : language === 'fr'
          ? 'Un modèle de musée responsive avec LEDs, portes servo-actionnées et automatisation interactive pour raconter l’histoire du patrimoine.'
          : language === 'es'
            ? 'Un modelo de museo responsivo con LEDs, puertas accionadas por servos y automatización interactiva para contar historias del patrimonio.'
          : language === 'de'
            ? 'Ein responsives Museummodell mit LEDs, servo-gesteuerten Toren und interaktiver Automatisierung für Heritage-Storytelling.'
            : language === 'pt'
              ? 'Um modelo de museu responsivo com LEDs, portas acionadas por servos e automação interativa para contar a história do patrimônio.'
              : language === 'hi'
                ? 'LEDs, servo-आधारित द्वार और विरासत की कहानी कहने के लिए इंटरएक्टिव ऑटोमेशन वाला एक प्रतिक्रियाशील संग्रहालय मॉडल।'
                : language === 'ja'
                  ? 'LED、サーボ駆動のゲート、遺産ストーリーテリングのためのインタラクティブ自動化を備えた、レスポンシブな博物館モデルです。'
                  : 'A responsive museum model with LEDs, servo-actuated gates, and interactive automation for heritage storytelling.',
      tags: ['Automation', 'LEDs', 'Servo'],
      tech: language === 'ar'
        ? 'معرض تفاعلي · إضاءة مدمجة'
        : language === 'fr'
          ? 'Exposition interactive · Éclairage embarqué'
          : language === 'es'
            ? 'Exhibición interactiva · Iluminación embebida'
            : language === 'de'
              ? 'Interaktive Ausstellung · Embedded-Beleuchtung'
              : language === 'pt'
                ? 'Exposição interativa · Iluminação embarcada'
                : language === 'hi'
                  ? 'इंटरएक्टिव प्रदर्शन · एम्बेडेड लाइटिंग'
                  : language === 'ja'
                    ? 'インタラクティブ展示 · 組み込み照明'
                    : 'Interactive exhibit · Embedded lighting',
      role: language === 'ar'
        ? 'التصميم والتكامل النظامي'
        : language === 'fr'
          ? 'Design et intégration système'
          : language === 'es'
            ? 'Diseño e integración de sistemas'
            : language === 'de'
              ? 'Design & Systemintegration'
              : language === 'pt'
                ? 'Design e integração de sistemas'
                : language === 'hi'
                  ? 'डिज़ाइन और सिस्टम एकीकरण'
                  : language === 'ja'
                    ? 'デザインとシステム統合'
                    : 'Design & System Integration',
    },
  ];
  return (
    <section id="projects" className="project-section">
      <div className="project-header">
        <span className="section-label">{t.projects.sectionLabel}</span>
        <h2 className="gold-text">{t.projects.heading}</h2>
        <p>
          {t.projects.description}
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card glass-card glass-card-hover"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <div className="project-tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-meta">
                <span>{project.tech}</span>
                <span>{project.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
