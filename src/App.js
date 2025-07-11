import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { FeedbackProvider } from "./context/FeedbackContext";
import About from "./pages/About";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="app-layout">
          <Header bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
          <main className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>

            <AboutIconLink />
          </main>
          <Footer />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
