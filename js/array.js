const Members = ['기우', '상훈', '현미', '화수', '초아'];

// 배열 끝에 요소 추가 
Members.push('덕선');

// 배열 앞에 요소 추가
Members.unshift('미남');

//배열에서 요소의 인덱스 찾기
Members.indexOf('강현');
Members.indexOf('상훈');
Members.lastIndexOf('상훈');

//배열에서 요소 포함 여부 확인
Members.includes('현미');
Members.includes('미소');

// 배열의 앞 요소 지우기
Members.shift('미남'); // unshift 반대

// 배열의 끝 요소 지우기
Members.pop('초아'); //push 반대

// 특정 인덱스 요소 지우기 
Members.splice(2, 2);