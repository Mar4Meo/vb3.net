import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/graphics-design.png";
import courseImg2 from "../../../assests/images/Asv.png";

import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr2 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>الدرس الثاني</h2>
                <span>الخوارزميات Algorithms</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- يكتب خطوات حل المشكلة "(الخوارزمية Algorithm)"</p>
                <section style={{marginTop:"-40px"}}>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": حل المشكلة Problem Solving</p>
                    <div className='d-flex justify-content-end'>
                    <p>عبارة عن خطوات وأنشطة وعمليات ينبغي القيام بها للوصول إلي هدف او ناتج.</p>
                    <img src={courseImg2} className='mt-3 mb-3 w-50 img-fluid' alt="" />
                    </div>
                    <p style={{color: 'green', fontWeight: 'bold'}}>ثانياً ": مراحل حل المشكلة Problem Solving Stages</p>
                    <p>تمر مراحل حل المشكلات بعدة خطوات هي:</p>
                    <p style={{fontWeight: 'bold'}}>1-!@ تحديد المشكلة problem Definition</p>
                    <p>تحديد المخرجات المطلوبة والمدخلات المتوفرة وعمليات المعالجة الحسابية أو المنطقية .</p>
                    <p style={{fontWeight: 'bold'}}>2-!@ خطوات الحل الخوارزمية Algorithm</p>
                    <p>أحد الأساليب المستخدمة في حل مشكلة من خلال مجموعة من الإجراءات المرتبة ترتيباً منطقياً.</p>
                    <p>بعد تعريف وتحليل المشكلة من مخرجات ومدخلات يتم إعداد خطة الحل التي يجب أن تكون علي شكل سلسة من الخطوات المتتالية ويطلق عليها لفظ الخوارزمية ( Algorithm ) نسبة إلي عالم الرياضيات ومؤسس علم الجبر محمد بن موسي الخوارزمي ، ومن أحد طرق تمثيل خطوات الحل خرائط التدفق ( Flow Chart )</p>
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr3" className='btn btn-success'>خرائط التدفق</a>
                    </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
    </Fragment>
  )
}

export default Dr2