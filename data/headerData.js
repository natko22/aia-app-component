export const breadcrumbItems = [
  { label: "Startseite", link: "/" },
  { label: "Feedback", link: "/feedback" },
  { label: "Bewertungen", link: "/ratings" },
];

export const tabItems = [
  {
    label: "Übersicht",
    content: "Dies ist der Inhalt des Übersicht-Bereichs.",
  },
  {
    label: "Details",
    content: "Dies ist der Inhalt des Detail-Bereichs.",
  },
];

export const actionItems = [
  { label: "Bearbeiten", onClick: () => console.log("Bearbeiten geklickt") },
  { label: "Löschen", onClick: () => console.log("Löschen geklickt") },
];

export const infoSectionData = {
  title: "Schreibe eine Gedichtsinterpretation",
  descriptions: ["Klasse 8a", "Deutsch"],
  date: new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }),
};
