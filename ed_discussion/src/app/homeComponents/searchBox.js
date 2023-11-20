import Icons from './icons.module.css';

export default function SearchBox() {
    return (
        <>
        <div className=" relative inset-y-0 left-0 flex items-center px-2">
        <span className={Icons.iconfont}>&#xe61a;</span>
        <input type="text" className={"ml-2 search w-full h-12 bg-black"} placeholder="Search"/>
        </div>
        </>
    );
}