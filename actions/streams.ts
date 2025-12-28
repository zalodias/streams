import { Client } from "@notionhq/client";
import type {
  BlockObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import fs from "fs";
import path from "path";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const data = path.resolve("data");
if (!fs.existsSync(data)) {
  fs.mkdirSync(data, { recursive: true });
}

const streams = path.resolve(data, `streams-${Date.now()}.json`);

function extractPlainText(richText: RichTextItemResponse[] = []) {
  return richText.map((text: RichTextItemResponse) => text.plain_text).join("");
}

type BlockWithChildren = BlockObjectResponse & {
  children?: BlockWithChildren[];
};

export async function fetchBlockContent(
  id: string
): Promise<BlockWithChildren[]> {
  const blocks: (BlockObjectResponse | PartialBlockObjectResponse)[] = [];
  let cursor: string | undefined;

  while (true) {
    const data = await notion.blocks.children.list({
      block_id: id,
      start_cursor: cursor ?? undefined,
    });

    blocks.push(...data.results);

    if (!data.has_more) break;
    cursor = data.next_cursor ?? undefined;
  }

  return blocks as BlockWithChildren[];
}

async function main() {
  const blocks = await fetchBlockContent(process.env.NOTION_STREAMS_ID!);
  const index: Array<{
    id: string;
    text: string;
    created_time: string;
    last_edited_time: string;
  }> = [];

  for (const block of blocks) {
    if (block.type !== "paragraph") continue;

    const text = extractPlainText(block.paragraph.rich_text).trim();

    const stream = {
      id: block.id,
      text,
      created_time: block.created_time,
      last_edited_time: block.last_edited_time,
    };

    index.push(stream);
  }

  fs.writeFileSync(streams, JSON.stringify(index, null, 2), "utf-8");

  console.log(`Exported ${index.length} streams`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
