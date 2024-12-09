import { FormEvent, useRef } from "react"

type TopicFormProp = {
    onAddTopic: (topicName: string) => void;
}

export default function InputTopic(props: TopicFormProp) {

    const  newTopic = useRef<HTMLInputElement>(null);

    function handleSubmitTopic(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredTopic = newTopic.current!.value;
        event.currentTarget.reset();
        props.onAddTopic(enteredTopic); //IMPLEMENTIRAJ FUNKCIJO onAddTopic
    }



    return(
        <form onSubmit={handleSubmitTopic}>
            <label htmlFor="newTopic">Add a topic: </label>
            <input id="newTopic" type="text" ref={newTopic} />
            <button>Add a topic</button>
        </form>
    )
}