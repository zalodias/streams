export function saveLocalStorage() {
  const data = localStorage.getItem("streams");
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "streams.json";
  link.click();

  URL.revokeObjectURL(url);
}
