export async function fetchRevenue() {
  try {
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    let data = await fetch("https://api.vercel.app/blog");
    let posts = await data.json();
    console.log("Data fetch completed after 3 seconds.");

    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
