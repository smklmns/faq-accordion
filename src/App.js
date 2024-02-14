import star from './mentorFolder/assets/images/icon-star.svg'
import Questions from './Questions';
import {data} from './Data'

function App() {
  
  return (
    <div className="App">

      <div className="headingBox">
        <img src={star} alt="icon" />
        <h1>FAQs</h1>
      </div>

      {data.map(index => {
        return (
          <Questions
            key={index.id}
            question={index.question}
            answer={index.answer}
            index={index}
          />
        )
      })}
      
    </div>
  );
}

export default App;
