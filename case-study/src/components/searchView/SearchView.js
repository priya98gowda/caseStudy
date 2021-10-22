/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Pagination } from 'react-bootstrap'
import Posts from './pagination/Posts'
import Pagination from './pagination/Pagination'
import './SearchView.css'



function SearchView() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)
  

  return (
   <div className="container mt-5">
      
      <Posts posts={currentPosts}/> 
      <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default SearchView
 */
import { Card } from 'react-bootstrap'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Pagination from 'react-responsive-pagination'
import ReactPaginate from 'react-paginate';
import './SearchView.css';
function SearchView() {
  
  const data = [{

    question: '1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '2. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '3. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '4. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '5. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '6. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '7. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '8. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '9. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '10. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '11. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '12. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '13. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '14. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '15. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '16. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '17. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '18. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '19. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '20. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '21. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '22. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '23. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '24. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '25. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '26. sunt aut facere repellat provident occaecati excepturi optio reprehenderit  ',
    answer: ' It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. Most web browsers have a dedicated JavaScript engine to execute the code on the users  ',

  },
  {

    question: '27. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '28. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '29. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  },
  {

    question: '30. sunt aut facere repellat provident occaecati excepturi optio reprehenderit ',
    answer: ' quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',

  }]

  const [pageNumber, setpageNumber] = useState(0)


  const usersPerPage = 3
  const pageVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(data.length / usersPerPage)

  const changePage = ({selected} ) => {
  
    setpageNumber(selected);
    
  };
  const displayUsers = data.slice(pageVisited, pageVisited + usersPerPage)
  .map((oneQuestion ,index) => {

    return <div  id='body'>
      <ul className="showList m-0">
        {/* <div> */}
          <Card xs={3} md={6} ls={3}>

            <Card.Body className="" >
              <blockquote className="blockquote ">
                <li id="font"><b>{oneQuestion.question}</b></li>
                <li className="ans">{oneQuestion.answer}</li>

              </blockquote>
              {/* <i class="fas fa-check" id="icon"></i> */}

            </Card.Body>
          </Card>
        {/* </div> */}

      </ul>
      
    </div>
    

  })
  return (
     

       <div className="App" >
       {displayUsers}
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        PageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
        </div>
      


        
  )
}

export default SearchView