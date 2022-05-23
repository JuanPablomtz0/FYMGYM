const Usuarios = ({ text, onClick }) => {
    return(
        <form className='addUser'>
            <div className='form-control'>
                <label>Nombre(s)</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            <div className='form-control'>
                <label>Apellido Paterno</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            <div className='form-control'>
                <label>Apellido Materno</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            <div className='form-control'>
                <label>Fecha de Nacimiento</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            <div className='form-control'>
                <label>Telefono</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            <div className='form-control'>
                <label>Correo</label>
                <input type='text' placeholder= 'Obligatorio'></input>
            </div>
            
        </form>
        /*<form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                type='text'
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                type='text'
                placeholder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
        </form>*/
    )
}

export default Usuarios