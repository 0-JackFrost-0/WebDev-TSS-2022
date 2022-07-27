import styles from './home_style.css'
import dj from "./amogus_dj.jfif"
import builder from "./amogus_builder.png"
import police from "./amongus_pulici.png"

export default function Home(){
    function getData(val){
        console.warn(val)
    }
    return (
        <div>
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
            <div className='news'>
                <h1 style={{ textAlign: "center" }}>Subscribe to Newsletter!</h1>
                <p>Name:</p><input type="text" onChange={getData} />
                <p>Email:</p><input type="text" />
                <p>Room Number:</p><input type="text" />
            </div>
        </div>
        
    )
}