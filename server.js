import express from "express";

const app = express();

app.use(express.json());

let users = [
  {
    id: 12345,
    name: "Mohit",
  },
  {
    id: 12346,
    name: "Vipin",
  },
];

app.get("/users", (req, res) => {
  res.json({
    data: users,
  });
});

app.put("/update-user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const newName = req.body.name;
  console.log(userId);

  const user = users.find((u) => u.id === userId);

  if (user) {
    user.name = newName;
    res.json({
      message: "User Upadated fine",
      users,
    });
  } else {
    res.status(404).json({
      message: "User Not Found",
    });
  }
});

app.delete("/delete-user/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const newUsers = users.filter((u) => u.id !== userId);

  if (newUsers.length !== users.length) {
    users = newUsers;

    res.json({
      message: "User Deleted",
      users,
    });
  } else {
    res.status(404).json({
      message: "User Not Found",
    });
  }
});

app.listen(3005, () => {
  console.log("Server is Running on port 3005");
});
