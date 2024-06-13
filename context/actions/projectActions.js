export const SET_PROJECTS = (projects) =>{
    console.log(projects);
    return{
        type:"SET_PROJECTS",
        projects:projects,
    }
};

export const SET_USER_NULL = () =>{
    return{
        type:"SET_PROJECTS_NULL",
    }
}