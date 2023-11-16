import { Client } from "@notionhq/client";
import { writeFileSync } from "fs";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const pageId = process.env.NOTION_PAGE_ID;

(async () => {
  try {
    await notion.pages.retrieve({
      page_id: pageId,
    });

    let blocks = [];
    let hasMore = true;
    let startCursor = undefined;

    while (hasMore) {
      const response = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: startCursor,
      });

      blocks = [...blocks, ...response.results];
      hasMore = response.has_more;
      startCursor = response.next_cursor;
    }

    try {
      writeFileSync("notion.json", JSON.stringify(blocks, null, 2));
    } catch (writeError) {
      console.error("Failed to write file:", writeError);
    }
  } catch (apiError) {
    console.error("Failed to fetch from Notion API:", apiError);
  }
})();
