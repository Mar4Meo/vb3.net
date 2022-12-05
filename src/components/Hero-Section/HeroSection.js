import React from "react";
import { Container, Row, Col } from "reactstrap";
import HomeImg  from "../../assests/images/VB.Netimg2.png"
import "./hero-section.css";

const HeroSection = () => {
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                حل المشكلات <br />ولغة الفيجوال بيزك
              </h2>
              <p className="mb-5">
                حل المشكلات <br />
                يعد حل المشكلات اسلوب من الأساليب المتبعة للحصول علي نتائج إيجابية للمشكلة عن طريق دمج كل الحلول الممكنة بصورة مبسطة للحصول علي ناتج فعلي
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="إبحث عن..." />
              <button className="btn">إبحث</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={HomeImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
