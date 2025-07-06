export default async function generateImage({ prompt }) {
  const response = await fetch("https://api.meshy.ai/v1/text-to-3d", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  return { image_url: data.image_url };
}
