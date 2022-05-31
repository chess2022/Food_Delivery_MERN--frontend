import { Link } from "react-router-dom"

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Food</div>
      </Link>
    </div>
  );
}
