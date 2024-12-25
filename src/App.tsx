import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PaymentForm from "./components/PaymentForm";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Footer />
      <PaymentForm />
      <SignupForm />
      <LoginForm />
    </>
  );
}

export default App;
