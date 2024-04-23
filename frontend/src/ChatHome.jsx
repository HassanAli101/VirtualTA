import "../../Style/ChatHome.css";
import { useState } from "react";
import axios from "axios";


const ChatHome = () => {
    const [prompt, setPrompt] = useState("");
    const [responseData, setResponseData] = useState("");
    const [Corrections, setCorrections] = useState("");

    const handleQuery = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/GenQuerry", { prompt });
            if (response.status === 200) {
                console.log("response is: ", response);
                //separate first 3 characters from response
                let responseText = response.data.slice(0, 3);
                console.log("responseText is: ", responseText);
                if (responseText === "(E)") {
                    // append to corrections this response
                    setCorrections(Corrections + "\n You were wrong in the previous step, A detailed explanation is: \n" + response.data.slice(3));
                }
                else {
                    setResponseData(response.data); // Update response data state
                }
            } else {
                alert("Error occurred :/");
            }
        } catch (err) {
            console.log("error: ", err);
        }
    };

    return (
        <div className="container">
            <div className="VerticalSplit">
                <form className="login-form" onSubmit={handleQuery}>
                    <h2>Hello, i am dan, your very own CS100 Virtual Teaching Assistant, how can i help you?</h2>
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
                            placeholder="Enter your query (use keyword syntax for syntaxical help)"
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
