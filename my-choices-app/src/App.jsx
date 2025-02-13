import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NightActivity from "./NightActivity.jsx";
import Dinner from "./Dinner.jsx";
import Trip from "./Trip.jsx";
import Final from "./Final.jsx";
import { TypeAnimation } from "react-type-animation";
import calm from "./assets/calm2.png";
function HomePage() {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate(); // Use navigate hook to navigate to the next page

    useEffect(() => {
        // Show the button after 5 seconds
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 16000);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const handleNext = () => {
        // Navigate to the "next" page
        navigate("/trip");
    };


    return (
        <div style={{margin: "20px"}}>
            <TypeAnimation
                sequence={[
                    "Hello, Chingyee", 1000,
                    "W", 100,
                    "Wo", 100,
                    "Wou", 100,
                    "Woul", 100,
                    "Would", 300,
                    "Would ", 100,
                    "Would y", 100,
                    "Would yo", 100,
                    "Would you", 300,
                    "Would you ", 100,
                    "Would you l", 100,
                    "Would you li", 100,
                    "Would you lik", 100,
                    "Would you like", 300,
                    "Would you like ", 100,
                    "Would you like t", 100,
                    "Would you like to", 300,
                    "Would you like to ", 100,
                    "Would you like to b", 100,
                    "Would you like to be", 300,
                    "Would you like to be ", 100,
                    "Would you like to be m", 100,
                    "Would you like to be my", 300,
                    "Would you like to be my ", 100,
                    "Would you like to be my V", 100,
                    "Would you like to be my Va", 100,
                    "Would you like to be my Val", 100,
                    "Would you like to be my Vale", 100,
                    "Would you like to be my Valen", 100,
                    "Would you like to be my Valent", 100,
                    "Would you like to be my Valenti", 100,
                    "Would you like to be my Valentin", 100,
                    "Would you like to be my Valentine", 300,
                    "Would you like to be my Valentine ", 100,
                    "Would you like to be my Valentine a", 100,
                    "Would you like to be my Valentine an", 100,
                    "Would you like to be my Valentine and", 300,
                    "Would you like to be my Valentine and ", 100,
                    "Would you like to be my Valentine and g", 100,
                    "Would you like to be my Valentine and go", 300,
                    "Would you like to be my Valentine and go ", 100,
                    "Would you like to be my Valentine and go o", 100,
                    "Would you like to be my Valentine and go on", 300,
                    "Would you like to be my Valentine and go on ", 100,
                    "Would you like to be my Valentine and go on a", 100,
                    "Would you like to be my Valentine and go on a ", 100,
                    "Would you like to be my Valentine and go on a d", 100,
                    "Would you like to be my Valentine and go on a da", 100,
                    "Would you like to be my Valentine and go on a day", 300,
                    "Would you like to be my Valentine and go on a day ", 100,
                    "Would you like to be my Valentine and go on a day t", 100,
                    "Would you like to be my Valentine and go on a day tr", 100,
                    "Would you like to be my Valentine and go on a day tri", 100,
                    "Would you like to be my Valentine and go on a day trip", 300,
                    "Would you like to be my Valentine and go on a day trip ", 100,
                    "Would you like to be my Valentine and go on a day trip w", 100,
                    "Would you like to be my Valentine and go on a day trip wi", 100,
                    "Would you like to be my Valentine and go on a day trip wit", 100,
                    "Would you like to be my Valentine and go on a day trip with", 300,
                    "Would you like to be my Valentine and go on a day trip with ", 100,
                    "Would you like to be my Valentine and go on a day trip with m", 100,
                    "Would you like to be my Valentine and go on a day trip with me", 500,
                    "Would you like to be my Valentine and go on a day trip with me?", 500,
                ]}
                speed={50}
                wrapper="h1"
                style={{fontSize: "2rem", fontWeight: "bold", color: "pink"}}
            />
            <img
                src={calm} // Adjust the path as needed
                alt="calm"
                style={{width: "100%"}}
            />
            {/* Next Arrow Button */}
            {showButton && (
                <button className="next-button" onClick={handleNext}>
                    <span>Definitely Yes</span>
                </button>
            )}
        </div>
    );
}


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/valentine" element={<HomePage/>}/>
                <Route path="/valentine/trip" element={<Trip />} />
                <Route path="/valentine/dinner" element={<Dinner />} />
                <Route path="/valentine/nightactivity" element={<NightActivity />} />
                <Route path="/valentine/final" element={<Final />} />
            </Routes>
        </Router>
    );
}

export default App;
