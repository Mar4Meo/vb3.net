import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/vb.net_textbox1.jpg";


import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr8 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>ف2" الدرس الخامس</h2>
                <span>صندوق الكتابة Textbox</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- ينشئ مشروع بلغة الفيجوال بيزك دوت نت VB.NET</p>
                <p>2- يحدد ويظفة صندوق الكتابة Textbox</p>
                {/* <p>3- يذكر خصائص النموذج Form</p> */}
                <section style={{marginTop:"-40px"}}>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": صندوق الكتابة Textbox</p>
                    <p>أداة تستخدم في إدخال بيانات نصية من مستخدم البرنامج أثناء تشغيل البرنامج</p>
                    <section>
                    <p>تم بحمد الله الإنتهاء من المقرر الخاص بالصف الثالث الإعدادي في مادة الحاسب الآلي إضغط لتعرف معلومات عن صاحب الموقع</p>
                    <div className='d-flex justify-content-center'>
                    <a href="/about" className='btn btn-success mt-5'>من نحن</a>
                    </div>
                    </section>
                </section>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
    </Fragment>
  )
}

export default Dr8