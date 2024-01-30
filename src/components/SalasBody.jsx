import CardList from "./CardList2"

const SalasBody = () => {
    const salasList = [
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala A",
            labels: ["12:00","14:00"],
            path : "/salas/sala-a"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala B",
            labels: ["12:00","14:00"],
            path : "/salas/sala-b"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala C",
            labels: ["12:00","14:00"],
            path : "/salas/sala-c"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala D",
            labels: ["12:00","14:00"],
            path : "/salas/sala-d"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala E",
            labels: ["12:00","14:00"],
            path : "/salas/sala-e"
        },
        {
            inf: "JohnJohn Doe • 4 Feb 2022",
            tittle: "Sala F",
            labels: ["12:00","14:00"],
            path : "/salas/sala-f"
        },
    ]


    return <div style={ { marginLeft: '30px', marginRight: '10px'}}>
        <CardList row = { salasList }/>
    </div>
}

export default SalasBody
