import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/ui-ux.png";
import courseImg2 from "../../../assests/images/Flow.png";

import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr3 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>الدرس الثالث</h2>
                <span>خرائط التدفق Flow Chart</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- رسم خريطة التدفق "(Flow Chart)"</p>
                <section style={{marginTop:"-40px"}}>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": خريطة التدفق Flow Chart</p>
                    <div className='d-flex justify-content-end'>
                    <p>تمثيل تخطيطي يعتمد علي الرسم بأشكال قياسية لتوضيح ترتيب العمليات اللازمة لحل مسألة او مشكلة محددة.</p>
                    </div>
                    <img src={courseImg2} className='mt-3 mb-3 img-fluid' alt="" />
                    <section>
                    <p style={{fontWeight: 'bold', color: 'green', marginTop: '-20px'}}>من مزايا خرائط التدفق:</p>
                    <p>1- تيسير قراءة وفهم المشكلة وتوضيح للمبرمج مايجب عمله .</p>
                    <p>2- مفيدة في شرح البرنامج للآخرين .</p>
                    <p>3- تساعد في توثيق أفضل للبرنامج وخصوصاً إذا كان معقداً</p>
                    </section>
                    <p style={{marginTop: '-15px'}} className='mb-5'>وفي نهاية رسمك لخريطة التدفق فقد وفقت لتحقيق اكبر قدر من حلك للمشكلة المعقدة وتبسيطها بصورة سهلة وبسيطة ثم تحتاج لتوفير ذلك الحل لكل من وقع في مثل هذاه المشكلة فيسهل عليه حلها فماذا نفعل لتوصيل تلك الحلول إلي الأشخاص الواقعين بتلك المشاكل؟</p>
                    <p>سنتعرف معاً علي لغة البرمجة التي توصل حل المشاكل في صيغة اكواد برمجية تعتمد علي الحاسب ويقوم الشخص الواقع بمشكلة بفتح برنامج الحل فيكتب المشكلة فيظهر حلها بكل سهولة</p>
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr4" className='btn btn-success mt-2'>لغة الفيجوال بيزك VB.Net</a>
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

export default Dr3