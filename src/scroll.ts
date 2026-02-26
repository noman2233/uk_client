export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return; // for Next.js safety

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
