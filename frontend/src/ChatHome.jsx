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
        <>
    <div className="rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative overflow-hidden">
      <img
          src="/Images/Hello.png"
          alt="An Image Goes here"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
        <form onSubmit={handleQuery} className="w-4/5 ml-0 flex flex-col space-y-4">
            <div className="response-area">
                {isLoading ? (
                    <div className="loading-spinner w-full flex justify-center items-center">
                         <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-100"></div>
                    </div> 
                ) : (
                    <>
                    <textarea
                        className="response-textarea bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 mb-4 h-48"
                        placeholder="This is where i will respond"
                        value={responseData}
                        readOnly
                    ></textarea>
                    <br/>
                    <textarea
                        className="corrections-textarea bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 h-48"
                        placeholder="This is where i will provide feedback for incorrect answers"
                        value={Corrections}
                        readOnly
                    ></textarea>
                    </>
                )}
            </div>

            <div className="form-group flex space-x-4">
                <input
                    type="text"
                    placeholder="Your Query Goes here"
                    value={prompt}
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg flex-grow p-2.5"
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </div>
            <div >
                <button type="submit"  className="bg-blue-500 text-white text-sm rounded-lg p-2.5">Let's Find Out</button>
            </div>
        </form>
        
        </>
    );
};

export default ChatHome;
