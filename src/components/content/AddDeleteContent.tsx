import axios, { formToJSON } from "axios";
import { useState } from "react";

export default function AddDeleteContent() {
    const [formType, setFormType] = useState<"add" | "delete" | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        link: "",
        level: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleAddContent = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/educational-data", {
                title: formData.title,
                summary: formData.summary,
                link: formData.link,
                level: formData.level
            });
            alert(response.data.message);
            setFormType(null);
            setFormData({title: "", summary: "", link: "", level: ""});
        } catch (error:any) {
            alert(error.response?.data?.error || "An error occured!")
        }
    };

    const handleDeleteContent = async () => {
        try {
            const response = await axios.delete("http://127.0.0.1:5000/educational-data", {
                data: {title: formData.title},
            });
            alert(response.data.message);
            setFormType(null);
            setFormData({title: "", summary: "", link: "", level: ""});
        } catch (error:any) {
            alert(error.response?.data.error || "An error occured!");
        }
    };

    return(
        <div>
            <h2>
                Manage Educational Content
            </h2>
            <div>
                <button onClick={() => setFormType("add")}>Add Content</button>
                <button onClick={() => setFormType("delete")}>Delete Content</button>
            </div>

            {formType && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(formType === "add") handleAddContent();
                    else if(formType === "delete") handleDeleteContent();
                }}>
                    <h4>{formType === "add" ? "Add Content" : "Delete Content"}</h4>

                    {/* Title Field */}
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        />
                    </div>

                    {/* Additional Fields for Add */}
                    {formType === "add" && (
                        <>
                        <div>
                            <label htmlFor="summary">Summary:</label>
                            <input
                            type="text"
                            id="summary"
                            name="summary"
                            value={formData.summary}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="link">Link:</label>
                            <input
                            type="text"
                            id="link"
                            name="link"
                            value={formData.link}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="level">Level:</label>
                            <input
                            type="text"
                            id="level"
                            name="level"
                            value={formData.level}
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        </>
                    )}

                    <button type="submit">Submit</button>

                </form>
            )}
        </div>
    )
}