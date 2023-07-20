import './BookPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { data } from "./Books_data"
import Books from './Books';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Facets_container from './Facets_container';


function BookPage() {

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(data.map(item => item[name]))]
    return values.map(value => ({ 'name': value, 'checked': false }))
  }

  // Initial state
  const [state, setState] = useState({
    all_books: data,
    shown_books: data,
    facets: {
      Type: build_categorical_facet_values('Type'),
      Genre: build_categorical_facet_values('Genre')
    }
  })


  //Updates state.shown_books whenever state.facets changes
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })

    // If there are no facets selected, show all books
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_books: state.all_books })
      return
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all books and all active facets
    // Keep only the books that match the active facets
    const to_show = state.all_books.map(book =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(book[name])).filter(Boolean).length == number_of_active_facets ? book : undefined
    ).filter(Boolean)

    setState({ ...state, shown_books: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  // Function to pass down to the Facet_value component to modify the state in this component.
  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name == value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  return (
    <div>
      <Row>
        <Col className='border-end' md={3}>
          <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        </Col>
        <Col>
          <Container className='d-flex flex-wrap'>
            {state.shown_books.map(x => <Books {...x} />)}
          </Container>
        </Col>
      </Row>
      
    </div>
  );
}

export default BookPage;