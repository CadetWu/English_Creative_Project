const btn = document.getElementById("btn");
const status = document.getElementById("status");

btn?.addEventListener("click", () => {
  status.textContent = "Button click handled by Netlify‑hosted JS ✅";
});
