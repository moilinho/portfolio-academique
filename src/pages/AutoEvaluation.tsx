import React from "react";

// Compétences du BUT Informatique :
// C1. Réaliser un développement d'application
// C5. Conduire un projet
// C6. Travailler dans une équipe informatique

const AUTOEVALUATION = [
  {
    id: "C6",
    nom: "Travailler dans une équipe informatique",
    niveau: 3,
    description:
      "C'est la compétence où je m'illustre le plus. Au semestre 5, j'ai obtenu une moyenne de 16, me hissant à la 3ème place de la promotion sur ce domaine. Que ce soit lors des rendus de SAE, en communication ou en anglais, j'ai toujours veillé à jouer un rôle clé pour le groupe. La réussite d'un projet passe d'abord par une équipe qui s'écoute et se comprend.",
    acquis: [
      "Animation d'équipe et maintien d'un climat de travail positif",
      "Rédaction de documentations claires et présentations orales",
      "Capacité à vulgariser les problèmes techniques entre les différents membres",
    ],
    axesAmelioration: [
      "Déléguer certaines tâches sans vouloir tout faire moi-même, pour mieux responsabiliser les autres membres de l'équipe",
    ],
    projetsLies: ["Toutes les SAE du BUT", "Anglais", "Communication"],
  },
  {
    id: "C5",
    nom: "Conduire un projet",
    niveau: 3,
    description:
      "On pense souvent que le plus important en informatique est de savoir coder, mais la gestion de projet est un aspect à ne pas négliger. C'est le travail de l'ombre indispensable pour réussir. Durant nos SAE, j'ai très souvent endossé le rôle de coordinateur : j'organisais les réunions, je concevais les diagrammes de Gantt, je tenais les feuilles de temps et je m'assurais que nous respections les délais.",
    acquis: [
      "Planification rigoureuse via des diagrammes de Gantt et Trello/Notion",
      "Suivi des tâches et respect des délais",
      "Découpage des fonctionnalités en sprints (méthodologie Agile)",
    ],
    axesAmelioration: [
      "Mieux anticiper la complexité technique initiale pour affiner l'estimation du temps de développement",
    ],
    projetsLies: ["SAE Recommandation de Restaurants", "SAE Gestion des Stages"],
  },
  {
    id: "C1",
    nom: "Réaliser un développement d'application",
    niveau: 2,
    description:
      "Il s'agit de la compétence centrale du BUT. Je reconnais que je ne suis pas le meilleur développeur, mais j'ai toujours fait preuve d'une grande persévérance. J'ai su m'en sortir au fil des années, produire des résultats satisfaisants, livrer des applications fonctionnelles et surmonter mes blocages grâce à l'entraide.",
    acquis: [
      "Développement fullstack et création d'API REST",
      "Compréhension et mise en œuvre des architectures MVC",
      "Débogage et lecture de la documentation technique",
    ],
    axesAmelioration: [
      "Approfondir les design patterns (cours d'architecture logicielle/ qualité de developpement) et l'optimisation algorithmique pour rendre mon code plus performant",
    ],
    projetsLies: ["SAE Recommandation de Restaurants", "Mini-projets React/Node.js", "SAE Gestion des Stages", "SAE Calculatrice Java", "SAE Tournée Noël"],
  },
];

const NiveauBadge: React.FC<{ niveau: number }> = ({ niveau }) => (
  <div className="flex gap-2 items-center">
    {[1, 2, 3].map((n) => (
      <div
        key={n}
        className={`w-8 h-2 rounded-full transition-all ${
          n <= niveau ? "bg-primary" : "bg-white/20"
        }`}
      />
    ))}
    <span className="text-primary text-sm font-semibold ml-1">Niveau {niveau}/3</span>
  </div>
);

const AutoEvaluation: React.FC = () => {
  return (
    <section
      id="autoevaluation"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-transparent text-gray-100 font-mono"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-4 text-primary text-center font-mono">
          Auto-évaluation des Compétences
        </h2>
        <p className="text-gray-400 text-center mb-16 text-sm italic">
          Bilan sur les compétences fondamentales du BUT Informatique
        </p>

        {/* Tableau récapitulatif */}
        <div className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl mb-12 overflow-x-auto">
          <h3 className="text-xl font-semibold text-primary mb-4">Tableau synthétique</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="text-left py-2 pr-4">Compétence</th>
                <th className="text-left py-2 pr-4">Niveau d'acquisition</th>
                <th className="text-left py-2">Projets universitaires (SAE)</th>
              </tr>
            </thead>
            <tbody>
              {AUTOEVALUATION.map((c) => (
                <tr key={c.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 pr-4 text-gray-100 font-semibold">{c.id} — {c.nom}</td>
                  <td className="py-3 pr-4">
                    <NiveauBadge niveau={c.niveau} />
                  </td>
                  <td className="py-3 text-gray-400 text-xs">{c.projetsLies.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Détail par compétence */}
        <div className="space-y-10">
          {AUTOEVALUATION.map((c) => (
            <div
              key={c.id}
              className="bg-accent/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-primary font-bold text-2xl">{c.id}</span>
                  <h3 className="text-gray-100 font-semibold text-xl mt-1">{c.nom}</h3>
                </div>
                <NiveauBadge niveau={c.niveau} />
              </div>

              <p className="text-gray-200 leading-relaxed mb-6">{c.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-primary font-semibold mb-2">Ce que j'ai acquis</p>
                  <ul className="space-y-1 list-disc list-inside">
                    {c.acquis.map((a, i) => (
                      <li key={i} className="text-gray-200 text-sm leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Axes d'amélioration</p>
                  <ul className="space-y-1 list-disc list-inside">
                    {c.axesAmelioration.map((a, i) => (
                      <li key={i} className="text-gray-200 text-sm leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoEvaluation;