/**
 * This function is used to place the Top message content to the page
 * You may find
 * for (let row of content) {
 *     if (typeof row === 'image') {
 *          <Image src=...>
 *     } else {
 *          <p>{row...}</p>
 *     }
 *   }
 *   structure useful
 * @returns {Promise<void>}
 */
import { getTopDataContent } from "@/app/api/routes/topMessage";
export async function placeTopMessageContent(id) {
    //TODO: place the Top message content to the page
    const idData = await getTopDataContent(id);
    return idData;
}

/**
 * You can reference the former functiion
 * @returns {Promise<void>}
 */
export async function placeSubMessageContent() {
    //TODO: place the Sub message content to the page
}