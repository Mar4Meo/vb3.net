import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/web-design.png";

import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr1 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>الدرس الأول</h2>
                <span>حل المشكلة Problem Solving</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- يُعَرّفْ المشكلة "(prblem Solving)"</p>
                <p>2- يحدد مراحل حل المشكلة "(prblem Solving Stages)"</p>
                <p>3- يكتب خطوات حل المشكلة "(الخوارزمية Algorithm)"</p>
                <section style={{marginTop:"-40px"}}>
                    <p>قد يقابلك الكثير من المشكلات في حياتك اليومية فتفكر في طريقة او أكثر لحل تلك المشكلات فلابد ان تعرف كيفية تحليل المشكلة إلي أجزاء صغيرة ثم تحل كل جزء منها علي حدا وتدمج الحلول للوصول للحل المناسب</p>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": تعريف المشكلة</p>
                    <p>موقف يتطلب إيجاد حل له أي هدف مطلوب الوصول إليه من خلال إتباع عدة خطوات بترتيب محدد</p>
                    <p>بعد ان تعرفت علي ماهي المشكلة لابد ان تذهب لهذه الصفحة <a href="/Dr2" style={{color: 'green', fontSize:'12px'}}>حل المشكلة</a> لتعرف كيفية حل المشكلة ومراحلها</p>
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr2" className='btn btn-success'>مراحل حل المشكلة</a>
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

export default Dr1