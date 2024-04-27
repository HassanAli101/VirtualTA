import "./ChatHome.css";
import { useState } from "react";
import axios from "axios";

const ChatHome = () => {
    const [prompt, setPrompt] = useState("");
    const [responseData, setResponseData] = useState("");
    const [Corrections, setCorrections] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleQuery = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("https://virtual-ta-server.vercel.app/GenQuerry", { prompt });
            if (response.status === 200) {
                console.log("response is: ", response);
                //separate first 3 characters from response
                let responseText = response.data.slice(0, 3);
                console.log("responseText is: ", responseText);
                if (responseText === "(E)") {
                    // append to corrections this response
                    //split the response into two parts by $
                    let parts = response.data.split("$");
                    setCorrections("You were wrong in the previous step, A detailed explanation is: \n" + parts[0].slice(3));
                    setResponseData(parts[1]);
                }
                else {
                    setResponseData(response.data); // Update response data state
                }
            } else {
                alert("You have been barred from using me, i dont aid violent or repetitive questions!");
            }
        } catch (err) {
            console.log("error: ", err);
        }finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="VerticalSplit">
                <form className="login-form" onSubmit={handleQuery}>
                    <h2>Hello, i am david, your very own CS100 Virtual Teaching Assistant, how can i help you?</h2>
                    <div className="response-area">
                        {isLoading ? (
                            <div className="loading-spinner"></div> // Your spinner element
                        ) : (
                            <textarea
                                className="response-textarea"
                                value={responseData}
                                readOnly
                            ></textarea>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="query">Query:</label>
                        <input
                            type="text"
                            id="query"
                            name="query"
                            placeholder="Enter your query (use keyword (syntax) for syntaxical help or begin with (how to) to start a problem solving session"
                            autoComplete="current-username"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Let's Find Out</button>
                    </div>
                </form>
                <div className="corrections-area">
                    <textarea
                        className="corrections-textarea"
                        value={Corrections}
                        readOnly
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default ChatHome;
