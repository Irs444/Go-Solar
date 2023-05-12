import { MDBCol, MDBAnimation, MDBCarouselItem, MDBCarousel, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBIcon, MDBFooter, MDBContainer, MDBBtn, MDBCardFooter } from 'mdb-react-ui-kit';
import React from 'react'
import './Home.css'
import Contacts from '../expert/Contacts';
import goSolar from '../../imgs/goSolar.ico'
// import Logo from '../../imgs/go solar.png'
import First from '../../imgs/First.jpg'
import Second from '../../imgs/Second.jpg'
// import Third from '../../imgs/Third.jpg'
import Fourth from '../../imgs/Fourth.jpg'
import { Link } from 'react-router-dom';
function Home() {
  const cardStyle = {
    // backgroundImage: 'url(https://img.freepik.com/free-vector/green-energy-generated-by-wind-turbine-solar-panel_1308-73952.jpg?w=1380&t=st=1683540692~exp=1683541292~hmac=dbecd12f9f1f814310ceddb7445c420cee62bcd4c8a8bcb86b1d32f3ebc5dc9f)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    color: 'white',
    height: '400px', // set the desired height here
    // borderRadius: '10px',
    // color: 'white'
  };
  return (
    <>
      <div>

        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="overflow-hidden pt-0"
            data-v-271253ee=""
          >

          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section className="mb-7 min-vh-100 position-relative">

              <div className="bg  position-absolute d-none d-lg-block" style={{ height: "100%", width: "100%", zIndex: 0, overflow: "hidden" }}></div>


              {/* <div className="bg"></div> */}
              {/* Content */}
              <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="container">
                  <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 1 }}>
                      <h1 className="my-2 display-3 fw-bold ls-tight">
                        {" "}
                        <span>Join the </span> <br />{" "}
                        <span className="text" style={{ color: "#19376D" }}>Energy Revolution</span>{" "}
                      </h1>{" "}
                      <p className='fw-normal mb-5'>Go Solar is transforming the way we access Renewable energy with simple and powerful solutions.</p>
                      <Link
                        className="btn   btn-warning btn-lg py-3 px-5 me-md-2 mb-3"
                       to={'/expert/Contacts'}
                        role="button"
                        aria-controls="#picker-editor"
                      >
                        Calculate Your Saving
                      </Link>{" "}

                    </div>

                  </div>
                </div>
              </div>
            </section>
            {/* <Link   className="btn btn-primary rounded-pill  mx-2 sticky-button me-1" to={'/expert/ExpertChat'}>Chat With us <MDBIcon far icon="comment-alt" /></Link> */}
          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .grayscale {\n                filter: grayscale(100%);\n              }\n            "
                }}
              />
              <h2 className="fw-bold mb-6">
                {" "}
                <span>Why choose Go Solar</span>

              </h2>
              <div className="crd-list " style={{ display: 'flex' }} >
                <div className="crd-icon-box " style={{ marginInlineStart: '100px' }}>
                  {" "}
                  <img
                    src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f3e0.png"
                    className="img-fluid grayscale"
                    style={{ maxWidth: 90 }}
                    alt=""
                  // aria-controls="#picker-editor"
                  />{" "}
                </div>
                <div className="crd-icon-cont">
                  <small>Trusted by</small>
                  <h5>
                    <span className='start-number'>4000</span>
                    "+"

                  </h5>
                  <p>Home-Owner</p>
                </div>
                <div className="crd-icon-box" style={{ marginInlineStart: '200px' }}>
                  {" "}
                  <img
                    src="https://p1.hiclipart.com/preview/950/22/452/emoji-sticker-hospital-building-illustration-png-clipart.jpg"
                    className="img-fluid grayscale"
                    style={{ maxWidth: 90 }}
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <div className="crd-icon-cont">
                  <small>Trusted By</small>
                  <h5>
                    <span className='start-number'>Fortune 500</span>


                  </h5>
                  <p>Companies</p>
                </div>
                <div className="crd-icon-box" style={{ marginInlineStart: '200px' }}>
                  {" "}
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/house-with-solar-panels-4990476-4159938.png"
                    className="img-fluid grayscale"
                    style={{ maxWidth: 90 }}
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>

                <div className="crd-icon-cont">
                  <small></small>
                  <h5>
                    <span className='start-number'> 90 MW</span>


                  </h5>
                  <p>Rooftop Solar Experience </p>

                </div>
                {/* <div className="col-lg-2 col-4 mb-5 mb-lg-0">
            {" "}
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/1.png"
              className="img-fluid grayscale"
              style={{ maxWidth: 90 }}
              alt=""
              aria-controls="#picker-editor"
            />{" "}
          </div>
          <div className="col-lg-2 col-4 mb-5 mb-lg-0">
            {" "}
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
              className="img-fluid grayscale"
              style={{ maxWidth: 90 }}
              alt=""
              aria-controls="#picker-editor"
            />{" "}
          </div>
          <div className="col-lg-2 col-4 mb-5 mb-lg-0">
            {" "}
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/5.png"
              className="img-fluid grayscale"
              style={{ maxWidth: 90 }}
              alt="Sony - logo"
              aria-controls="#picker-editor"
            />{" "}
          </div> */}
              </div>
            </section>
          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10">
              <h1 className="fw-bold mb-7 text-center" style={{color:"#19376D"}}>G'day! <span className='fw-normal'>How Can We</span> Help?</h1>
              <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
        <MDBCardTitle  className='display-6 fw-bold text-center' style={{color:"#19376D"}}>Silver</MDBCardTitle>
          <MDBCardImage
            src='/one.png'
            alt='...'
            position='top'
            style={{height:"350px"}}
          />
          <MDBCardBody>
          
          <div className="">
          <MDBCardText ><i class="fas fa-circle-check"></i> 415w Risen Panels</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> Goodwe Inverter</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> 25 Year Panel Warranty</MDBCardText>
            <MDBCardText  ><i class="fas fa-circle-check"></i> 10 Year Inverter Warranty</MDBCardText>
           
            
          </div>
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button"  class="btn btn-warning rounded-pill float-end w-50" style={{color:"white"}}>Read More</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
        <MDBCardTitle  className='display-6 fw-bold text-center' style={{color:"#19376D"}}>Gold</MDBCardTitle>
          <MDBCardImage
            src='/two.png'
            alt='...'
            position='top' 
            style={{height:"350px"}}
          />
          <MDBCardBody>
          
          <MDBCardText ><i class="fas fa-circle-check"></i> 415w Jinko N Panels</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> Sungrow Inverter</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> 25 Year Panel Warranty</MDBCardText>
            <MDBCardText  ><i class="fas fa-circle-check"></i> 10 Year Inverter Warranty</MDBCardText>
           
         
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button"  class="btn btn-warning rounded-pill w-50 float-end" style={{color:"white"}}>Read More</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
        <MDBCardTitle className='display-6 fw-bold text-center' style={{color:"#19376D"}}>Platinum</MDBCardTitle>
          <MDBCardImage
            src='/three.png'
            alt='...'
            position='top'
            style={{height:"350px"}}
          />
          <MDBCardBody>
           
          <MDBCardText ><i class="fas fa-circle-check"></i> 410w REC Alpha Pure R</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> Fronius Inverter</MDBCardText>
            <MDBCardText><i class="fas fa-circle-check"></i> 25 Year Panel Warranty</MDBCardText>
            <MDBCardText  ><i class="fas fa-circle-check"></i> 10 Year Inverter Warranty</MDBCardText>
           
          </MDBCardBody>
          <MDBCardFooter>
          <button type="button"  class="btn btn-warning rounded-pill w-50 float-end" style={{color:"white"}}>Read More</button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
            </section>
          </section>
          {/**/}
        </div>
        <section draggable="false" className="container pt-5 border-bottom" data-v-271253ee="">
          <section className="mb-10">

            <div className="container text-center mb-6">
              <h2>Stages of <strong>Installation</strong> of Solar <strong>Power System:</strong></h2>
            </div>
            <MDBRow className='row-cols-1 row-cols-md-4 g-2'>
              <MDBCol>
                <MDBCard className='h-100' >
                  <img className="card-img" height="150px" src="https://img.freepik.com/free-vector/industry-flat-biogas-illustration_23-2149403737.jpg?w=996&t=st=1683542523~exp=1683543123~hmac=15ab4824ae25c15d24eb5773998c452437b9fdd40443f5d769c9a5126302b31d" alt="CardImg" srcset="" />
                  <MDBCardBody className='h-75'>
                    <MDBCardTitle>1. Select your Solar Package</MDBCardTitle>
                    <MDBCardText>
                      Get in touch and our team of experts will design a property specific package to suit your needs
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>

                <MDBCard className='h-100'>

                  <MDBCardBody >
                    <img className="card-img" height="150px" src="https://img.freepik.com/free-vector/sun-energy-concept-illustration_114360-6030.jpg?w=996&t=st=1683542652~exp=1683543252~hmac=a0ed9a25ddf5e45cc665fe521248d55233a2865f4bdbdef63be79bd337b98eeb" alt="CardImg" />


                    <MDBCardTitle>2. Installation of Solar System</MDBCardTitle>
                    <MDBCardText>
                      Our CEC Accredited Installation teams will take care of the entire installation process from start to finish!            </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100' >

                  <MDBCardBody >
                    <img className="card-img" height="150px" src="https://img.freepik.com/free-vector/green-energy-generated-by-wind-turbine-solar-panel_1308-73952.jpg?w=1060&t=st=1683541606~exp=1683542206~hmac=e2e2aafa21333db90007e7d209626a0f4465d2cba28fa83b88c50e9a94ddf257" alt="CardImg" />


                    <MDBCardTitle>3. Grid Connection with Electricity Provider</MDBCardTitle>
                    <MDBCardText>
                      Our team will generate and submit all required paperwork to your electricity provider to get you connected to the grid and ready to start saving!                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100' >

                  <MDBCardBody >
                    <img className="card-img" src="https://img.freepik.com/free-vector/tiny-characters-village-with-windmills-solar-panels-save-planet-people-with-eco-friendly-lifestyle-flat-vector-illustration-sustainable-renewable-energy-technology-concept-banner_74855-23201.jpg?w=996&t=st=1683541127~exp=1683541727~hmac=6bd47e6ad30ca045b15583758b9dafcd16769d4d9409165efef82ce926fa9c5c" alt="CardImg" />

                    <MDBCardTitle>4. Enjoy savings!</MDBCardTitle>
                    <MDBCardText>Sit back relax and watch your electricity bill go down   </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBRow>
          </section>
        </section>
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5 border-bottom " data-v-271253ee="">
            <section className="mb-10">
              <Contacts />
            </section>
          </section>
          {/**/}
        </div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <h2 className="fw-bold mb-5">Testimonials</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    {" "}
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />{" "}
                  </div>
                  <h5 className="mb-3">Maria Smantha</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    {" "}
                    <i className="fas fa-quote-left pe-2" />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                      eos id officiis hic tenetur quae quaerat ad velit ab hic
                      tenetur.
                    </span>{" "}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star-half-alt fa-sm text-warning" />{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    {" "}
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />{" "}
                  </div>
                  <h5 className="mb-3">Lisa Cudrow</h5>
                  <h6 className="text-primary mb-3">Graphic Designer</h6>
                  <p className="px-xl-3">
                    {" "}
                    <i className="fas fa-quote-left pe-2" />
                    <span>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi.
                    </span>{" "}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-0">
                  <div className="d-flex justify-content-center mb-4">
                    {" "}
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                      draggable="false"
                    />{" "}
                  </div>
                  <h5 className="mb-3">John Smith</h5>
                  <h6 className="text-primary mb-3">Marketing Specialist</h6>
                  <p className="px-xl-3">
                    {" "}
                    <i className="fas fa-quote-left pe-2" />
                    <span>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti.
                    </span>{" "}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fas fa-star fa-sm text-warning" />{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="far fa-star fa-sm text-warning" />{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10">
              <h2 className="fw-bold mb-4 ps-4">Frequently asked questions</h2>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    {" "}
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {" "}
                      <strong>How can solar save me money?</strong>{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-mdb-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body text-muted">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                      put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer
                      farm-to-table, raw denim aesthetic synth nesciunt you probably
                      haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    {" "}
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      {" "}
                      <strong>Non cupidatat skateboard dolor brunch?</strong>{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-mdb-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa
                      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                      put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer
                      farm-to-table, raw denim aesthetic synth nesciunt you probably
                      haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    {" "}
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {" "}
                      <strong>
                        Praesentium voluptatibus temporibus consequatur non
                        aspernatur?
                      </strong>{" "}
                    </button>{" "}
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-mdb-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                      optio vitae inventore autem fugiat rerum sed laborum. Natus
                      recusandae laboriosam quos pariatur corrupti id dignissimos
                      deserunt, praesentium voluptatibus temporibus consequatur non
                      aspernatur laborum rerum nemo dolorem libero inventore provident
                      exercitationem sunt totam aperiam. Facere sunt quos commodi
                      obcaecati temporibus alias amet! Quam quisquam laboriosam quae
                      repellendus non cum adipisci odio?
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <img
                      src="/goSolar.png"
                      height={40}
                      alt="MDB Logo"
                      loading="lazy"
                    />
                    {/* <MDBIcon color='secondary' icon={goSolar} className='me-3' /> */}

                  </h6>
                  <p>
                    Our service remains unparalleled in the industry and we strive to deliver the best possible outcomes for our customers. We partner with only the most trusted and reputable companies to provide cutting edge solutions to our customers
                  </p>
                  <MDBBtn tag='a' color='none' className='m-1 text-reset' style={{ color: '#3b5998' }}>
                    <MDBIcon fab icon='facebook-f' size='lg' />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1 text-reset' style={{ color: '#55acee' }}>
                    <MDBIcon fab icon='twitter' size='lg' />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1 text-reset' style={{ color: '#dd4b39' }}>
                    <MDBIcon fab icon='google' size='lg' />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1 text-reset' style={{ color: '#ac2bac' }}>
                    <MDBIcon fab icon='instagram' size='lg' />
                  </MDBBtn>
                </MDBCol>

                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Solar</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Residential
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Commercial
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Batteries
                    </a>
                  </p>

                </MDBCol>

                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Products
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      FAQs
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                  </p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              goSolar.com
            </a>
          </div>
        </MDBFooter>
      </div>


    </>
  )
}

export default Home;