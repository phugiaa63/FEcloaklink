import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import bgImage from "../assets/bgImage.jpeg";
import TextSlider from "../middleware/TextSlider";

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const defaultCode = "abc123"; // Mặc định
    fetch(`https://linkrepo.onrender.com/${defaultCode}`)
      .then((res) => {
        if (!res.ok) throw new Error("Không tìm thấy hoặc bị chặn");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Data:", data);
        setOriginalUrl(data.originalUrl);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleClick = () => {
    if (originalUrl) {
      window.location.href = originalUrl;
    }
  };

  return (
    <div
      className="text-white d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}
      >
        <TextSlider />
      </div>

      <Container style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-4">
          <img
            src={require("../assets/image.png")}
            alt="Logo"
            style={{ width: "500px", height: "auto" }}
          />
        </h1>
        <h1 className="display-4 fw-bold mb-4">Đăng ký và bắt đầu chơi</h1>
        <p className="lead mb-4">
          "Đăng ký hôm nay, nhận quà khủng, chơi thả ga."
        </p>
        {error && <p className="text-danger">{error}</p>}
         (
          <img
            src={require("../assets/btn.png")}
            alt="Bấm vào để nhập"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              width: "500px",
              height: "auto",
              marginTop: "20px",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        )
      </Container>
    </div>
  );
};

export default Home;
