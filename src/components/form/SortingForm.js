import React, {} from "react"
import styled from 'styled-components'
import Date from './Date'
import Skill from './Skill'
import color from '../color.js'

function SortingForm(){
  return(
    <Form onSubmit={e=> e.preventDefault()}>
      <Date /> 
      <Skill />


      <details>
        <summary>Salaire proposé</summary>

        <div>
          <input type="checkbox" name="salaire" id="20" />
          <label htmlFor="20">20</label>
        </div>
        <div>
          <input type="checkbox" name="salaire" id="40" />
          <label htmlFor="40">40</label>
        </div>
        <div>
          <input type="checkbox" name="salaire" id="60" />
          <label htmlFor="60">60</label>
        </div>
      </details>
      <details>
        <summary>Expérience</summary>
        <div>
          <input type="radio" name="experience" id="1" />
          <label htmlFor="1">1</label>
        </div>
        <div>
          <input type="radio" name="experience" id="2" />
          <label htmlFor="2">2</label>
        </div>
        <div>
          <input type="radio" name="experience" id="3" />
          <label htmlFor="3">3</label>
        </div>
      </details>
      <details>
        <summary>Domaine de compétence</summary>
        <div>
          <input type="checkbox" name="domaine" id="backend" />
          <label htmlFor="backend">backend</label>
        </div>
        <div>
          <input type="checkbox" name="domaine" id="frontend" />
          <label htmlFor="frontend">frontend</label>
        </div>
        <div>
          <input type="checkbox" name="domaine" id="fullstack" />
          <label htmlFor="fullstack">fullstack</label>
        </div>
        <div>
          <input type="checkbox" name="domaine" id="mobile" />
          <label htmlFor="mobile">mobile</label>
        </div>
      </details>
    </Form>
    )
}

const Form = styled.form`

  display:flex;
  background-color:${color.primary};
  color:white;
  padding:1em;
  flex: 0 0 300px ;
  flex-direction:column;
  details{
    max-height:20px;
    width:100%;
    transition:max-height 1s linear;
    overflow:hidden;
    summary{
      display:flex;
      list-style:none;
      cursor:pointer;

      &::after{
        display:block;
        margin-left:auto;
        content:'+';
      }
      &:hover{
        background-color:rgba(255,255,255,.2);
      }
    }
    div{
      display:flex;
      padding-left:1em;
      gap:1em;
      label{
        width:100%;
      }
      &:hover{
        background-color:rgba(255,255,255,.2);
      }
    }
    &[open]{
      max-height:900px;
      summary::after{
        content:'-';
      }
    }
  }
  input{
    display:block;
  }
`

export default SortingForm
