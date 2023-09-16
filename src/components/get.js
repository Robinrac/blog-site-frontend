const API = process.env.API_URL;

export async function getBlogPost() {
    try {
      const response = await fetch(API, {
        method: 'GET',
      });
      if (!response.ok) {
          return { error: "error" };
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return { error: error.message };
    }
  }