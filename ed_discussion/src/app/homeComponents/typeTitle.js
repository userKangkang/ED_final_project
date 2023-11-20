export default function TypeTitle({color, name}) {
    return(
        <>
          <div className={"text-sm ml-2 flex flex-row items-center my-1"}>
            <div className={`w-2 h-2 ${color} mr-2`}></div>
            {name}
            </div>
        </>
    );
}