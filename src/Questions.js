import React from 'react'
import {useState} from 'react'
import plus from './mentorFolder/assets/images/icon-plus.svg'
import minus from './mentorFolder/assets/images/icon-minus.svg'
import {data} from './Data'

const Questions = ({question, answer, index}) => {
  const [accordion, setAccordion] = useState('accordionBox closed')
  const [openClosed, setOpenClosed] = useState(false)

  const logic = () => {
    setOpenClosed(!openClosed)
    return openClosed ? setAccordion('accordionBox closed') : setAccordion('accordionBox open')
  }
  return (
    <div className={openClosed ? "qnaBox qnaBoxOpen" : "qnaBox qnaBoxClosed"}>
      <div className="qBox">
        <p onClick={logic}>{question}</p>
        <button onKeyDown={e => e.key === "Enter" && logic()} autoFocus={data.indexOf(index) === 0}>
          <img src={openClosed ? minus : plus} alt="plus-minus-icon" onClick={logic} />
        </button>
      </div>

      <div className={accordion}>
          <p className="comment">{answer}</p>
      </div>

    </div>

  )
}

export default Questions