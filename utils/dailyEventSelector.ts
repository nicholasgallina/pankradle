import pool from "../lib/db";

type Fighter = {
    name: string;
    image: string | null;
    country: string | null;
};

type Bout = {
    id: number;
    fighter1: Fighter;
    fighter2: Fighter;
    weightClass: string;
};

type Event = {
    name: string;
    date: string;
    location: string;
    bouts: Bout[];
};

// today's date => integer (hash)
function hashDate(date: string): number {
    let hash = 0;
    for (let i = 0; i < date.length; i++) {
        hash += date.charCodeAt(i);
    }
    return hash;
}

// hash => index (representing one event)
export function getDailyEventIndex(totalEvents: number): number {
    const today = new Date().toLocaleDateString("en-CA");
    const hash = hashDate(today);
    return hash % totalEvents;
}

// index => event data (via DB query)
export async function getTodaysEvent(): Promise<Event> {
  const countResult = await pool.query("SELECT COUNT(*) FROM events");
  const totalEvents = parseInt(countResult.rows[0].count);

  const index = getDailyEventIndex(totalEvents);

  const eventResult = await pool.query(
    "SELECT * FROM events LIMIT 1 OFFSET $1",
    [index]
  );
  const event = eventResult.rows[0];

  const boutsResult = await pool.query(
    `SELECT
      b.id,
      b.bout_order,
      b.weight_class,
      f1.first_name || ' ' || f1.last_name AS fighter1_name,
      f1.image_url AS fighter1_image,
      f1.country AS fighter1_country,
      f2.first_name || ' ' || f2.last_name AS fighter2_name,
      f2.image_url AS fighter2_image,
      f2.country AS fighter2_country
    FROM bouts b
    LEFT JOIN fighters f1 ON b.fighter1_id = f1.id
    LEFT JOIN fighters f2 ON b.fighter2_id = f2.id
    WHERE b.event_id = $1
    ORDER BY b.bout_order ASC`,
    [event.id]
  );

  return {
    name: event.name,
    date: event.event_date,
    location: event.location,
    bouts: boutsResult.rows.map((row) => ({
      id: row.id,
      weightClass: row.weight_class,
      fighter1: {
        name: row.fighter1_name,
        image: row.fighter1_image,
        country: row.fighter1_country,
      },
      fighter2: {
        name: row.fighter2_name,
        image: row.fighter2_image,
        country: row.fighter2_country,
      },
    })),
  }};