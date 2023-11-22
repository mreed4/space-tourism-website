import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <section className="start-page">
      <div className="content">
        <h2>
          So, you want to travel to
          <span>Space</span>
        </h2>
        <p className="normal">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="button-wrapper">
        <button className="btn" onClick={() => navigate("/destinations")}>
          Explore
        </button>
      </div>
    </section>
  );
}
