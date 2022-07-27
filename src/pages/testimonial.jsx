import styles from './home_style.css'

export default function testimonial(){
    return (
        <>
        <div className= 'hero'>
            <h1>Testimonials</h1>

            <div className='container'>
                <div className='indicator'>
                    <span className='btn active'></span>
                    <span className='btn'></span>
                    <span className='btn'></span>
                </div>
                <div className='testimonial'>
                <div className='slide-row'>
                    <div className='slide-col'>
                        <div className='user-text'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <h3>Jack Frost</h3>
                            <p>FrostyChaos Inc.</p>
                        </div>
                        <div className='user-img'>
                            <img src={dj}/>
                        </div>
                    </div>
                    <div className='slide-col'>
                        <div className='user-text'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <h3>Game Kink 9000</h3>
                            <p>OS Inc.</p>
                        </div>
                        <div className='user-img'>
                            <img src={builder}/>
                        </div>
                    </div>
                    <div className='slide-col'>
                        <div className='user-text'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <h3>Silurian</h3>
                            <p>Comet Corp.</p>
                        </div>
                        <div className='user-img'>
                            <img src={police}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}