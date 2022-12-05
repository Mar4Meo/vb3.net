import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/vb2015_fig2.1.jpg";
import courseImg2 from "../../../assests/images/pinlk.png";
import courseImg3 from "../../../assests/images/dblclick.png";


import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr6 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>ف2" الدرس الثالث</h2>
                <span>زر الأمر Button</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- ينشئ مشروع بلغة الفيجوال بيزك دوت نت VB.NET</p>
                <p>2- يحدد ويظفة زر الأمر Button</p>
                {/* <p>3- يذكر خصائص النموذج Form</p> */}
                <section style={{marginTop:"-40px"}}>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": زر الأمر Button</p>
                    <p>أحد أدوات التحكم التي يمكن إدراجها علي نافذة النموذج وعند النقر عليه يقوم بمهمة معينة</p>
                    <div className='d-flex'>
                        <img src={courseImg3} alt="" />
                        <img src={courseImg2} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr7" className='btn btn-success mt-5'>العنوان Label</a>
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

export default Dr6