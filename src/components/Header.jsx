import "./Header.css";
import { saveLocalStorage } from "../utils/saveLocalStorage";
import Button from "./Button";
import NewStreamForm from "./NewStreamForm";
import DownloadSimple from "../assets/icons/DownloadSimple";

export default function Header() {
  return (
    <header className="header">
      <NewStreamForm />
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
