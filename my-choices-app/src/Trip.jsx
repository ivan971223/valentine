import { useState } from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";
import image1 from "./assets/cafe1.png"
import image2 from "./assets/cafe2.png"

function Trip() {
    const [selected, setSelected] = useState(null);
    const choices = ["🌅 南頭古城: 慢活文藝之旅", "🌊 海上世界: 悠閑海景之旅"];
    const navigate = useNavigate(); // Use navigate hook to navigate to the next page

    const handleNext = () => {
        // Navigate to the "next" page
        navigate("/dinner");
    };
    
    return (
        <div style={{textAlign: "center", padding: "30px"}}>
            <h1>Where would you like to explore?</h1>
            {choices.map((choice, index) => (
                <motion.button
                    key={index}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    onClick={() => setSelected(choice)}
                    style={{
                        fontSize: "20px",
                        margin: "10px",
                        padding: "15px",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={index === 0 ? image1 : image2} // Adjust the path as needed
                        alt=""
                        style={{width: "300px", height: "300px"}}
                    />
                    {choice}
                </motion.button>
            ))}

            {selected && (
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    style={{marginTop: "20px", fontSize: "24px", fontWeight: "bold"}}
                >
                    You selected: {selected} 🎉
                </motion.div>
            )}
            <div style={{marginTop: "20px"}}>
                <button onClick={handleNext}>
                    <span>&#8594;</span>
                </button>
            </div>
        </div>
    );
}

export default Trip;
