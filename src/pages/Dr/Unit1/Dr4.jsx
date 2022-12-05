import React, { Fragment } from 'react'

import courseImg1 from "../../../assests/images/ui-ux.png";
import courseImg2 from "../../../assests/images/IDE.png";

import { Container, Row , Col } from 'reactstrap'
import Header from '../../../components/Header/Header'

const Dr4 = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-4">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 className='mb-3'>ف2" الدرس الأول</h2>
                <span>لغة الفيجوال بيزك VB.Net و IDE</span>
                    <img src={courseImg1} className='mt-3 mb-3 img-fluid img-thumbnail' alt="" />
                <p style={{fontWeight:'bold', color: 'green'}}>في نهاية هذا الدرس يجب ان يكون الطالب قادراً علي أن :</p>
                <p>1- يٌوضح المقصود بلغة البرمجة</p>
                <p>2- يَتعرف ماهية الفيجوال بيزك دوت نت VB.NET</p>
                <p>3- يحدد اهم مكونات شاشة IDE</p>
                <section style={{marginTop:"-40px"}}>
                    <p>بعد دراستك لأسلوب حل المشكلات والذي تعلمته من خلال وضع خطوات منطقية لحل مشكلة ما سوف تبدأ في هذا الفصل التعامل مع لغة الفيجوال بيزك دوت نت VB.NET والتي تمكنك من تحويل خطوات ل المشكلة إلي أوامر برمجية يمكن تنفيذها</p>
                    <p style={{color:'green', fontWeight: 'bold'}}>اولاً ": لغة الفيجوال بيزك دوت نت VB.NET</p>
                    <p>إحدي لغات البرمجة ذات المستوي العالي High Level Language ومصممة لتكون سهلة التعلم حيث أن اوامرها وتعليماتها تستخدم مفردات اللغة الأنجليزية ، ويمكن إستخدامها لإنتاج تطبيقات منها : </p>
                    <p>1- تطبيقات مكتبية <small style={{fontWeight:"bold", fontSize: '12px'}}>Windows Applications</small></p>
                    <p>2- تطبيقات ويب <small style={{fontWeight:"bold", fontSize: '12px'}}>Web Applications</small></p>
                    <section style={{marginTop: '-20px'}}>
                        <p>الأوامر والتعليمات التي تكتب بلغة الفيجوال بيزك دوت نت VB.NET يمكن من خلالها إنشاء الكائنات Objects بذاكرة الكمبيوتر بحيث يكون لكل كائن :</p>
                        <p>1- خصائص <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Properties</small> مثل ( حجم - لون - شكل الخط ) للنص الذي يكتب علي واجهة البرنامج .</p>
                        <p>2- أحداث <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Events</small> مثل حدث النقر <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Clicks</small> علي زر الأمر .</p>
                        <p>3- إجراءات <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Procedures</small> يحتوي كل منها علي أوامر وتعليمات ، تنفذ تلك الأوامر والتعليمات عندما يستدعي هذا الإجراء .</p>
                    </section>
                        <section style={{marginTop: '-40px'}}>
                            <p style={{fontWeight:"bold", color: 'green'}}>بناءاً علي ما سبق تعد لغة Visual Basic.NET :</p>
                            <p>كائنية التوجه <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Object Oriented</small> لأن برامجها تعمل من خلال كائنات في ذاكرة الكمبيوتر .</p>
                            <p>موجهة بالحدث <small style={{fontWeight:"bold", fontSize: '12px', color: 'green'}}>Event Driven</small> لأن الأوامر والتعليمات تنفذ عند وقوع حدث معين .</p>
                        </section>
                        <section>
                            <p style={{fontWeight:"bold", color: 'green'}}>لغة Visual Basic.Net و IDE :</p>
                            <p>يحتاج مبرمج لغة Visual Basic.Net إلي بيئة تطوير متكاملة يطلق عليها IDE وهي اختصار لـ ( Integrated Development Environment ) توفر للمبرمج أدوات ميزات تمكنه من إنشاء تطبيقات ( ويندوز - موبايل - ويب ... الخ ) والذي يمثلها مايطلق عليه Visual Staduio .</p>
                            <img src={courseImg2} alt="" />
                            <p style={{fontWeight: 'bold', color: 'green', marginTop: '15px'}}>تشير الأرقام الموضحة بالصورة إلي مكونات بيئة التطوير المتكاملة IDE</p>
                            <p>1- نافذة النموذج <small style={{fontWeight:"bold", fontSize: '13px', color: 'green'}}>Form</small> .</p>
                            <p>2- صندوق الأدوات <small style={{fontWeight:"bold", fontSize: '13px', color: 'green'}}>Toolbox</small> .</p>
                            <p>2- نافذة الخصائص <small style={{fontWeight:"bold", fontSize: '13px', color: 'green'}}>Properties</small> .</p>
                            <p>2- نافذة الحل <small style={{fontWeight:"bold", fontSize: '13px', color: 'green'}}>Solution Explorer</small> .</p>
                        </section>
                    <div className='d-flex justify-content-center'>
                    <a href="/Dr5" className='btn btn-success'>النموذج Form</a>
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

export default Dr4