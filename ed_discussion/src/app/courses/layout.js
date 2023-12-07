import Header from "@/Components/homeComponents/Navbar";
import NewButton from "@/Components/homeComponents/newButton";
import Classes from "@/Components/homeComponents/Classes";
import LeftBar from "@/Components/homeComponents/LeftBar";
import {DATA2} from "@/data/DataDemo";
import {getTopDataLinks} from "@/app/api/routes/topMessage";
import SearchBox from "@/Components/homeComponents/searchBox";
import TopMessages from "@/Components/homeComponents/topMessage";
import HistoryMessages from "@/Components/homeComponents/historyMessage";

import {sql} from "@vercel/postgres";
import MiddleLinks from "@/app/courses/middlelinks";

export const dynamicParams = false;

export const topData = await sql`SELECT * FROM ThemeMessage order by posttime DESC;`;
// console.log(topData);

export default function Layout({children}) {

    return (
        <>
            <Header/>
            {children}
        </>
    )
}