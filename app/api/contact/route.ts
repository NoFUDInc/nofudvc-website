import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

interface ContactPayload {
  name: string
  email: string
  message: string
}

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>
    const name = (body.name ?? "").trim()
    const email = (body.email ?? "").trim()
    const message = (body.message ?? "").trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL")
    const privateKeyRaw = getEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY")
    const privateKey = privateKeyRaw.replace(/\\n/g, "\n")
    const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID")
    const sheetName = process.env["GOOGLE_SHEETS_TAB_NAME"] || "Sheet1"

    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth: jwt })

    const timestamp = new Date().toISOString()
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}


