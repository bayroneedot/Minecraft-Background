import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// Serve your video file
app.get("/video.mp4", (req, res) => {
  res.sendFile(path.join(process.cwd(), "video.mp4"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
