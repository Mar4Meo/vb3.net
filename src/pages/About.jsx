import React, { Fragment } from 'react'

import Sh3ar from '../assests/images/Naw3ya Shams2.png'
import Sh3ar2 from '../assests/images/Techno.jpg'

import { Container, Row , Col } from 'reactstrap'
import Header from '../components/Header/Header';

const About = () => {
  return (
    <Fragment>
        <Header/>
    <Container>
        <Row>
          <Col lg="12" className="mb-5 mt-5">
                <section style={{margin: '-40px 40px'}}>
                    <div className='d-flex justify-content-between'>
                    <img src={Sh3ar} alt="" width={100} height={80} />
                    <img src={Sh3ar2} alt="" width={100} height={100} />
                    </div>
                    <div className='d-flex justify-content-between'>
                    <p style={{marginRight: '5px', fontSize:'12px', marginTop: '-24px'}}>كلية التربية النوعية</p>
                    <p style={{fontSize:'11px', marginTop: '-20px'}}>قسم تكنولوجيا التعليم</p>
                    </div>
                    <p style={{marginTop: '85px', fontSize: '25px'}} className='text-center'>هذا الموقع أنشئ كتكليف لمقرر شبكات للفرقة الثالثة <br/> تربية نوعية قسم تكنولوجيا التعليم</p>
                    <div className='d-flex justify-content-between'>
                        <span style={{marginTop: '145px'}}>تم الإعداد بواسطة : <span style={{color: 'green'}}>إسلام فارس سعد</span></span>
                        <span style={{marginTop: '145px'}}>مقدم إلي : <span style={{color: 'green'}}>د./ ولاء كمال 
                        <br /> <br /><span> د./ مها محمود </span></span>
                        </span>
                    </div>
                </section>
          </Col>
        </Row>
    </Container>
    </Fragment>
  )
}

export default About