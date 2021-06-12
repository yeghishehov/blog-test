export default async function getAllStories(form) {
  const response = await fetch(
    `https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${form.limit}&order_by=${form.order}&languages=${form.language}`
  );
  const data = await response.json();
  if (data.error) {
    return data;  
  }
  return data.stories;
}
