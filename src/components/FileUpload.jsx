import "./FileUpload.css";

export default function FileUpload({ onFileChange, children }) {
  const handleImport = () => {
    document.querySelector(".file-upload__input").click();
  };

  return (
    <>
      <div onClick={handleImport}>{children}</div>
      <input
        className="file-upload__input"
        type="file"
        onChange={onFileChange}
      />
    </>
  );
}
