import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/vb.net_label1.jpg";
import courseImg2 from "../../../assests/images/A7sp.png";


import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr7 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>ف2" الدرس الرابع</h2>
                <span>العنوان Label</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- ينشئ مشروع بلغة الفيجوال بيزك دوت نت VB.NET</p>
                <p>2- يحدد ويظفة العنوان Label</p>
                {/* <p>3- يذكر خصائص النموذج Form</p> */}
                <section style={{marginTop:"-40px"}}>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": العنوان Label</p>
                    <p>أداة تستخدم في عرض نص علي نافذة النموذج لايمكن تغييره أثناء التشغيل</p>
                        <img src={courseImg2} alt="" />
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr8" className='btn btn-success mt-5'>صندوق الكتابة Textbox</a>
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

export default Dr7