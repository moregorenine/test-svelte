export type StudyResult = {
  id: number;
  title: string;
  description: string;
  path: string;
};

export let studyResults: StudyResult[] = [
  {
    id: 1,
    title: "Reactive",
    description: "Reactive declaration, Reactive statements",
    path: "/reactive",
  },
  {
    id: 2,
    title: "Logic",
    description: "Keyed each blocks, Await blocks",
    path: "/logic",
  },
  {
    id: 3,
    title: "Event",
    description: "Component events",
    path: "/event",
  },
  {
    id: 4,
    title: "Bind",
    description: "Text inputs, Numeric inputs",
    path: "/bind",
  },
];
