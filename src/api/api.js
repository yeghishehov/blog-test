export default async function getAllStories() {
  const response = await fetch(
    "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories"
  );
  const data = await response.json();
  return data.stories;
}
