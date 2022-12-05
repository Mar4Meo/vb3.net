import React, { Fragment } from 'react'
import { Col, Container } from 'reactstrap'
import Header from '../../components/Header/Header'


const Video1 = () => {

  return (
    <Fragment>
        <Header />
        <Container>
            <Col>
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item w-100" style={{height: '600px'}} title= "حل المشكلات" src="https://www.youtube.com/embed/7BfMWWD4BFw" allowFullScreen></iframe>
                </div>
            </div>
            </Col>
            <Col className='d-flex justify-content-between mt-4'>
                <a href="/"> </a>
                <div>
                    <a href="/video1" className='btn btn-success btn-sm ms-1'>1</a>
                    <a href="/video2" className='btn btn-outline-success btn-sm ms-1'>2</a>
                    <a href="/video3" className='btn btn-outline-success btn-sm'>3</a>
                </div>
                <a href="/video2" className='btn btn-success btn-sm'>التالي {"0->"}</a>
            </Col>
        </Container>
    </Fragment>
  )
}

export default Video1
