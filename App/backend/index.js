import express from "express";
const app = express();

app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   res.send("Server is ready.");
// });


app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "What do you get when you cross a snowman and a vampire?",
      content: "Frostbite.",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
