import React from 'react';

const Stage: React.FC = () => {
  return (
    <section
      id="stage"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-transparent text-gray-100 font-mono"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-4 text-primary text-center font-mono">
          Bilan de Stage BUT3
        </h2>
        <p className="text-gray-400 text-center mb-16 text-sm italic">
          Intersel / Livinweb — Mars 2026 – Juillet 2026
        </p>

        <div className="space-y-10 font-mono">

          {/* Présentation de l'entreprise */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-4">🏢 L'entreprise</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p><span className="text-primary">Entreprise :</span> <span className="text-gray-200">Intersel / Livinweb</span></p>
                <p><span className="text-primary">Secteur :</span> <span className="text-gray-200">Développement d'applications, audit et conseil</span></p>
                <p><span className="text-primary">Taille :</span> <span className="text-gray-200">5-8, TPE</span></p>
                <p><span className="text-primary">Localisation :</span> <span className="text-gray-200">Paris, 20ème</span></p>
              </div>
              <div className="space-y-2">
                <p><span className="text-primary">Durée :</span> <span className="text-gray-200">Mars 2026 – Juillet 2026</span></p>
                <p><span className="text-primary">Tuteur de stage :</span> <span className="text-gray-200">E. PODVIN</span></p>
                <p><span className="text-primary">Tuteur pédagogique :</span> <span className="text-gray-200">M. Pillegand</span></p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-200 text-sm leading-relaxed">
                Intersel est une agence digitale spécialisée dans le développement Web qui, forte de son expérience avec de grands groupes, 
                a conçu sa propre plateforme de CMS personnalisé appelée Livinweb Engine. 
                Ce qui m'a immédiatement frappé en arrivant, c'est l'ambiance chaleureuse de cette entreprise familiale implantée depuis une vingtaine d'années. 
                Ayant l'habitude d'accueillir de nombreux stagiaires au fil des ans, l'équipe possède un réel savoir-faire pour nous intégrer et nous guider dès le premier jour, 
                combinant l'agilité d'une TPE à une solide expertise métier.
              </p>
            </div>
          </div>

          {/* Missions */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">💻 Mes missions</h3>
            <div className="space-y-6">
              {[
                {
                  titre: "Modernisation d'applications métiers",
                  techno: "PHP, JavaScript, REST API, MODX, Tailwind CSS, Git",
                  description:
                    "Ma mission principale a consisté à développer de nouvelles fonctionnalités et à améliorer une application de gestion d'embauche déjà en production pour une entreprise de concession automobile, utilisée par des centaines de personnes. N'étant pas familier avec l'ensemble des technologies en place, j'ai consacré une part importante de mon temps à me documenter sur la base de code existante. J'ai notamment dû appréhender MODX, un CMS (Content Management System — un système de gestion de contenu permettant de structurer et d'administrer des sites web de manière dynamique), tout en alliant mes connaissances en PHP, JavaScript, API REST, HTML et Tailwind CSS pour moderniser efficacement les environnements back-end et front-end.",
                },
                {
                  titre: "Documentation, spécifications et conception",
                  techno: "Dokuwiki, Code Comments",
                  description:
                    "Parallèlement aux développements, ma seconde mission était de formaliser l'ensemble de mon travail pour en assurer la pérennité. Sur le Dokuwiki de l'entreprise, j'ai rédigé toutes les spécifications fonctionnelles, techniques ainsi que les schémas de conception de mes projets. De plus, j'ai veillé à rendre mon code rigoureusement commenté et explicité directement au sein des fichiers sources, garantissant ainsi qu'il puisse être facilement compris et réutilisé par mes collègues ou par les futurs stagiaires de l'agence.",
                },
              ].map((mission, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-5">
                  <h4 className="text-gray-100 font-semibold mb-1">{mission.titre}</h4>
                  <p className="text-gray-400 text-xs italic mb-3">{mission.techno}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Découverte du monde professionnel */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">🤝 Découverte du monde professionnel</h3>
            <div className="space-y-4 text-sm leading-relaxed text-gray-200">
              <p>
                Au cours de ce stage, j'ai pu m'immerger dans la culture d'entreprise et appréhender concrètement les pratiques et méthodes de travail en équipe. 
                Le pilotage du projet s'articulait autour de points réguliers — quotidiens ou tous les deux jours — avec mes supérieurs, 
                ce qui permettait de suivre mon avancement et d'ajuster mes objectifs en temps réel. Bien que je n'aie pas eu de contact direct avec les clients, 
                leurs besoins et retours m'étaient parfois transmis afin de guider le développement des nouvelles fonctionnalités.
              </p>
              <p>
                Lors du sprint final précédant une livraison, notre rythme s'intensifiait et se structurait autour d'un "daily" chaque matin vers 10h. 
                Lors de cette réunion, chacun devait exposer clairement où il en était, ce qu'il comptait accomplir dans la journée et le temps estimé pour chaque tâche. 
              </p>
              <p>
                Côté outils et communication interne, les échanges s'effectuaient soit en face à face dans les bureaux ou via <strong>Microsoft Teams</strong>. 
                Pour garantir la qualité du code et le suivi technique, toute la gestion et la remontée des tickets ou des bugs étaient centralisées sur <strong>Mantis BT</strong>.
              </p>
            </div>
          </div>

          {/* Bilan personnel */}
          <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">🪞 Bilan personnel</h3>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="text-primary font-semibold mb-2">Ce que j'ai appris techniquement</p>
                <p className="text-gray-200">
                  Ce stage m'a permis de découvrir de nouvelles technologies, notamment le CMS MODX et son écosystème, ainsi que Blapy, un plugin jQuery interne créé par l'entreprise. 
                  Au-delà des outils, j'ai assimilé une pratique professionnelle majeure : on ne code pas pour soi, mais pour les utilisateurs et l'équipe, ce qui tranche avec le contexte académique. 
                  J'ai appris qu'il ne suffit pas de faire fonctionner une application, mais qu'il faut veiller à ne rien casser en production. 
                  Mon tuteur m'a d'ailleurs partagé cette citation marquante : « Si tu essaies de casser le site pendant 10 minutes et qu'il ne se casse pas, c'est que tu as réussi ».
                </p>
              </div>

              <div>
                <p className="text-primary font-semibold mb-2">Ce que j'ai découvert de moi-même</p>
                <p className="text-gray-200">
                  J'ai découvert que j'apprécie énormément travailler sur des projets concrets qui ont un impact réel sur le quotidien des utilisateurs. 
                  Néanmoins, cette confrontation avec le monde professionnel m'a fait réaliser que je dois encore gagner en rigueur et approfondir ma pratique pour mieux maîtriser mon code, 
                  afin d'éviter les approximations et de gagner en autonomie face à des architectures complexes.
                </p>
              </div>

              <div>
                <p className="text-primary font-semibold mb-2">Les difficultés rencontrées et comment j'ai rebondi</p>
                <p className="text-gray-200">
                  Le dernier mois de stage a été particulièrement difficile en raison d'une détérioration de la relation avec mon tuteur en entreprise, 
                  qui m'a reproché de manquer d'écoute vis-à-vis des instructions et de n'en faire qu'à ma tête. Face à cette situation qui mettait mon stage en péril et affectait mon moral, 
                  j'ai pris l'initiative de contacter mon tuteur pédagogique. Grâce à son écoute attentive et à nos nombreux échanges par téléphone et par mail, 
                  j'ai pu prendre du recul, comprendre mes erreurs de posture et trouver les ressources nécessaires pour aborder la fin de mon stage de manière constructive.
                </p>
              </div>

              <div>
                <p className="text-primary font-semibold mb-2">Ce dont je suis le plus fier</p>
                <p className="text-gray-200">
                  Je suis extrêmement fier d'avoir mené à bien et livré les fonctionnalités que j'ai développées seul de bout en bout. 
                  Savoir que le fruit de mon travail est aujourd'hui exploité au quotidien par des centaines d'utilisateurs réels est une immense satisfaction, 
                  et cela me prouve que mes efforts n'ont pas été vains.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stage;