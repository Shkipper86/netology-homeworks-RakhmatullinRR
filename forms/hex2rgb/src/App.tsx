
import { useState } from 'react'
import './App.css'

function App() {

type colors = {
  hexColor: string,
  rgbColor: string | undefined
}

  const [colorValue, setColorValue] = useState<colors>(
    {
      hexColor: '#',
      rgbColor: undefined
    }
  )

  const convert = (code: string) => {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(code);
    return res
      ? `rgb(${parseInt(res[1], 16)}, ${parseInt(res[2], 16)}, ${parseInt(res[3], 16)})`          
      : `Ошибка!`;
  }

  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    let colorString = e.target.value    
    e.target.value.length == 0 && (colorString = '#')

    setColorValue({
      hexColor: `${colorString}`,
      rgbColor: convert(e.target.value) 
    })

  }

  return (
    <div
      style={
        colorValue?.rgbColor === "Ошибка!" && colorValue.hexColor.length == 7 
          ? { backgroundColor: `#e94b35` }
          : colorValue?.rgbColor === "Ошибка!" && colorValue.hexColor.length < 7 
          ? { backgroundColor: '#fff'}
          : { backgroundColor: `${colorValue?.hexColor}` }
      }
    >
      <form className="myForm">
        <input
          type="text"
          value={colorValue?.hexColor}
          onChange={(e) => changeColor(e)}
          className="hexInput"
          maxLength={7}
        />
        <input
          type="text"
          className="rgbInput"
          style={
            colorValue?.rgbColor === "Ошибка!" && colorValue.hexColor.length === 7
          ? { backgroundColor: `#80291e` }
          : colorValue?.rgbColor === "Ошибка!" && colorValue.hexColor.length < 7
          ? { backgroundColor: `#fff` }
          : { backgroundColor: `${colorValue?.rgbColor}` }}
          value={
              colorValue?.rgbColor === "Ошибка!" && colorValue.hexColor.length < 7
            ? ''
            : colorValue?.rgbColor
          }
          disabled
        />
      </form>
    </div>
  );
}

export default App
