

export function getDate(date) {

  let nowMonth = date.getMonth() + 1

  let strDate = date.getDate()

  if (nowMonth >= 1 && nowMonth <= 9) 
    nowMonth = `0${  nowMonth}`
    

  if (strDate >= 0 && strDate <= 9) 
    strDate = `0${  strDate}`
    

  return `${date.getFullYear()  }年${  nowMonth  }月${  strDate  }日`

} 
