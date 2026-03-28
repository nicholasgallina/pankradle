import { NextResponse } from "next/server";
import pool from "../../../../lib/db"

export async function GET() {
    const result = await pool.query("SELECT first_name, last_name FROM fighters");

    return NextResponse.json(
        result.rows.map((r) => `${r.first_name} ${r.last_name}`)
    );
}