
type TopicProps = {
    id: number;
    topicName: string;
}

export default function Topic(props: TopicProps) {
    return(
        <div>
            <h4>{props.topicName}</h4>
        </div>
    )
}