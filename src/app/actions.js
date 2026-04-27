"use server";

const action = async (prevState, formData) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 2000),
  );
  const name = formData.get("recipe");
  console.log(name);

  if (name == "") {
    return { message: "Feltet skal udfyldes" };
  }
  return { message: "Din opskrift blev sendt" };

  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: { name },
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

export default action;
