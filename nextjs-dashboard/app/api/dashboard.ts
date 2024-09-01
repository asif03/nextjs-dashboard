export async function fetchRevenue() {
  try {
    let data = await fetch("https://api.vercel.app/blog");
    let posts = await data.json();

    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
