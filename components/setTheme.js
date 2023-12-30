export function setTheme(darkTheme) {
  if (darkTheme) {
    //Dark Theme
    document.documentElement.style.setProperty("--black", "#0e0e0e");
    document.documentElement.style.setProperty("--white", "#FFFFFF");
    document.documentElement.style.setProperty("--muted-text", "#B1B1B1");
    document.documentElement.style.setProperty("--gray", "#2E2E2E");
    document.documentElement.style.setProperty(
      "--light-gray",
      "rgba(166, 166, 166, 0.5)"
    );
  } else {
    //Light Theme
    document.documentElement.style.setProperty("--black", "#F6F6F6");
    document.documentElement.style.setProperty("--white", "#0e0e0e");
    document.documentElement.style.setProperty("--muted-text", "#0e0e0e");
    document.documentElement.style.setProperty(
      "--gray",
      "rgba(166, 166, 166, 0.5)"
    );
    document.documentElement.style.setProperty("--light-gray", "purple");
  }
}
