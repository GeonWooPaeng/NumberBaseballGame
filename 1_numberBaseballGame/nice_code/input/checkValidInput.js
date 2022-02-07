function alerInvalidInput(info) {
    if (info === 'NaN') {
        alert('잘못 된 입력입니다.! 숫자만 입력 가능합니다.! 예)139');
    } else if (info === 'inValidLength') {
        alert('잘못 된 입력입니다. 숫자는 3개입력하시오');
    } else if (info === 'duplicae') {
        alert('잘못 된 입력입니다. 중복된 숫자 입력');
    } else if (info === 'inValidScope') {
        alert('잘못 된 입력입니다. 1 ~ 9 사이의 수만 입력하시오');
    }
    return false;
}

function checkValidLength(userInputNumbers) {
    if (userInputNumbers.length === 3) {
        return true;
    }
    return false;
}

function checkValidScope(number) {
    if (1 <= number && number <= 9) {
        return true;
    }
    return false;
}

function checkDuplicate(userInputNumbers) {
    if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
        return true;
    }
    return false;
}

function isNumber(text) {
    if (typeof text === 'number') {
        return true;
    }
    return false;
}

function checkInputType(userInputNumbers) {
    if (userInputNumbers.every(isNumber)) {
        return true;
    }
    return false;
}

export default function checkValidInput(userInputNumbers) {
    if (!checkInputType(userInputNumbers)) {
      return alertInvalidInput('NaN');
    }
    if (!checkValidLength(userInputNumbers)) {
      return alertInvalidInput('inValidLength');
    }
    if (!checkDuplicate(userInputNumbers)) {
      return alertInvalidInput('duplicate');
    }
    if (!userInputNumbers.every(checkValidScope)) {
      return alertInvalidInput('inValidScope');
    }
    return true;
  }