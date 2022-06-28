import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Made by R<sup>4</sup></span>
        <span className="headerTitleLg">Illuminate</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1629788959554-ef4502a45e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  );
}
