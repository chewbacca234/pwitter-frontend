const handleSignUp = () => {
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: signUpUsername,
      password: signUpPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        dispatch(login({ username: signUpUsername, token: data.token }));
        setSignUpUsername("");
        setSignUpPassword("");
        setIsModalVisible(false);
      }
    });
};
