import React, {} from "react"
import FormItem from './FormItem'
import InputElement from './InputElement'

function Skill(){
  return(
    <FormItem>
      <summary> Spécialité</summary>
      <InputElement inputType="checkbox" name='skill' target="python">Python</InputElement>
      <InputElement inputType="checkbox" name='skill' target="javascript">Javascript</InputElement>
      <InputElement inputType="checkbox" name='skill' target="php">Php</InputElement>
      <InputElement inputType="checkbox" name='skill' target="net">.Net</InputElement>
      <InputElement inputType="checkbox" name='skill' target="kanban">kanban</InputElement>
      <InputElement inputType="checkbox" name='skill' target="sqlite">SQLite</InputElement>
      <InputElement inputType="checkbox" name='skill' target="pandas">Pandas</InputElement>
      <InputElement inputType="checkbox" name='skill' target="c">C</InputElement>

    </FormItem>
    )
}

export default Skill
