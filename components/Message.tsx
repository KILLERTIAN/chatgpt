import { DocumentData } from "firebase/firestore";
import { type } from "os";

type Props = {
    message: DocumentData;
}
function Message({ message }: Props) {
    const isChatGPT = message.user.name === "ChatGPT";
    return (
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
            <div >
                <img src={message.user.avatar} alt="" className="h-8 w-8" />
                <p className="pt-1 text-sm ">
                    {message.text}
                </p>
            </div>
        </div >
    )
}

export default Message