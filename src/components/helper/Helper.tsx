import { useState } from "react";
import InputTopic from "./TopicInput";
import TopicList from "./TopicList";
import Formulas from "./Formulas";
import AiTutor from "./AiTutor";

export type TopicType = {
    id: number;
    topicName: string;
}


export default function Helper() {

    const [topics, setTopics] = useState<TopicType[]>([]);

    function handleAddTopic(text: string) {
        setTopics(prevTopics => {
            const newTopic: TopicType = {
                id: Math.random(),
                topicName: text,
            };

            return[...prevTopics, newTopic]
            //error: Helper.tsx:29 Uncaught TypeError: prevTopics is not iterable
            //at Helper.tsx:29:24
            //at Helper (Helper.tsx:20:33)
        })
    }

    return(
        <>
            <InputTopic onAddTopic={handleAddTopic}></InputTopic>
            <TopicList topics={topics} />
            <Formulas topics={topics} />
            <AiTutor />
        </>
    )
}