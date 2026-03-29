import { NextResponse } from "next/server";
import pool from "../../../../lib/db"

export async function GET() {
    const result = await pool.query(
        "SELECT * FROM songs ORDER BY RANDOM() LIMIT 1"
    );
    const song = result.rows[0];
    return NextResponse.json(song);
}