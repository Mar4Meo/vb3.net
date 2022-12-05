import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/main3.png";
import courseImg3 from "../../../assests/images/ui-ux.png";

import "./courses.css";
import CourseCard from "./CourseCard";


const coursesData = [
  {
    id: "01",
    title: "الوحدة الأولي\": حل المشكلات Problem Solving",
    lesson: 3,
    students: 1,
    rating: 5.9,
    imgUrl: courseImg1,
    linkUrl: "/video1",
  },

  {
    id: "02",
    title: "الوحدة الثانية\": لغة الفيجوال بيزك VB.NET",
    lesson: 2,
    students: 2.5,
    rating: 4,
    imgUrl: courseImg2,
    linkUrl: "/video2",
  },

  {
    id: "03",
    title: "مراجة عامة علي المقرر",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg3,
    linkUrl: "/video3",
  },

];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>الفيديوهات</h2>
                <p>
                  هذه الفيديوهات الخاصة بالمحتوي
                </p>
              </div>
              <div className="w-10 mt-5 ms-3 text-end">
                <button className="btn"><a href='/allDr#2' className="aola">عرض المزيد</a></button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
                <span id="2"></span>
      </Container>
    </section>
  );
};

export default Courses;
