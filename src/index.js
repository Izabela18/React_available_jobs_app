import React from 'react'
import { render } from 'react-dom'
import './Jobs.css'

let vacancyList = [
{"position": "Telecom Engineer", "department": "R&D", "experience": 3},
{"position": "Telecom Technician", "department": "Operations", "experience": 2},
{"position": "Customer Service Representative", "department": "Customer Service", "experience": 1}
]

const Vacancy = ({position, department, experience}) => {
  return (
    <section>
      <h2>Position: {position}</h2>
      <p>Department: {department}</p>
      <p>Experience: {experience}</p>
    </section>
  )
}


const Hiring = ({jobs}) => {
return (
<div>
<p className="info">The Telecom Dots is hiring now. Available vacancies</p>

{jobs.map(
  (job, i) =>
  <Vacancy
    key={i}
    position={job.position}
    department={job.department}
    experience={job.experience} />
)}

</div>
)
}


const NotHiring = () =>
<div>
<p  className="info">The Telecom Dots is not hiring now. <a href="www.spontan_ansokan.com">Click here to leave your CV in our database</a></p>
</div>

class Jobs extends React.Component {

    state = {


      hiring: false,
      nothiring: false


    }

    showVacancy = () => {
  		this.setState(prevState => ({
  			hiring: !prevState.nothiring,
        nothiring: false


  		}))
  	}


    render () {

    return (
      <div className="content_container">


      <h1 >Careers at Telecom Services </h1>
      <button onClick = {this.showVacancy}>
      Check for available vacancies
      </button>
      <div  className="jobs_pop">{this.state.hiring ? <Hiring jobs={vacancyList} /> : ''}
      {this.state.nothiring ? <NotHiring /> :  ''}</div>
      </div>
    )
  }
}

render(
    <Jobs />,
    document.getElementById('root')
)
