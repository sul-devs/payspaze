const SignupForm = () => {
  return (
    <form id="signup-form">
      <h2>Sign Up</h2>
      <ul className="no-bullets">
        <li>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="name"
            placeholder="John Doe"
            name="name"
            required
          />
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            name="email"
            required
          />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            required
          />
        </li>
        <li>
          <label htmlFor="re-enter-password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            required
          />
        </li>
      </ul>
      <button className="btn">Signup</button>
      <a href="#" className="account">
        Already have an account? Login.
      </a>
    </form>
  );
};
export default SignupForm;
