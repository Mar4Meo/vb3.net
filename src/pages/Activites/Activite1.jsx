import React, { Fragment } from 'react'
import { Col, Container } from 'reactstrap'
import Header from '../../components/Header/Header'


const Activite1 = () => {
  return (
    <Fragment>
        <Header />
        <Container>
            <Col>
            <div>
                <iframe style={{width: '100%', height: '600px'}} title="#" src="https://wordwall.net/embed/3d6e543fda3d4de3ac14ca4883300015?themeId=44&templateId=3&fontStackId=0" frameBorder="0" allowFullScreen></iframe>
            </div>
            </Col>
            <Col className='d-flex justify-content-between mt-4'>
                <a href="/"> </a>
                <div>
                    <a href="/activite1" className='btn btn-success btn-sm ms-1'>1</a>
                    <a href="/activite2" className='btn btn-outline-success btn-sm ms-1'>2</a>
                    <a href="/activite3" className='btn btn-outline-success btn-sm'>3</a>
                </div>
                <a href="/activite2" className='btn btn-success btn-sm'>التالي {"0->"}</a>
            </Col>
        </Container>
    </Fragment>
  )
}

export default Activite1
