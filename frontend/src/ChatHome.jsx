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
            //the below line is for pushing to main, comment it out when running locally
            const response = await axios.post("https://virtual-ta-server.vercel.app/GenQuerry", { prompt });

            //the below line is for running locally, comment it out when pushing to main
            // const response = await axios.post("http://localhost:8000/GenQuerry", { prompt });
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
                console.log("error: ", response);
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
                    <div className="response-area">
                        {isLoading ? (
                            <div className="loading-spinner"></div> // Your spinner element
                        ) : (
                            <>
                            <textarea
                                className="response-textarea"
                                placeholder="This is where i will respond"
                                value={responseData}
                                readOnly
                            ></textarea>
                            <br/>
                            <textarea
                                className="corrections-textarea"
                                placeholder="This is where i will provide feedback for incorrect answers"
                                value={Corrections}
                                readOnly
                            ></textarea>
                            </>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="query">Query:</label>
                        <input
                            type="text"
                            id="query"
                            name="query"
                            placeholder="Your Query Goes here"
                            autoComplete="current-username"
                            value={prompt}
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Let's Find Out</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default ChatHome;
