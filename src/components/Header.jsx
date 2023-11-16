import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
      >
        <path
          d="M0 8C0 8 4.77965 6 8 6C11.2203 6 16 8 16 8C16 8 20.7797 10 24 10C27.2203 10 32 8 32 8V12C32 12 27.2203 14 24 14C20.7797 14 16 12 16 12C16 12 11.2203 10 8 10C4.77965 10 0 12 0 12V8Z"
          fill="currentColor"
        />
        <path
          d="M32 4V0C32 0 27.2203 2 24 2C20.7797 2 16 0 16 0V4C16 4 20.7797 6 24 6C27.2203 6 32 4 32 4Z"
          fill="currentColor"
        />
        <path
          d="M16 16V20C16 20 11.2203 18 8 18C4.77965 18 0 20 0 20V16C0 16 4.77965 14 8 14C11.2203 14 16 16 16 16Z"
          fill="currentColor"
        />
      </svg>
    </header>
  );
}
