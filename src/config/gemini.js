const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function run(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  console.log(data);

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}

export default run;