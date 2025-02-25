let activity = ["Go for a run",
    "Read a book",
    "Watch a documentary",
    "Cook a new recipe",
    "Try a new hobby",
    "Visit a museum",
    "Learn a new skill"]



    function SuggestAnActivity(){
        const randomIndex = Math.floor(Math.random() * activity.length);
        document.getElementById("activitydiv").innerHTML = activity[randomIndex];
    }

function Add(){
    const newActivity = document.getElementById("inpt").value.trim()
    if(newActivity != "")activity.push(newActivity);
    document.getElementById("inpt").value = ""
}