import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/graphics-design.png";
import courseImg3 from "../../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";


const coursesData = [
  {
    id: "01",
    title: "حل المشكلة Problem Solving",
    lesson: 3,
    students: 1,
    rating: 5.9,
    imgUrl: courseImg1,
    linkUrl: "/Dr1",
  },

  {
    id: "02",
    title: "الخوارزميات Algorithms",
    lesson: 2,
    students: 2.5,
    rating: 4,
    imgUrl: courseImg2,
    linkUrl: "/Dr2",
  },

  {
    id: "03",
    title: "خرائط التدفق Flow Chart",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg3,
    linkUrl: "/Dr3",
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
                <h2>الدروس</h2>
                <p>
                  ينقسم المحتوي إلي فصلين يحتوي الفصل الأول علي 3 دروس
                  <br/>
                  والفصل الثاني علي 5 دروس
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
      </Container>
    </section>
  );
};

export default Courses;
