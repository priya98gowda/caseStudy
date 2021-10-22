import React, { useState } from "react";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  Container,
  Button,

} from "react-bootstrap";
import DeleteConfirmation from "../modal/DeleteConfirmation";
import SuccessModal from "../modal/SuccessModal";
//import Questions from "./Questions";
import "./UploadQuestion.css";

function UploadQuestion() {
  //state to validate candiadateName
  const [candiadateNameError, setcandiadateNameError] = useState(false);
  const [candiadateNameCharError, setcandiadateCharNameError] = useState(false);
  //state to validate dpt
  const [depatmentError, setdepatmentError] = useState(false);

  //state to validate clientName
  const [clientNameError, setclientNameError] = useState(false);
  const [clientNameCharError, setclientNameCharError] = useState(false);

  //state to validate techonlogy
  const [technologyError, settechnologyError] = useState(false);
  //state to validate questions
  const [questionError, setquestionError] = useState("");

  //state to validation interview level
  const [difficultyLevelError, setdifficultyLevelError] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [delIndex, setdelIndex] = useState()
  const [isShowDelete, setisShowDelete] = useState(false)
  const [showSuccessMessage, setshowSuccessMessage] = useState(false)

  //state to validate question
  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
    questions: [],
  });

 /*  const [isSaved, setisSaved] = useState(false);
  const [isAdded, setisAdded] = useState(false); */
  /* const [timesClicked,settimesClicked]=useState(0) */
  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
      difficultyLevel: "",
    },
  ]);

  const updateuserData = (event) => {
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value,
    });
  };

  const updatequestionData = (event, index) => {
    const questionsCopy = [...questions];
    const questionsCopyObjAtIndex = {
      ...questions[index],
      [event.target.name]: event.target.value,
    };
    questionsCopy[index] = questionsCopyObjAtIndex;
    setQuestions(questionsCopy);
    console.log(questions);
  };

  const validateQ = (index) => {
    //target the perticular indexed object and get the key:question
    const particularQ = questions[index].question;
    if (particularQ) {
      //document.getElementById("question").style.border = "1px solid green";
      return true;
    } else {
      setquestionError("Please enter the question");
     // document.getElementById("question").style.border = "1px solid red";
    }
    return false;
  };
  const validateD = (index) => {
    //target the perticular indexed object and get the key:question
    const particularD = questions[index].difficultyLevel;
    if (particularD) {
      //document.getElementById("difflevel").style.border = "1px solid green";
      return true;
    } else {
      setdifficultyLevelError("Please enter the difficulty Level");
      //document.getElementById("difflevel").style.border = "1px solid red";
    }
    return false;
  };

  const addQuestion = (index) => {
    //validate question before pushing
    const questionDecided = validateQ(index);
    const diffLevelDecided = validateD(index);
    if (questionDecided && diffLevelDecided) {
      const questionsCopy = [...questions];

      const emptyObject = {
        question: "",
        answer: "",
        difficultyLevel: "",
      };
      questionsCopy.push(emptyObject);
      setQuestions(questionsCopy);
      console.log(questions);
    }

    questions.map((value) => {
      console.log("one-by-one question -", value);
    });
    console.log("questions -", questions);
  };

  /* const handleDelete = () => {
    setlineExe(true);
    console.log(lineExe);
    setShow(false);
  }; */
  const gethandleClose=()=>{
    setshowSuccessMessage(false)
  }
  function validatecandidateName(candidateName){
    if (candidateName) {
      setcandiadateNameError(false);
      //document.getElementById("candidateName").style.border = "1px solid green";
      if (candidateName.search(/[^a-zA-Z]+/) === -1) {
        setcandiadateCharNameError(false);
       /*  document.getElementById("candidateName").style.border =
          "1px solid green"; */
          return true
      } else {
        setcandiadateCharNameError(true);
        // document.getElementById("candidateName").style.border = "1px solid red";
      }
    } else {
      setcandiadateCharNameError(false);
      setcandiadateNameError(true);
      // document.getElementById("candidateName").style.border = "1px solid red";
    }
    return false
  }
  function validatedepartment(department){
    if (department == "") {
      setdepatmentError(true);
      return false
      //document.getElementById("dept").style.border = "1px solid red";
    } else {
      setdepatmentError(false);
      //document.getElementById("dept").style.border = "1px solid green";
    }
    return true
  }
  function validateclientName(clientName){
    if (clientName) {
      setclientNameError(false);
      //document.getElementById("clientName").style.border = "1px solid green";
      if (clientName.search(/[^a-zA-Z]+/) === -1) {
        setclientNameCharError(false);
        return true
        //document.getElementById("clientName").style.border = "1px solid green";
      } else {
        setclientNameCharError(true);
        //document.getElementById("clientName").style.border = "1px solid red";
      }
    } else {
      setclientNameCharError(false);
      setclientNameError(true);
      return false
      //document.getElementById("clientName").style.border = "1px solid red";
    }
  }
  function validatetechnology(technology){
    if (technology == "") {
      settechnologyError(true);
      return false
      //document.getElementById("technology").style.border = "1px solid red";
    } else {
      settechnologyError(false);
      return true
      //document.getElementById("technology").style.border = "1px solid green";
    }
  }
  const saveData = (event) => {
    const finalQuestionsCopy = [...questions];
    //if all the fields are valied, then only set the 'setprimaryInfo' state to 'finalQuestionsCopy'
    //validated 'candidateName', 'department','clientName',and 'technology'
    let { candidateName, department, clientName, technology } = primaryInfo;
    

    //Validation for dpt
    
    //validation for Client name
   

    //validation for techonology
    
    
    //const top4FiledsDecided=validateTop4Fields(candidateName,department,clientName,technology)
    //validated 'questions[index]', 'difficultyLevel'
    //validateQuestionsWrtIndex(index)
    const validateAllQuestionsAndDiffL = () => {
      let count = 0;
      questions.forEach((value,index) => {
        validateQ(index);
        validateD(index);
        if (!value.question) {
          count++;
        }
        if(!value.difficultyLevel){
          count++
        }
      });
      if (count > 0) {
        return false;
      } else {
        return true;
      }
    };
    const candidateNameDecided=validatecandidateName(candidateName)
    const departmentDecided=validatedepartment(department)
    const clientNameDecided=validateclientName(clientName)
    const technologyDecided=validatetechnology(technology)
    const allQuestionsDecided = validateAllQuestionsAndDiffL();
    //const allQuestionsDecided=validateAllQuestions()//returns boolean
    if (
      candidateNameDecided&&
      departmentDecided&&
      clientNameDecided&&
      technologyDecided&&
        allQuestionsDecided
      
    ) {
      setprimaryInfo({
        ...primaryInfo,
        questions: finalQuestionsCopy,
      });
      setshowSuccessMessage(true)
      setprimaryInfo({
        candidateName: "",
    department: "",
    clientName: "",
    technology: "",
    questions: []
      })
      setQuestions([{
        question: "",
        answer: "",
        difficultyLevel: "",
      }])
  //     const [questionError, setquestionError] = useState("");

  // //state to validation interview level
  // const [difficultyLevelError, setdifficultyLevelError] = useState("");
  setquestionError("")
  setdifficultyLevelError("")
    }


    // primaryInfo.questions=(finalQuestionsCopy)
    // setisSaved(true);
    /* console.log("primaryInfo.questions -", primaryInfo.questions);
    console.log("The data to be sent to back -", primaryInfo); */
  };
  const islast = (index) => {
    return index === questions.length - 1;
  };
  // Modal
// ------------------------------------------------------------------------------------




  

  /* const handleDelete =()=>{
    setval(true)
    setShow(false);
  } */

  // const handleShow = () => setShow(true);
  //here we utilize the 'index' from the Modal child to perform changes in the original array  of objects
  const getDeleteDataIndex = (index) => {
    const questionscopy = [...questions];

    questionscopy.splice(index, 1);
    setQuestions(questionscopy);
};



// --------------------------------------------------------------------------------
  return (
    <div className="mainDiv">
      <Container lg={9} className="container1">
        <strong><p className="header">Upload Your Questions</p></strong>
      </Container>

      <Container>
        <Row className="g-3" xs={1} sm={2} md={4}>
          <Col lg={3} id="InputField1">
            <FloatingLabel controlId="floatingInputGrid" label="Candidate Name">
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={primaryInfo.candidateName}
                onChange={updateuserData}
                name="candidateName"
                id="candidateName"
              />
            </FloatingLabel>
            {candiadateNameError && (
              <p className="text-danger" id="errormessage">
                Please enter your Name
              </p>
            )}
            {candiadateNameCharError && (
              <p className="text-danger" id="errorChar">
                {" "}
                only character are allowed
              </p>
            )}
          </Col>
          <Col lg={3} className="InputField2">
            <FloatingLabel controlId="floatingSelectGrid" label="Department">
              <Form.Select
                aria-label="Floating label select example"
                value={primaryInfo.department}
                onChange={updateuserData}
                name="department"
                id="dept"
              >
                <option value="" disabled selected hidden>
                  Select Deprtment
                </option>
                <option value="Tech Team<">Tech Team</option>
                <option value="R&D Team">R&D Team</option>
                <option value="Engineers">Engineers</option>
              </Form.Select>
            </FloatingLabel>
            {depatmentError && (
              <p className="text-danger" id="errormsg">
                Please choose one department
              </p>
            )}
          </Col>
          <Col lg={3} className="InputField3">
            <FloatingLabel controlId="floatingInputGrid" label="Client Name">
              <Form.Control
                type="text"
                placeholder="Enter Your Client Name"
                value={primaryInfo.clientName}
                onChange={updateuserData}
                name="clientName"
                id="clientName"
              />
            </FloatingLabel>
            {clientNameError && (
              <p className="text-danger" id="errormsg">
                Please enter your Client Name
              </p>
            )}
            {clientNameCharError && (
              <p className="text-danger" id="errorChar">
                only character are allowed
              </p>
            )}
          </Col>

          <Col lg={3} className="InputField5">
            <FloatingLabel controlId="floatingSelectGrid" label="Technology">
              <Form.Select
                aria-label="Floating label select example"
                value={primaryInfo.technology}
                onChange={updateuserData}
                name="technology"
                id="technology"
              >
                <option value="" disabled selected hidden>
                  Select Technology
                </option>
                <option value="reactjs">React JS</option>
                <option value="vuejs">Vue Js</option>
                <option value="angular">Angular</option>
                <option value="javascript">JavaScript</option>
                <option value="mongodb">MongoDB</option>
              </Form.Select>
            </FloatingLabel>
            {technologyError && (
              <p className="text-danger" id="errormessage">
                Please select Technology
              </p>
            )}
          </Col>
        </Row>
      </Container>
      
      {questions.map((value, index) => {
        // <Questions key={index} questionsWrtIndex={questions[index].question}/>
        return (
          <div key={index}>
            <br />
            <Container>
              <Row className="g-3">
                <Col lg={9}>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    className="questionbox "
                    label="Question"
                  >
                    <Form.Control
                      id="question"
                      as="textarea"
                      placeholder="Question"
                      style={{ height: "60px" }}
                      value={value.question}
                      onChange={(event) => updatequestionData(event, index)}
                      name="question"
                    />
                  </FloatingLabel>
                  <small className="text-danger" id="qError">
                    {value.question ? "" : questionError}
                  </small>
                </Col>

                <Col lg={3}>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    id="difflevel"
                    label="Difficulty Level"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={value.difficultyLevel}
                      onChange={(event) => updatequestionData(event, index)}
                      name="difficultyLevel"
                      id="cars"
                    >
                      <option value="" disabled selected hidden>
                        Select Level
                      </option>
                      <option value="1">Easy</option>
                      <option value="2">Intermediat</option>
                      <option value="3">Advanced</option>
                    </Form.Select>
                  </FloatingLabel>
                  <small className="text-danger" id="dError">
                    {value.difficultyLevel ? "" : difficultyLevelError}
                  </small>
                </Col>
              </Row>
            </Container>
            
            <Container>
              <Row>
                <Col lg={9}>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    className="answerbox"
                    label="Answer"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Answer"
                      style={{ height: "150px" }}
                      onChange={(event) => updatequestionData(event, index)}
                      value={value.answer}
                      name="answer"
                    />
                  </FloatingLabel>
                </Col>

                <Col lg={3} className="mb-3 mt-3">
                  <Button
                    size="md float-end"
                    id="btn-text-add"
                    active
                    onClick={
                      islast(index)
                        ? () => {
                            addQuestion(index);
                          }
                        : () => {
                          // setShow(true)
                          setdelIndex(index);
                          { setisShowDelete(true) }
                          
                            
                             
                            
                          }
                    }
                  >
                    {islast(index) ? (
                      <button className="btn-icon-plus">
                        <i className="fas fa-plus"></i>
                      </button>
                    ) : (
                      <button className="btn-icon-trash">
                        <i class="fas fa-trash"></i>
                      </button>
                    )}

                    {islast(index) ? (
                      <span className="Addbtn">Add New</span>
                    ) : (
                      <span className="Deletebtn">Delete</span>
                    )}
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
      <Container>
        <Row>
          <Col md={12} className="mb-3">
            <Button size="md" id="btn-text-add1" active onClick={saveData}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
      {isShowDelete && <DeleteConfirmation setisShowDelete={setisShowDelete} delIndex={delIndex} getDeleteDataIndex={getDeleteDataIndex} />}
      {showSuccessMessage&&<SuccessModal showSuccessMessage={showSuccessMessage} gethandleClose={gethandleClose}/>}
    </div>

    // onClick={handleCancel}
  );
}

export default UploadQuestion;
