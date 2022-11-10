/* 
  컴포넌트로 반환하는 JS파일은 대문자로 명명해야 한다
  (함수 컴포넌트도 당연히 첫문자를 대문자로)

  리액트는 소문자로 시작하는 컴포넌트는 DOM태그로 처리한다
  (div, span, ol, li처럼)

  고로 커스텀 컴포넌트 작성 시 대문자로 작성한다 ('L'ogs)
*/

const Logs = (props) => {
  return (
    <>
      <h2>기록</h2>
      <ol>
        {
          props.logs.map((log, index) => {
            return (
              <li key={`${log}_${index}`}>{log}</li>
            )
          })
        }
      </ol>
    </>
  )
}

export default Logs;