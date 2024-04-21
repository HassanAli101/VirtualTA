import "../../Style/ChatHome.css";
import { useState } from "react";
import axios from "axios";

const ChatHome = () => {
    const [prompt, setPrompt] = useState("");
    const [responseData, setResponseData] = useState("");

    const handleQuery = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/GenQuerry", { prompt });
            if (response.status === 200) {
                console.log("response is: ", response);
                setResponseData(response.data); // Update response data state
            } else {
                alert("Error occurred :/");
            }
        } catch (err) {
            console.log("error: ", err);
        }
    };

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleQuery}>
                <h2>Hi, i am shafique, your very own CS100 Virtual Teaching Assistant</h2>
                <div className="response-area">
                    <textarea
                        className="response-textarea"
                        value={responseData}
                        readOnly
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="query">Query:</label>
                    <input
                        type="text"
                        id="query"
                        name="query"
                        placeholder="Enter your query"
                        autoComplete="current-username"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Let's Find Out</button>
                </div>
            </form>
        </div>
    );
};

export default ChatHome;
