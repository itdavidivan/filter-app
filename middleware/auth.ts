// Tento middleware kontroluje, či je užívateľ prihlásený (tzn. či má platný JWT token)
export default defineNuxtRouteMiddleware(() => {
  const token = localStorage.getItem("jwt"); // Získanie tokenu z localStorage

  // Ak token nie je prítomný, presmerujeme na login stránku
  if (!token) {
    return navigateTo("/login"); // Ak nie je token, presmeruj na login
  }
});
