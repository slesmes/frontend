import '../styles/principal.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Principal() {

    return (
        <main className="main">
            <aside className="aside">
                <div className="schedule-section">
                    <label>Horario</label>
                    <div className="time-selection">
                        <label>De</label>
                        <select>
                            <option value="11:00 PM">11:00 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                        </select>
                        <label> A las</label>
                        <select>
                            <option value="11:59 PM">11:59 PM</option>
                            <option value="10:59 PM">10:59 PM</option>
                        </select>
                    </div>
                </div>
                <div className="date-section">
                    <label>Día</label>
                    <Calendar className="custom-calendar" />
                </div>
            </aside>
            <div className="principal">
                this is the principal content
            </div>
        </main>
    )
}