const LoginForm = () => {
  return (
    <form id="login-form">
      <h2>Log In</h2>
      <ul className="no-bullets">
        <li>
          <label htmlFor="email">Email: (*)</label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            name="email"
            required
          />
        </li>
        <li>
          <label htmlFor="password">Password: (*)</label>
          <input
            id="password"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            required
          />
        </li>
      </ul>
      <a href="#" className="forgot-password">
        Forgot password
      </a>
      <button className="btn">Login</button>
      <a href="#" className="no-account">
        Dont have an account? Sign up.
      </a>
    </form>
  );
};
export default LoginForm;
