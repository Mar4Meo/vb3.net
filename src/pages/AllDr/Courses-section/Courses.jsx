import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/graphics-design.png";
import courseImg3 from "../../../assests/images/ui-ux.png";
import courseImg4 from "../../../assests/images/VB.Netimg2.png";
import courseImg5 from "../../../assests/images/vb2015_fig2.1.jpg";
import courseImg6 from "../../../assests/images/vb.net_button1.jpg";
import courseImg7 from "../../../assests/images/vb.net_label1.jpg";
import courseImg8 from "../../../assests/images/vb.net_textbox1.jpg";

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

  {
    id: "04",
    title: "لغة الفيجوال بيزك VB.NET و IDE",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg4,
    linkUrl: "/u2dr1",
  },
    {
    id: "05",
    title: "النموذج Form",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg5,
    linkUrl: "/u2dr2",
  },
  {
    id: "06",
    title: "زر الأمر Button",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg6,
    linkUrl: "/u2dr3",
  },
  {
    id: "07",
    title: "العنوان Label",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg7,
    linkUrl: "/u2dr4",
  },
  {
    id: "08",
    title: "صندوق الكتابة TextBox",
    lesson: 3,
    students: 1.5,
    rating: 4.5,
    imgUrl: courseImg8,
    linkUrl: "/u2dr5",
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
                <span id="2"></span>
      </Container>
    </section>
  );
};

export default Courses;
