import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "./coursesClient";
import { ImEye } from "react-icons/im";
export default function Courses() {
    const navigate = useNavigate()

    const [course, setCourse] = useState<any>({
        _id: new Date().getTime().toString(), name: "", credits: "", university: "", semester:"",grade:"", description: "",
      });  


    const [courses, setCourses] = useState<any[]>([])

    const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
    const [infoPosition, setInfoPosition] = useState<number>(0);

    const showInfoCard = (course: any) => {
        setSelectedCourse(course);
        setInfoPosition(window.scrollY + 200); 
    };

    const fetchAllCourses = async () => {
        try {
          const courses = await client.fetchAllCourses(); 
          setCourses(courses)
        } catch (error) {
          console.error(error);
        }
      };

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
      
        setCourses([ ...courses, newCourse ]);
        
      };

    const updateCourse = async (course_:any) => {

    const courseUp = { ...course, _id:course_._id };

    await client.updateCourse(courseUp);
    setCourses(courses.map((c:any) => {
        if (c._id === courseUp._id) { return courseUp; }
        else { return c; }
    })
    )
    
 ;};

    const [tableView, setTableView]= useState(false)

    const deleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    
        setCourses(courses.filter((course:any) => course._id !== courseId));

    };

    useEffect(() => {
        fetchAllCourses();
    
      }, []);
    return (
        <div id="courses-container" className="mt-3 ms-3">

            <h1>Courses <button className="btn btn-info ms-5" onClick={()=>setTableView((prev:any)=>!prev)}>{tableView ? <>Grid View</> : <>Table View</> }<ImEye className="ms-2 mb-1 fs-5"/></button>

            <button className="btn btn-lg btn-link float-end" onClick={() => navigate("/Rayan/Portfolio")}>Back</button></h1> <hr />

        {selectedCourse && tableView && (
                <div className="alert alert-info w-50" style={{
                    position: "absolute",
                    top: `${infoPosition}px`, 
                    left: "25%",
                    zIndex: 9999,
                }}>
                    <button
                        className="btn-close float-end"
                        onClick={() => setSelectedCourse(null)}
                    ></button>
                    <strong>Course Info ({selectedCourse.name}):</strong> {selectedCourse.description}
                </div>
            )}

            {tableView && <>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>University</th>
                    <th>Semester Taken</th>
                    <th>Level</th>
                    <th>Grade</th>
                    <th></th>
                    
                </tr>
            </thead>

            <tbody>
                {courses && 
                courses.map((c:any)=>(
                    <tr key={c._id}>
                        <td className="wd-course-name text-nowrap">{c.name}</td>
                        <td className="wd-course-credits text-nowrap">{c.credits}</td>
                        <td className="wd-course-university text-nowrap">{c.university}</td>
                        <td className="wd-course-semester text-nowrap">{c.semester}</td>
                        <td className="wd-course-level text-nowrap">{c.level}</td>
                        <td className="wd-course-grade text-nowrap">{c.grade}</td>
                        <td className="wd-course-info text-nowrap info-button-course"><button className="btn" onClick={() => {setSelectedCourse(c); showInfoCard(c)} }>Info</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
            }



            

             {selectedCourse && !tableView && (
                <div className="alert alert-info w-50" style={{
                    position: "absolute",
                    top: `${infoPosition}px`, 
                    left: "25%",
                    zIndex: 9999,
                }}>
                    <button
                        className="btn-close float-end"
                        onClick={() => setSelectedCourse(null)}
                    ></button>
                    <strong>{selectedCourse.name}</strong> <hr />
                    <strong>University:</strong> {selectedCourse.university} <br /> <br />
                    <strong>Semester:</strong> {selectedCourse.semester}<br /><br />
                    <strong>Grade:</strong> {selectedCourse.grade}<br /><br />
                    <strong>Credits:</strong> {selectedCourse.credits}<br /><br />
                    <strong>Level:</strong> {selectedCourse.level}<br /><br />
                    <strong>Course Info:</strong> {selectedCourse.description} <br /><br />
                </div>
            )}

            {!tableView &&

            <div id="courses-container" className=" mt-5">
                <div className="courses-grid">
                    {courses &&
                    courses.map((course: any) => (
                        <div className="course-card" key={course._id}>
                        <div className="card rounded-3 overflow-hidden">
                        
                            <img
                            src={course.image}
                            alt={course.name}
                            className="card-img-top"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center info-button-course">
                            <h5 className="card-title">{course.name}</h5>

                            <button
                                onClick={() => {setSelectedCourse(course); showInfoCard(course)} }
                                className="btn" style={{width:"100%"}}
                            >
                                Learn More
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
}


        </div>

    );
}