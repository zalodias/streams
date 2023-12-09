import data from "../../streams.json";

export function seedLocalStorage() {
  const streams = data.map((item) => ({
    id: item.id,
    text: item.text,
    timestamp: item.created_time,
  }));

  localStorage.setItem("streams", JSON.stringify(streams));
}
