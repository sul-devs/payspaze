const NavigationBar = () => {
  return (
    <nav id="navigation-bar">
      <div className="container">
        <span className="logo">
          Pay<span className="logo-orange">Spaze</span>
        </span>
        <article className="buttons">
          <button className="btn login primary">Log in</button>
          <button className="btn signup secondary">Sign Up</button>
        </article>
      </div>
    </nav>
  );
};
export default NavigationBar;
