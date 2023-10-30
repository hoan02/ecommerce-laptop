import newRequest from "../utils/newRequest.js";

const Home = () => {
  const user = {
    username: "admin",
    email: "admin02@gmail.com",
    password: "123456",
  };

  const handle = async () => {
    await newRequest.post(`auth/register`, user).then(() => {
      console.log(user);
    });
  };

  return (
    <div>
      <h1>Welcome to admin panel </h1>
      <button onClick={handle}>Send</button>
    </div>
  );
};

export default Home;
