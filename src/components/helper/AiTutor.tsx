import { FormEvent, useRef, useState } from "react"
import axios from "axios";


export default function AiTutor() {
    const[response, setResponse] = useState<string | null>(null);
    const[error, setError] = useState<string | null>(null);

    const prompt = useRef<HTMLTextAreaElement>(null);

    async function handleAskTutor(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredPrompt = prompt.current!.value;
        event.currentTarget.reset();

        try {
            setError(null);
            setResponse(null);  //clear previous response or error

            const res = await axios.post("http://127.0.0.1:5000/ask_tutor", {
                prompt: enteredPrompt,
            });
            setResponse(res.data.response);
        } catch (error: any) {
            console.error("Error communicating with the backend: ", error);
            setError(error.response?.data?.Error || "An error occured");
        }
    }

    return(
        <>
        <form onSubmit={handleAskTutor}>
            <label htmlFor="prompt">Enter your physics question:</label>
            <textarea id="prompt" ref={prompt} />
            <button>Ask Schrody!</button>
        </form>
        <div>
            <h3>Schrody says:</h3>
            <div>
                {error ? (
                    <p style={{color: "red"}}>Error: {error}</p>
                ) : response ? (
                    <p>{response}</p>
                ) : (
                    <p>Waiting for question...</p>
                )}
            </div>
        </div>
        </>
        
    );
}