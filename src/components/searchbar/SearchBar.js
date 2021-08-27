import React, {useState} from "react"
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import skills from '../skills'


function SearchBar(){
  const [keyword, setKeyword] = useState("")
  const [selector, setSelector] = useState("android")
  const [localisation, setLocalisation] = useState("qwe")
  const [active, setActive] = useState(false)

  return(
    <Container>
        <div>
          <label htmlFor="keyword">
            <BiSearch />
          </label>
          <input id='keyword' type="text" placeholder='Mot-clés' value={keyword} name='keyword' onChange={e => setKeyword(e.target.value)}/>
        </div>

      <div onClick={e => setActive(!active)}>
          <input type="text" value={selector} name='selector' />
          <div className={ `scrollSelector ${active&&'active'}` }>
            { skills.map(e => {
              return <div key={e} onClick={i=> setSelector(e)}>{e}</div>
              })
            }
          </div>
        </div>

        <div>
          <input type="text" onChange={e=>setLocalisation(e.target.value)} value={localisation} name="localisation" />
        </div>

        <button> chercher </button>
    </Container>
    )
}
const Container = styled.form`
  display:flex;
  align-items:start;
  height:2.5em;
  background-color: rgb(245,246,248);
  padding:20px;
  box-shadow:0 0 12px rgba(0,0,0,.1);
  gap:.5em;


  label{
    display:flex;
    margin-left:.5em;
  }

  input{
    display:block;
    border:none;
    background-color:transparent;
    margin-left:.5em;
    outline:none;
    height:100%;
    font-size:16px;
    height:2em;
  }

  &>div{
    display:flex;
    align-items:center;

    background-color:white;
          z-index:1;

    border: solid 1px rgb(210,210,210);
    &:nth-of-type(2){
      flex-direction:column;
      .scrollSelector{
        display:none;
        &.active{
          display:block;
          width:100%;
          z-index:2;

          div:hover{
            background:pink;
          }

        }
      }
    }

  }
`


export default SearchBar
