import { TopicType } from "./Helper";
import Topic from "./Topic";

type TopicListProps = {
    topics: TopicType[];
}

export default function TopicList(props: TopicListProps) {
    const topics = props.topics || [];
    return(
        <ul>
            {topics.map((topic) => (
                <li key={topic.id}>
                    <Topic id={topic.id} topicName={topic.topicName} />
                </li>
            ))}
        </ul>
    )
}