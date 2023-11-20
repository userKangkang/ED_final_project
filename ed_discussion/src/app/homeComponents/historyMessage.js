import Style from "./icons.module.css";

export default function HistoryMessages(props) {
    
    const messageList = props.datas.map(data => {
        return(
            <li className="overflow-hidden ellipsis px-3 flex flex-col w-full h-16 bg-white border-t-2 justify-center" key={props.id}>
                <div className="flex my-1 flex-row items-center text-sm text-gray-600">
                    {data.isQuestion ? <span className={Style.iconfont}>&#xe689;</span>
                     : <span className={Style.iconfont}>&#xe792;</span> }
                    <span className={"truncate ml-3 text-sm"}>{data.title}</span>
                </div>
                <div className="flex flex-row items-center text-xs text-gray-600">
                    <span className={`text-${data.color} font-semibold mr-2`}>{data.type}</span>
                    <span className={"mr-2"}>{data.author}</span>
                    <span className={""}>{data.date}</span>
                </div>
            </li>
        );
    });

    return(
        <>
          <div className={"w-full h-5 bg-gray-400"}></div>
          <ul className={"truncate overflow-hidden max-h-full"}>
            {messageList}
          </ul>
          <div className={"my-0 mx-auto text-xs flex justify-center bg-white"}>更多</div>
        </>
    );
}