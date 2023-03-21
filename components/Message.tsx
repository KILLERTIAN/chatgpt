import { DocumentData } from "firebase/firestore";
import { type } from "os";

type Props = {
    message: DocumentData;
}
function Message({ message }: Props) {
    return (
        <div>Message</div>
    )
}

export default Message