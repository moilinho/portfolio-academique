import React, { useState } from "react";

const About: React.FC = () => {
  const [showCV, setShowCV] = useState(false);
  const cvImageUrl = `${import.meta.env.BASE_URL}CV_Moilim_ABDALLAH.jpg`;
  const profileImageUrl = `${import.meta.env.BASE_URL}photo_about.jpeg`; // Nouvelle photo, différente du CV

  return (
    <section
      id="presentation"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-transparent text-gray-100 font-mono"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-4 text-primary text-center font-mono">
          Qui suis-je ?
        </h2>
        <p className="text-gray-400 text-center mb-16 text-sm italic">
          Présentation personnelle
        </p>

        <div className="space-y-10 font-mono">

          {/* Photo + intro */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Photo */}
              <div className="flex-shrink-0 text-center">
                <img
                  src={profileImageUrl}
                  alt="Moilim ABDALLAH - Photo de présentation"
                  className="w-40 h-40 rounded-2xl object-cover border border-primary/30 shadow-2xl"
                />
              </div>

              {/* Intro perso */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-primary mb-4">Moilim Abdallah</h3>
                <p className="text-gray-200 leading-relaxed text-sm">
                  Actuellement en troisième année de <strong>BUT Informatique</strong> à l’<strong>Université Sorbonne Paris Nord</strong> (IUT de Villetaneuse), 
                  mon parcours ne se résume pas à coder comme un robot. 
                  Ma vision du développement a évolué au fil de mes projets et des années. 
                  J'ai compris que l'informatique est avant tout un outil humain : on ne développe pas pour soi, mais pour offrir des solutions fiables et fluides à de vrais utilisateurs. 
                  J’aime concevoir des applications, que ce soit web ou mobile, et relever des défis techniques, 
                  en m’appuyant sur mes compétences fullstack que j'ai acquis au BUT et au cours de mes stages comme le JavaScript, TypeScript, Python, React et PHP.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <button
                    onClick={() => setShowCV(!showCV)}
                    className="px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-foreground hover:text-black transition-all duration-300 shadow-lg active:scale-95 text-xs"
                  >
                    {showCV ? "Masquer mon CV" : "Voir mon CV"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section d'affichage dynamique du CV */}
          {showCV && (
            <div className="w-full flex flex-col items-center p-6 border border-white/10 rounded-2xl bg-accent/20 backdrop-blur-sm animate-fade-in-up">
              <img
                src={cvImageUrl}
                alt="CV Moilim ABDALLAH"
                className="w-full max-w-2xl border border-white/10 rounded-lg shadow-2xl"
              />
              <a
                href={cvImageUrl}
                download
                className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-primary hover:text-white transition-colors duration-300 shadow-md text-xs"
              >
                Télécharger le CV (JPG)
              </a>
            </div>
          )}

          {/* Ma façon de travailler */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-4">⚙️ Ma méthode de travail</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              Pour moi, l'apprentissage et le développement ne sont pas des activités solitaires. Depuis le BUT1, 
              ma méthode repose sur l'aprentissage en groupe. 
              Qu'il s'agisse de réviser des maths, de l'anglais ou du Java, c'est toujours bien d'échanger avec mes camarades, 
              que ce soit à l'IUT pendant nos heures libres ou sur Discord le soir après les cours. 
              Nous avons instauré une véritable culture de partage de connaissances où l'on s'entraide mutuellement.
            </p>
          </div>

          {/* Ce dont je suis le plus fier */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">🏆 Ce dont je suis le plus fier</h3>

            <div className="space-y-6">
              {[
                {
                  label: "Une réalisation technique",
                  text: "Le développement de mon application de recommandation de restaurants en fonction des goûts et de la localisation. Cette SAE a été, de loin, mon projet préféré du BUT. Ce dont je suis le plus fier sur ce projet, c'est son utilité concrète : nous n'avons pas codé dans le vent ou simplement pour valider une matière, mais pour créer une véritable solution capable de servir à de vraies personnes dans la vie de tous les jours.",
                },
                {
                  label: "Une progression personnelle",
                  text: "Contrairement à certains de mes camarades, je n'avais jamais touché une seule ligne de code avant mon entrée en BUT. Ma plus grande fierté est mon évolution depuis ce premier jour. J'ai pris du plaisir à apprendre en partant de zéro, à surmonter les premières difficultés logiques et à découvrir ce nouveau monde qui s'ouvrait à moi, jusqu'à me sentir aujourd'hui pleinement légitime dans le développement.",
                },
                {
                  label: "Une expérience humaine",
                  text: "La cohésion et l'esprit de corps partagés avec ma promotion tout au long du BUT informatique. Ce réseau d'entraide quotidien que nous avons bâti depuis la première année est ma plus grande fierté. Il prouve que la réussite est collective et que le partage de connaissances permet à chacun de surmonter les exigences académiques et professionnelles.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2">{item.label}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images personnelles */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-4">📸 En images</h3>
            <p className="text-gray-400 text-sm mb-6">
              Nuit de l'Info, sorties pédagogiques et culturelles — des moments forts qui racontent mon BUT
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  src: `${import.meta.env.BASE_URL}arts_et_metiers.jpeg`,
                  legend: "Musée des Arts et Métiers (2026) - Découverte de l'histoire des innovations techniques.",
                },
                {
                  src: `${import.meta.env.BASE_URL}nuit_info_2025.jpeg`,
                  legend: "Nuit de l'Info (4 Décembre 2025) - Hackathon à l'IUT de Villetaneuse.",
                },
                {
                  src: `${import.meta.env.BASE_URL}musee_orsay.jpeg`,
                  legend: "Musée d'Orsay (2024) - Exposition sur l'impressionnisme.",
                },
              ].map((imgData, i) => (
                <div key={i} className="flex flex-col border border-white/10 rounded-xl bg-white/5 overflow-hidden shadow-md">
                  <div className="aspect-square bg-white/10 flex items-center justify-center text-gray-500 text-xs text-center relative group">
                    <img 
                      src={imgData.src} 
                      alt={imgData.legend} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback visuel si l'image n'est pas encore présente dans tes assets publics
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-3 bg-black/20 flex-1">
                    <p className="text-gray-400 text-[11px] leading-relaxed italic">{imgData.legend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;