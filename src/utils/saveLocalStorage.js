export function saveLocalStorage(
  key = "streams",
  type = "application/json",
  filename = "streams.json"
) {
  const data = localStorage.getItem(key);
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}
