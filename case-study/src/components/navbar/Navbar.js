// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // /* import addMonths from 'date-fns/addMonths';
// // import format from 'date-fns/format'; */

// // import {
// //   Nav,
// //   Navbar,
// //   Container,
// //   NavDropdown,
// //   InputGroup,
// //   FormControl,
// //   Form,
// //   Button,
// //   Row,
// //   Col,
// // } from "react-bootstrap";

// // function Navigation() {
// //   /* const [eventDate, setEventDate] = useState(format(new Date(), "yyyy-MM-dd"));
// //     const maxDate = format(addMonths(new Date(), 3), "yyyy-MM-dd"); */

// //   return (
// //     <div style={{ position: "sticky" }}>
// //       <Navbar
// //         collapseOnSelect
// //         expand="lg"
// //         bg="light"
// //         variant="light"
// //         id="tobesticked"
// //       >
// //         <Container fluid>
// //           <Navbar.Brand
// //             className="logo"
// //             style={{ marginRight: "40px", marginLeft: "20px", width: "197px" }}
// //           >
// //             <Link to="/">
// //               <img
// //                 src="assets/logo2.png"
// //                 className="image"
// //                 height="45px"
// //                 width="170px"
// //               />
// //             </Link>
// //           </Navbar.Brand>

// //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //           <Navbar.Collapse id="responsive-navbar-nav">
// //             <div className="" style={{}}>
// //               <Nav className="me-auto">
// //                 <Row className="g-2" xs={1} sm={2} md={4} lg={12} xl={12}>
// //                   <Col md={3} lg={2}>
// //                     <div className="tech">
// //                       <Form.Select
// //                         aria-label="Default select example"
// //                         variant=""
// //                         id="dropdown-basic"
// //                         className="technol"
// //                       >
// //                         <option value="" disabled selected hidden>
// //                           Technology
// //                         </option>
// //                         <option value="reactjs">React JS</option>
// //                         <option value="vuejs">Vue Js</option>
// //                         <option value="angular">Angular</option>
// //                         <option value="javascript">JavaScript</option>
// //                         <option value="mongodb">MongoDB</option>
// //                       </Form.Select>
// //                     </div>
// //                   </Col>
// //                   <Col md={3} lg={2}>
// //                     <div className="Linktech">
// //                       <Form.Select
// //                         aria-label="Default select example"
// //                         variant=""
// //                         id="dropdown-basic"
// //                         className="linksize"
// //                       >
// //                         <option value="" disabled selected hidden>
// //                           LEVEL
// //                         </option>
// //                         <option value="1">Easy</option>
// //                       <option value="2">Intermediat</option>
// //                       <option value="3">Advanced</option>
// //                       </Form.Select>
// //                     </div>
// //                   </Col>

// //                   <Col md={3} lg={2}>
// //                     <div className="formdate">
// //                       <Form.Control
// //                         type="text"
// //                         name="date-of-birth"
// //                         placeholder="From Date"
// //                         onFocus={(e) => (e.target.type = "date")}
// //                       />
// //                     </div>
// //                   </Col>
// //                   <Col md={3} lg={2}>
// //                     <div className="todate">
// //                       <Form.Control
// //                         type="text"
// //                         name="dob"
// //                         placeholder="To Date"
// //                         onFocus={(e) => (e.target.type = "date")}
// //                         /* max={maxDate}
// //                             name="date"
// //                             onChange={(e) => setEventDate(e.target.value)} */
// //                       />
// //                     </div>
// //                   </Col>

// //                   <Col md={12} lg={3} xl={3}>
// //                     <div>
// //                       <InputGroup>
// //                         <FormControl
// //                           type="text"
// //                           placeholder="Search Questions"
// //                           aria-label="Search"
// //                           className="search "
// //                         />
// //                       </InputGroup>
// //                     </div>
// //                   </Col>

// //                   <Col md={4} lg={1} xl={1}>
// //                     <div>
// //                       <Link to="/search">
// //                         <Button
// //                           style={{
// //                             color: "black",
// //                             backgroundColor: "#FAA81D",
// //                             border: "none",
// //                             width: "100%",
// //                           }}
// //                           className="searchbutton"
// //                         >
// //                           Search
// //                         </Button>
// //                       </Link>
// //                     </div>
// //                   </Col>
// //                 </Row>
// //               </Nav>
// //             </div>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>
// //     </div>
// //   );
// // }

// // export default Navigation;


// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// /* import addMonths from 'date-fns/addMonths';
// import format from 'date-fns/format'; */

// import {
//   Nav,
//   Navbar,
//   Container,
//   InputGroup,
//   FormControl,
//   Form,
//   Button,
//   Row,
//   Col,
// } from "react-bootstrap";
// import { useEffect } from "react";

// function Navigation() {
//   const [userData, setuserData] = useState( {
//     technology: '',
//     level: '',
//     fromDate: '',
//     toDate: "",
//     search:'',
//   })
//   const [fromDatee, setfromDate] = useState( false );
//   //const [toDate, settoDate] = useState( false );
//   const [searchh, setsearch] = useState(false)
//   const updateUserData = e => {
//     setuserData( {
//       ...userData,
//       [e.target.name]: e.target.value,
//     } );
//   };
  
//   const submitSearch = e => {
//     if(searchh||fromDatee){
//       e.preventDefault();
//     }
    
//     const { fromDate, toDate, technology, level,search } = userData;
//     if ( technology === "" && level === ""  && search === "" ) {
//       setsearch( true )
//       //document.getElementById( 'search' ).style.border = '1px solid red';
//     }
//    else if( technology !== "" || level !== ""){
//       setsearch( false )
//       //document.getElementById( 'search' ).style.border = '1px solid green';
//     } else {
//       setsearch( false )
//       //document.getElementById( 'search' ).style.border = '1px solid green';
      
//     }
    
//     if ( fromDate > toDate ) {
//       setfromDate( true )
//       //document.getElementById('fdate').style.border='1px solid red'
//     } else {
//       setfromDate( false )
//       //document.getElementById('fdate').style.border='1px solid green'
//     }
//   }
   
  

  
//   return (
//     <div style={{ position: "sticky" }}>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="light"
//         variant="light"
//         id="tobesticked"
//       >
//         <Container fluid >
//           <Navbar.Brand
//             className="logo"
//             style={{ marginRight: "40px", marginLeft: "20px", width: "197px" }}
//           >
//             <Link to="/">
//               <img
//                 src="assets/logo2.png"
//                 className="image"
//                 height="45px"
//                 width="170px"
//                 alt="image"
//               />
//             </Link>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <div className="" style={{}}>
//               <Nav className="me-auto">
//                 <Row className="g-4" xs={1} sm={2} md={4} lg={12} xl={12}>
//                   <Col md={3} lg={2}>
//                     <div className="tech">
//                       <Form.Select
//                         aria-label="Default select example"
//                         variant=""
//                         name="technology"
//                         value={ userData.technology }
//                         onChange={updateUserData}
//                         id="dropdown-basic"
//                         className="technol"
//                       >
//                         <option value="" disabled selected hidden>
//                           Technology
//                         </option>
//                         <option value="reactjs">React JS</option>
//                         <option value="vuejs">Vue Js</option>
//                         <option value="angular">Angular</option>
//                         <option value="javascript">JavaScript</option>
//                         <option value="mongodb">MongoDB</option>
//                       </Form.Select>
//                     </div>
//                   </Col>
//                   <Col md={3} lg={2}>
//                     <div className="Linktech">
//                       <Form.Select
//                         aria-label="Default select example"
//                         variant=""
//                         name="level"
//                         value={ userData.level }
//                         onChange={updateUserData}
//                         id="dropdown-basic"
//                         className="linksize"
//                       >
//                         <option value="" disabled selected hidden>
//                           LEVEL
//                         </option>
//                         <option value="1">Easy</option>
//                       <option value="2">Intermediate</option>
//                       <option value="3">Advanced</option>
//                       </Form.Select>
//                     </div>
//                   </Col>

//                   <Col md={3} lg={2}>
//                     <div className="formdate">
//                       <Form.Control
//                         type="text"
//                         name="fromDate"
//                         id="fdate"
//                         value={ userData.fromDate }
//                         onChange={updateUserData}
//                         placeholder="From Date"
//                         onFocus={(e) => (e.target.type = "date")}
//                       />
//                     </div>
//                     {fromDatee && (
//               <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
//                 from date should not be greater than to-date
//               </p>
//             )}
//                   </Col>
//                   <Col md={3} lg={2}>
//                     <div className="todate">
//                       <Form.Control
//                         type="text"
//                         name="toDate"
//                         value={ userData.toDate }
//                         onChange={updateUserData}
//                         placeholder="To Date"
//                         onFocus={(e) => (e.target.type = "date")}
//                       />
//                     </div>
//                     {/* {toDate && (
//               <p className="text-danger" >
//                 from date should not be greater than to date
//               </p>
//             )} */}
//                   </Col>

//                   <Col md={12} lg={3} xl={3}>
//                     <div>
                    
//                       <InputGroup   >
//                         <FormControl
//                           type="text"
//                           name="search"
//                           id="search"
//                           value={ userData.search }
//                           onChange={updateUserData}
//                           placeholder="Search Questions"
//                           aria-label="Search"
//                           className="search "
//                         />
//                         <div className="search-icon" style={ {
//                           position: 'absolute',
//                           right: '7px',
//                           top: '8px',
//                           zIndex:'9999'
//                         }}>
//                           < i class="fas fa-search" />
//                         </div>
//                       </InputGroup>
//                     </div>
//                     {searchh && (
//               <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
//                 please enter the search
//               </p>
//             )}
//                   </Col>

//                   <Col md={6} lg={1} xl={1}>
//                     <div>
//                       {
//                         (!fromDatee || !searchh)? <Link to="/search">
//                         <Button
//                           onClick={submitSearch}
//                           style={{
//                             color: "white",
//                             backgroundColor: "#FAA81D",
//                             border: "none",
//                             width: "68px",
//                           }}
//                           className="searchbutton"
                      
//                         >
//                           Search
//                         </Button>
//                       </Link>:
//                        <Link to="/">
//                        <Button
//                          onClick={submitSearch}
//                          style={{
//                            color: "white",
//                            backgroundColor: "#FAA81D",
//                            border: "none",
                       
//                          }}
//                          className="searchbutton"
                     
//                        >
//                          Search
//                        </Button>
//                      </Link>
//                       }
                     
//                     </div>
//                   </Col>
//                 </Row>
//               </Nav>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format'; */

import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useEffect } from "react";
import { withRouter } from 'react-router-dom'

function Navigation(props) {
  const [userData, setuserData] = useState( {
    technology: '',
    level: '',
    fromDate: '',
    toDate: "",
    search:'',
  })
  // const [fromDatee, setfromDate] = useState( false );
  //const [toDate, settoDate] = useState( false );
  // const [searchh, setsearch] = useState(false)

  //error-handling states
  const [techErr, settechErr] = useState(false)
  const [levelErr, setlevelErr] = useState(false)
  const [fromDateErr, setfromDateErr] = useState(false)
  const [toDateErr, settoDateErr] = useState(false)
  const [fromDateToDateErr, setfromDateToDateErr] = useState(false)
  const [searchErr, setsearchErr] = useState(false)
  const [count, setcount] = useState(0)

  const [routable, setroutable] = useState(false)
  const [finalized, setfinalized] = useState(false)
  const updateUserData = e => {
    setuserData( {
      ...userData,
      [e.target.name]: e.target.value,
    } );
  };
  
  const submitSearch = e => {
    //e.preventDefault();
    const { technology, level, fromDate, toDate, search } = userData;
  //   if ( technology === "" && level === ""  && search === "" ) {
  //     setsearch( true )
  //     //document.getElementById( 'search' ).style.border = '1px solid red';
  //   }
  //  else if( technology !== "" || level !== "" ){
  //     setsearch( false )
  //     //document.getElementById( 'search' ).style.border = '1px solid green';
  //   } else {
  //     setsearch( false )
  //     //document.getElementById( 'search' ).style.border = '1px solid green';
      
  //   }
    
  //   if ( fromDate > toDate ) {
  //     setfromDate(true)
  //     //document.getElementById('fdate').style.border='1px solid red'
  //   } else {
  //     setfromDate(false)
  //     //document.getElementById('fdate').style.border='1px solid green'
  //   }


  const validateTech=(technology)=>{
    if(technology){
      settechErr(false)
      return true
    }else{
      return false
    }
    
  }
  const validateLevel=(level)=>{
    if(level){
      setlevelErr(false)
      return true
    }else{
      return false
    }
  }
    
  // const validateFromDate=(fromDate)=>{
  //   if(fromDate){
  //     setfromDateErr(false)
  //     return true
  //   }else{
  //     setfromDateErr(true)
  //     return false
  //   }
  // }
  // const validateToDate=(toDate)=>{
  //   if(toDate){
  //     settoDateErr(false)
  //     return true
  //   }else{
  //     settoDateErr(true)
  //     return false
  //   }
  // }

  const validatefromDateToDate=(fromDate,toDate)=>{
    setfromDateErr(false)
    settoDateErr(false)
    setfromDateToDateErr(false)
    if(fromDate||toDate){
      console.log("any date entered");
      if(fromDate&&toDate){
        console.log("both date entered");
        
        if(fromDate>toDate){
          console.log("from-date should not be greater than to-date");
          setfromDateToDateErr(true)
        }else{
          console.log("all good");
          
          return true
        }
      }else if(fromDate){
        console.log("from-date is present");
        settoDateErr(true)
        
      }else{
        console.log("to-date is present");
        setfromDateErr(true)
        
      }
    }else{
      console.log("both date empty");
      setfromDateErr(true)
      settoDateErr(true)
      setfromDateToDateErr(false)
      return false
    }
    return false
  }
  const techDecided=validateTech(technology)
  const levelDecided=validateLevel(level)
  // const fromDateDecided=validateFromDate(fromDate)
  // const toDateDecided=validateToDate(toDate)
  const fromDateToDateDecided=validatefromDateToDate(fromDate,toDate)

  const validateSearch=(search)=>{
    setfinalized(false)
    if(techDecided||levelDecided||fromDateToDateDecided){
      return true
    }else{
      setsearchErr(false)
    if(search){
      setsearchErr(false)
      return true
    }else{
      setsearchErr(true)
      return false
  }
    }
    
  }

  setfinalized(validateSearch(search))
  let countCopy=count
  setcount(countCopy+1)
  
}
   useEffect(()=>{
     if(count||(count>=0 && finalized)){
      if(searchErr===false){
        
        props.history.push("/search")
          setroutable(true)
          
        }else{
          setroutable(false)
          props.history.push("/")
        }
       }
     }
     
      
    
   ,[count])
  

  
  return (
    <div style={{ position: "sticky" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        id="tobesticked"
      >
        <Container fluid >
          <Navbar.Brand
            className="logo"
            style={{ marginRight: "40px", marginLeft: "20px", width: "197px" }}
          >
            <Link to="/">
              <img
                src="assets/logo2.png"
                className="image"
                height="45px"
                width="170px"
                alt="image"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="" style={{}}>
              <Nav className="me-auto">
                <Row className="g-5" xs={1} sm={2} md={4} lg={12} xl={12}>
                  <Col md={3} lg={2}>
                    <div className="tech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        name="technology"
                        value={ userData.technology }
                        onChange={updateUserData}
                        id="dropdown-basic"
                        className="technol p-2"
                      >
                        <option value="" disabled selected hidden>
                          Technology
                        </option>
                        <option value="reactjs">React JS</option>
                        <option value="vuejs">Vue Js</option>
                        <option value="angular">Angular</option>
                        <option value="javascript">JavaScript</option>
                        <option value="mongodb">MongoDB</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={3} lg={2}>
                    <div className="Linktech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        name="level"
                        value={ userData.level }
                        onChange={updateUserData}
                        id="dropdown-basic"
                        className="linksize p-2"
                      >
                        <option value="" disabled selected hidden>
                          LEVEL
                        </option>
                        <option value="1">Easy</option>
                      <option value="2">Intermediate</option>
                      <option value="3">Advanced</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={3} lg={2}>
                    <div className="formdate ">
                      <Form.Control
                        type="text"
                        name="fromDate"
                        id="fdate"
                        value={ userData.fromDate }
                        onChange={updateUserData}
                        placeholder="From Date"
                        onFocus={(e) => (e.target.type = "date")}
                        className="p-2"
                      />
                    </div>
                    {fromDateErr && (
              <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
                from-date is empty
              </p>
            )}
            {
              fromDateToDateErr &&(
                <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
                from-date should be lesser than to-date
              </p>
              )
            }
                  </Col>
                  <Col md={3} lg={2}>
                    <div className="todate">
                      <Form.Control
                        type="text"
                        name="toDate"
                        value={ userData.toDate }
                        onChange={updateUserData}
                        placeholder="To Date"
                        onFocus={(e) => (e.target.type = "date")}
                        className="p-2"
                      />
                    </div>
                    {toDateErr && (
              <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
                to-date is empty
              </p>
            )}
            {
              fromDateToDateErr &&(
                <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
                to-date should be greater than from-date
              </p>
              )
            }
                  </Col>

                  <Col md={12} lg={3} xl={3}>
                    <div>
                    
                      <InputGroup>
                        <FormControl
                          type="text"
                          name="search"
                          id="search"
                          value={ userData.search }
                          onChange={updateUserData}
                          placeholder="Search Questions"
                          aria-label="Search"
                          className="search p-2"
                        />
                        <div className="search-icon" style={ {
                          position: 'absolute',
                          right: '7px',
                          top: '8px',
                          zIndex:'9999'
                        }}>
                          < i class="fas fa-search" />
                        </div>
                      </InputGroup>
                    </div>
                    {searchErr && (
              <p className="text-danger" style={{fontSize:'8px',marginBottom:'-13px'}} >
                please enter the search field
              </p>
            )}
                  </Col>
                  
                        
                  <Col md={4} lg={1} xl={1}>
                    <div>
                      {routable?
                      <Link to="/search" >
                        <Button
                          onClick={submitSearch}
                          style={{
                            color: "white",
                            backgroundColor: "#FAA81D",
                            border: "none",
                            width: "60px",
                            textAlign:"center",
                            paddingLeft:'8px',
                            margin:'0 -9px'
                          }}
                          className="searchbutton "
                          
                        >
                          Search
                        </Button>
                      </Link>
                      :
                      <Link to="/" >
                        <Button
                          onClick={submitSearch}
                          style={{
                            color: "white",
                            backgroundColor: "#FAA81D",
                            border: "none",
                            width: "60px",
                            textAlign:"center",
                            paddingLeft:'8px',
                            margin:'0 -9px'
                          }}
                          className="searchbutton"
                          
                        >
                          Search
                        </Button>
                      </Link>}
                    </div>
                  </Col>
                  
                </Row>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation)
