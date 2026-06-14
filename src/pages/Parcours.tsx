import React from "react";

const Parcours: React.FC = () => {
  return (
    <section
      id="parcours"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-transparent text-gray-100 font-mono"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-16 text-primary text-center font-mono">
          Mon Parcours & Mes Objectifs
        </h2>

        <div className="space-y-12 font-mono">
          
          {/* Poursuite d'études - EFREI */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              🎓 Poursuite d'études — Cycle Ingénieur EFREI
            </h3>
            <p className="text-gray-400 text-sm italic mb-4">Rentrée Septembre 2026</p>
            <p className="text-gray-200 mt-4 leading-relaxed text-sm md:text-base">
              J'ai choisi d'intégrer l'EFREI en cycle ingénieur car c'est une école reconnue, réputée pour son excellence académique et dont le rythme d'alternance est valorisé par les entreprises. 
              Mon choix s'est naturellement porté vers la spécialité <strong>Logiciels et Systèmes d’Information</strong>. Cette filière s'inscrit dans la continuité de mon BUT Informatique : 
              elle permet d'approfondir le développement et l'architecture logicielle, des domaines techniques que j'ai déjà eu l'occasion d'explorer lors de mon cursus.
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold text-primary mb-3">Le choix de l'alternance</h4>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Le BUT étant une formation fondamentalement professionnalisante, avec deux stages en 2ème et 3ème année, poursuivre en alternance était pour moi une bonne idée. 
                Ce format permet d'accélérer l'acquisition d'expérience sur le terrain, de confronter la théorie aux exigences réelles du marché de la tech, 
                et constitue une réelle opportunité d'embauche à l'issue du cursus.
              </p>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              🎯 Objectifs professionnels
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Court terme */}
              <div className="border border-primary/30 rounded-xl p-5 bg-white/5">
                <div className="text-primary font-bold text-lg mb-2">Court terme</div>
                <p className="text-gray-400 text-xs italic mb-3">0 — 1 an</p>
                <ul className="text-gray-200 space-y-2 text-sm leading-relaxed">
                  <li>• Valider mon diplôme de BUT Informatique</li>
                  <li>• Trouver une alternance pour ma rentrée à l'EFREI</li>
                  <li>• Réussir mon intégration en cycle ingénieur</li>
                </ul>
              </div>

              {/* Moyen terme */}
              <div className="border border-primary/30 rounded-xl p-5 bg-white/5">
                <div className="text-primary font-bold text-lg mb-2">Moyen terme</div>
                <p className="text-gray-400 text-xs italic mb-3">1 — 3 ans</p>
                <ul className="text-gray-200 space-y-2 text-sm leading-relaxed">
                  <li>• Obtenir mon diplôme d'ingénieur EFREI</li>
                  <li>• Devenir Ingénieur Logiciel (Software Engineer)</li>
                  <li>• Mener des projets techniques complexes de bout en bout</li>
                </ul>
              </div>

              {/* Long terme */}
              <div className="border border-primary/30 rounded-xl p-5 bg-white/5">
                <div className="text-primary font-bold text-lg mb-2">Long terme</div>
                <p className="text-gray-400 text-xs italic mb-3">3 — 10 ans</p>
                <ul className="text-gray-200 space-y-2 text-sm leading-relaxed">
                  <li>• Évoluer vers un poste de Chef de Projet IT</li>
                  <li>• S'ouvrir à des opportunités de carrière à l'international</li>
                  <li>• Encadrer des équipes techniques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline visuelle (Fusion de ta section Formation) */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">📅 Frise chronologique</h3>
            <div className="relative border-l-2 border-primary/40 pl-6 space-y-8">
              {[
                { 
                  year: "Sept. 2026 →", 
                  label: "Cycle Ingénieur — EFREI", 
                  detail: "Spécialité Logiciels et Systèmes d’Information en alternance." 
                },
                { 
                  year: "Mars — Juil. 2026", 
                  label: "Stage — Intersel / Livinweb", 
                  detail: "Modernisation d'applications métiers, apprentissage de ModX, PHP et JavaScript." 
                },
                { 
                  year: "Fév. — Mars 2025", 
                  label: "Stage — Movira", 
                  detail: "Développement d'interfaces web interactives avec Next.js, TypeScript et Tailwind CSS." 
                },
                { 
                  year: "2023 — 2026", 
                  label: "BUT Informatique — Université Sorbonne Paris Nord", 
                  detail: "Développement web, bases de données, conception d'applications et travail en équipe." 
                },
                { 
                  year: "2020 — 2023", 
                  label: "Baccalauréat Général — Mention Assez Bien", 
                  detail: "Spécialités Mathématiques & Physique-Chimie. Option européenne anglais." 
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
                  <p className="text-primary text-sm font-semibold">{item.year}</p>
                  <p className="text-gray-100 font-semibold text-lg mt-1">{item.label}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Parcours;