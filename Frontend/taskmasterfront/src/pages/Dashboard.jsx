import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserByName } from "../api/userapi"
import { useStore } from "../statestore/useStore"
import '../styles/Dashboard.css'

export default function Dashboard(){
    const {name} = useParams();
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        if(!authenticated){
            navigate("/");
        }
        getUserByName(name).then((data) => setUser(data));

    }, [navigate]);

    return <>
    <div className="WelcomeHeading">
        <h1>Welcome to your Dashboard {user && user.username}</h1>
    </div>
    <div className="Dashboard">
            {user && user.projects.map((project) => (
                <div key={project.id} className="project-card">
                    <h2>{project.name}</h2>
                    <p>Remaining Tasks:</p>
                    <button onClick={() => navigate(`/projectmanager/${project.id}`)}>
                        Manage Project
                    </button>
                </div>
            ))}
    </div>
    </>
}