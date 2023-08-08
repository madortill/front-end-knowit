import './MainPage.styles.css'

const MainPage = () => {
    return (
      <div className="main-page">
        <span className='section1 section'>
            <div className='white-section1'>
                <h1 className='main-header'>למידה מעולם לא הייתה חדשנית יותר.</h1>
                <p className='small-text'>כנס חדשנות בלמידה 2023</p>
                <button className='sign-btn pointer'>להרשמה</button>
            </div>
            <div className='black-section1'></div>
        </span>
        <span className='section2 section'>
            <div className='white-section2'>
                <div>
                    <div className='slider'></div>
                    <div>
                        <h1 className='header'>KNOW IT?</h1>
                        <p></p>
                    </div>
                </div>
                

        </div>
        </span>
        
      </div>
    );
}
  
export default MainPage;