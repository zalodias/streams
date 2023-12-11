import DownloadSimple from "../assets/icons/DownloadSimple";
import UploadSimple from "../assets/icons/UploadSimple";
import { loadLocalStorage } from "../utils/loadLocalStorage";
import { saveLocalStorage } from "../utils/saveLocalStorage";
import Button from "./Button";
import FileUpload from "./FileUpload";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <FileUpload onFileChange={() => loadLocalStorage(props.setStreams)}>
        <Button context="neutral" icon size="small" variant="ghost">
          <UploadSimple />
        </Button>
      </FileUpload>
      <Button
        context="neutral"
        icon
        size="small"
        variant="ghost"
        onClick={() => saveLocalStorage()}
      >
        <DownloadSimple />
      </Button>
    </header>
  );
}
