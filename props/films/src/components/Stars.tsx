import { useEffect, useState } from "react"
import { Star } from "./Star"

export type startCount = { 
    count: number
}

export const Stars = (props: startCount) => {

    const [starCount, setStarCount] = useState<number[]>([])

    const count: number = props.count

    useEffect(()=> {
        count > 0 && count <= 5 
        ? setStarCount(() => {
            const starArr:number[] = []
            for(let i=1; i<=count; i++){
                starArr.push(i)
            }
            return starArr
        })
        : setStarCount([])
    }, [count])

    const filmStars = starCount.map((star) => {
      return (
        <span key={star}>
          <Star />
        </span>
      );
    });

  return (
    <>
        {filmStars}
    </>
  )
}
