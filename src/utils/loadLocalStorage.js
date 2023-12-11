export function loadLocalStorage(setStreams) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => {
    const data = JSON.parse(event.target.result);
    setStreams(data);
    localStorage.setItem("streams", JSON.stringify(data));
  };

  reader.readAsText(file);
}
