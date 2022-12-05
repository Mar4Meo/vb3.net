import React, { Fragment } from 'react'
import { Col, Container } from 'reactstrap'
import Header from '../../components/Header/Header'


const Activite2 = () => {
  return (
    <Fragment>
        <Header />
        <Container>
            <Col>
            <div>
                <iframe style={{width: '100%', height: '600px'}} title="#" src="https://wordwall.net/embed/6bdd3580e5e342ee9c151a14f39c4ff8?themeId=41&templateId=46&fontStackId=0" frameBorder="0" allowFullScreen></iframe>
            </div>
            </Col>
            <Col className='d-flex justify-content-between mt-4'>
                <a href="/activite1" className='btn btn-success btn-sm'>{"<-0"} السابق</a>
                <div>
                    <a href="/activite1" className='btn btn-outline-success btn-sm ms-1'>1</a>
                    <a href="/activite2" className='btn btn-success btn-sm ms-1'>2</a>
                    <a href="/activite3" className='btn btn-outline-success btn-sm'>3</a>
                </div>
                <a href="/activite3" className='btn btn-success btn-sm'>التالي {"0->"}</a>
            </Col>
        </Container>
    </Fragment>
  )
}

export default Activite2
