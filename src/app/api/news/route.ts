import { NextResponse  } from "next/server";
import  Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
    const feed = await parser.parseURL("https://www.mmafighting.com/rss/index.xml");
    return NextResponse.json(
        feed.items.map((item: {title?: string; link?: string}) => ({
            title: item.title,
            link: item.link,
        }))
    );
}
