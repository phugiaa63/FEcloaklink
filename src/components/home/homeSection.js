import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bgImage from '../assets/bgImage.jpeg';
import TextSlider from '../middleware/TextSlider';

const Home = () => {
  const { code } = useParams(); // Lấy /:code từ URL
  const [originalUrl, setOriginalUrl] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!code) return;
    fetch(`https://www.1-sao789.info//${code}`)
      .then(res => {
        if (!res.ok) throw new Error('Không tìm thấy hoặc bị chặn');
        return res.json();
      })
      .then(data => setOriginalUrl(data.originalUrl))
      .catch(err => setError(err.message));
  }, [code]);

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}
      >
        <TextSlider />
      </div>

      <Container style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-4">
          Đăng ký và bắt đầu chơi
        </h1>
        <p className="lead mb-4">
          "Đăng ký hôm nay, nhận quà khủng, chơi thả ga."
        </p>
        {error && <p className="text-danger">{error}</p>}
        {originalUrl && (
          <Button
            variant="warning"
            size="lg"
            onClick={handleClick}
            className="fw-bold px-4 py-2 shadow-lg"
          >
            Đăng Ký Ngay - Chơi Thắng Lớn!
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Home;
