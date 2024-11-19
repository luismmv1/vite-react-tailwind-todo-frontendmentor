document.addEventListener("DOMContentLoaded", () => {
  const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && userPrefersDark)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});




/* // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
  localStorage.theme === "dark";
  console.log('DOM fully loaded and parsed');
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  } */
/*   // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme'); */