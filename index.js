createUser();

function createUser() {
  const form = document.getElementById("userForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const body = { username: username };

    const response = fetch("http://localhost:3300/users", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });

    return response.status;
  });
}
