
const BASE_URL = "http://localhost:8000";

export async function generateTranscript(videoUrl: string) {
  const response = await fetch(`${BASE_URL}/generate-transcript`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoUrl }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch transcript");
  }

  return await response.json();
}
