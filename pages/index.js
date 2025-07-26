import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal App</title>
        <meta name="description" content="Student registration and portal backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Welcome to the Portal App</h1>
        <p>This is your custom homepage. Backend routes are working under <code>/api</code>.</p>

        <h2>Available API Routes</h2>
        <ul>
          <li>
            <a href="/api/auth/register" target="_blank" rel="noopener noreferrer">
              POST /api/auth/register – Register a new user
            </a>
          </li>
          <li>
            <a href="/api/auth/verify" target="_blank" rel="noopener noreferrer">
              POST /api/auth/verify – Verify OTP
            </a>
          </li>
          <li>
            <a href="/api/auth/login" target="_blank" rel="noopener noreferrer">
              POST /api/auth/login – Login
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
