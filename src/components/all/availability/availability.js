import view from '../../img/slide-33.jpg'
import './availability.css'
function Availability() {
    return(
        <div className='ava'>
        <img src={view} alt='view' className='view' />
        <div className='availability'>
            <label htmlFor="arrival">
                ARRIVAL DATE
            <input type="text" placeholder="Arrival Date" onFocus={(e) => {
              return  e.target.type = 'date'
            }} />
             </label>
            <label htmlFor="departure">
                DEPARTURE DATE
            <input type="text" name="departure" placeholder='Dept Date' onFocus={(e) => {
              return  e.target.type = 'date'
            }} />
            </label>
            <label htmlFor="adults">
                ADULTS
            <select name="adult" id='select'>
                <option value="choose" disabled selected hidden>Choose Adult</option>
                <option value="1">1 ADULT</option>
                <option value="2">2 ADULTS</option>
                <option value="3">3 ADULTS</option>
            </select>
            </label>
            <label htmlFor="adults">
                CHILDREN
            <select name="children" id='select'>
                <option value="choose" disabled selected hidden>Choose Children</option>
                <option value="1">1 CHILD</option>
                <option value="2">2 CHILDREN</option>
                <option value="3">3 CHILDREN</option>
            </select>
            </label>
        </div>
        <div className='btn'><button>CHECK AVAILABILITY</button></div>
        </div>
    )
}
export default Availability;