import React,{Component} from "react";

export default class Categoria extends Component{
    //estado de la funcion
    state={
        categorias:[]

    }

    //funcion para tomar los datos desde la url

    //ahora voy a tomar la url


    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json();
        console.log(data)
        this.setState({categorias:data})
        //aqui voy a pasar el valor que tenemos el la variable data al estado
        //this.setState({categorias: data['hydra:member']})
        //aqui voy a ver por consola que estoy recibiendo
        console.log(this.state.categorias)
    }
    //lo bueno es que si lo lograste
    //si mas por pica al Chalo me cae mal que no le voy a dejar que me saque de la carrera :P
    // ya somos dos  ok :me dvespido voy a comer algo buena noche
    //muchas garcias buen provecha chau chao...

    render() {
        return <div>

            {
                this.state.categorias.map( e => <div key={e.id}> {e.id}---{e.title}</div>)
            }

        </div>
    }
}