function Student({
    sname, 
    course
}){
    // console.log(props);
    return(
        <div>
            <h2>Name: {sname}</h2>
            <h2>Course: {course}</h2>
        </div>
    )
}

export default Student;