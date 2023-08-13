import './FrontAnimation.styles.css'
import headphones from '../../media/images/headphones.png'

const FrontAnimation = () => {
    const ITEMS = [
        {
            "link": headphones
        },
        {
            "link": headphones
        },
        {
            "link": headphones
        },
        {
            "link": headphones
        },
        {
            "link": headphones
        },
    ]

    return (
      <div className="front-animation">
        
        <div className='cover-objects'></div>
        {ITEMS.map((element, index) => (
            <img src={element.link} key={index} className={`item${index + 1} item`}/>
        ))}
        {/* <div className='item1 item'></div>
        <div className='item2 item'></div>
        <div className='item3 item'></div>
        <div className='item4 item'></div>
        <div className='item5 item'></div> */}
      </div>
    );
}
  
export default FrontAnimation;