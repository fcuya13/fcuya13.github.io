import CardList from "./CardList"

const SalasBody = () => {
    const salasList = [
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala A",
            labels: ["12:00","14:00","15:00","16:00"],
            path : "/salas/sala-a"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala B",
            labels: ["Security","Back-end"],
            path : "/salas/sala-b"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala C",
            labels: ["13:00","14:00","15:00","16:00","17:00"],
            path : "/salas/sala-c"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala D",
            labels: ["Security","Back-end"],
            path : "/salas/sala-d"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala E",
            labels: ["13:00","14:00","15:00","16:00","17:00"],
            path : "/salas/sala-e"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala F",
            labels: ["Security","Back-end"],
            path : "/salas/sala-f"
        },
    ]

    return <div style={ { marginLeft: '30px', marginRight: '10px'}}>
        <CardList list = { salasList } size = {6}/>
    </div>
}

export default SalasBody
