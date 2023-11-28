import {unstable_noStore as noStore} from "next/cache";

/**
 *  Find the submessages of the page using pageId
 *  Note: Jingfeng's thought about the structure of the submessages:
 *  id | pageId | usr | content | date
 *  id is the primary key
 *  and if lacking something, remember to add to the table structure
 *  I think we might need no store in this function.
 * @param pageId
 * @returns an array of submessages
 */
export default function getSubMessages(pageId) {
    noStore();
    try {
        //TODO: Find the submessages of the page using pageId

    } catch (error) {
        console.log(error);
    }
}