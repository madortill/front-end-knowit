import { useRef } from 'react'
import './FrontAnimation.styles.css'
import headphones from '../../media/images/headphones.png'

const FrontAnimation = () => {
    const itemRef1 = useRef();
    const itemRef2 = useRef();
    const itemRef3 = useRef();
    const itemRef4 = useRef();
    const itemRef5 = useRef();
    const ITEMS = [
        {
            "link": headphones,
            "ref": itemRef1
        },
        {
            "link": headphones,
            "ref": itemRef2
        },
        {
            "link": headphones,
            "ref": itemRef3
        },
        {
            "link": headphones,
            "ref": itemRef4
        },
        {
            "link": headphones,
            "ref": itemRef5
        },
    ]


    // const startFloatAnimation = (element) => {
    //     console.log("end");
    //     element.ref.current.style.animation = "floating infinite";
    // }

    return (
      <div className="front-animation">
        {/* element.ref.current.classList.add("floatingAnimation"); element.ref.current.classList.remove(`item${index + 1}`); */}
        
        {ITEMS.map((element, index) => (
            <img src={element.link} key={index} ref={element.ref} onAnimationEnd={() => {element.ref.current.style.animation += `floating${index + 1} 3s ease-in-out infinite`;}} className={`item${index + 1} item`}/>
        ))}
        {/* <div className='item1 item'></div>
        <div className='item2 item'></div>
        <div className='item3 item'></div>
        <div className='item4 item'></div>
        <div className='item5 item'></div> */}
        <div className='cover-objects'></div>
      </div>
    );
}
  
export default FrontAnimation;