const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function run(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
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

  if (!response.ok) {
    console.error("API Error:", data.error);
    throw new Error(data.error?.message || "API request failed");
  }

  console.log(data);

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}

export default run;