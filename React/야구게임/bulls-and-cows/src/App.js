import { useState, useEffect } from 'react'
import './App.css'
import { generateRandomNumber } from './random'
import Logs from './Logs'

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber())
  const [answer, setAnswer] = useState('')
  const [logs, setLogs] = useState([])
  const [isSuccess, setSuccess] = useState(false)

  // 배열에 있는 요소 변경 시 실행, 빈 배열 일 시 1회 실행 후 재실행 x
  useEffect(() => {
    console.log(randomNumber)
  }, [randomNumber])

  const handleAnswerChanged = ((e) => {
    setAnswer(e.target.value)
  })

  const handleSubmit = (e) => {
    // 스트라이크, 볼, 정답 유무
    const answers = answer.split('').map(item => Number(item))

    // 숫자 아닌 경우 체크
    if(answers.some(number => isNaN(number))) {
      alert('숫자만 입력해주세요')
      return;
    }

    // 자릿수 체크
    if (answers.length !== 4) {
      alert('4자리 숫자만 입력해주세요')
      return
    }

    // 중복숫자 체크
    const isDuplicate = answers.some((number) => {
      /*
      [1,2,3,4]
      -> 앞에서 탐색했을 때 index 0
      <- 뒤에서 탐색했을 때 index 0
      [1,1,2,4]
      -> 앞에서 탐색했을 때 index 0 
      <- 뒤에서 탐색했을 때 index 1 
      */
      // 다를 경우 중복숫자로 판단

      return answers.indexOf(number) !== answers.lastIndexOf(number)
    })

    if(isDuplicate) {
      alert('입력 값에 중복이 있어요.')
      return;
    }

    const { strike, ball } = randomNumber.reduce((prev, cur, index) => {
      // 같은 자리에 같은 수가 존재하면 스트라이크 
      if (answers[index] === cur) {
        return {
          ...prev,
          strike: prev.strike + 1
        }
      }

      // 다른 자리에 수가 존재하면 볼 
      if (answers.includes(cur)) {
        return {
          ...prev,
          ball: prev.ball + 1
        }
      }

      return prev;
    }, {
      strike: 0,
      ball: 0
    })

    if (strike === 4) {
      alert('정답입니다!')
      setLogs([...logs, `${answer} (축하합니다, 정답입니다)`])
      setSuccess(true)
      return
    }

    setLogs([...logs, `${answer} (strike): ${strike}, ball: ${ball}`])
  }

  const handleRetry = () => {
    setRandomNumber(generateRandomNumber())
    setAnswer('')
    setLogs([])
    setSuccess(false)
  }

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header"> {
          isSuccess ? `정답: ${answer}` : '----'
        } </header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} disabled={isSuccess}/> 
        {
          isSuccess ? (
            <button onClick={handleRetry}>다시하기</button>
          ) : (
            <button onClick={handleSubmit}>맞춰보기</button>
          )
        }
      </section>
      <Logs logs={logs} />
    </div>
  );
}

export default App;
