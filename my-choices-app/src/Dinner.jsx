import { useState } from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

function Dinner() {
    const [selected, setSelected] = useState(null);
    const choices = ["🍖 韓式烤肉", "🍲 韓國料理", "🍤 西班牙菜", "🍽 法國西餐", "🍛 泰國菜"];
    const navigate = useNavigate(); // Use navigate hook to navigate to the next page

    const handleNext = () => {
        // Navigate to the "next" page
        navigate("/nightactivity");
    };
    
    return (
        <div style={{textAlign: "center", padding: "50px"}}>
            <h1>Pick Your Favorite Food</h1>
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

export default Dinner;
